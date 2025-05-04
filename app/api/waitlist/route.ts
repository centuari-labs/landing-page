import { supabase } from "@/libs/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, recaptchaToken } = await request.json();

    if (!email || !recaptchaToken) {
      return NextResponse.json(
        { error: "Email and reCAPTCHA verification are required" },
        { status: 400 }
      );
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already registered in our waitlist" },
          { status: 409 }
        );
      }

      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save data to the database" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email successfully registered" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "An error occurred on the server" },
      { status: 500 }
    );
  }
}
