"use client";

import { useState, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function WaitlistForm() {
  const [email, setEmail] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA verification!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Success! Your email has been added to the waitlist.");
        setEmail("");
        setRecaptchaToken(null);
        // Reset reCAPTCHA
        const recaptchaElement = document.querySelector(
          'iframe[src*="recaptcha"]'
        )?.parentElement;
        if (recaptchaElement && window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        setStatus(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center w-full gap-3 mt-8 md:flex-row">
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Join waitlist"
          />
          <Button
            type="submit"
            variant="colorful"
            className="cursor-pointer"
            disabled={loading || !email}
          >
            {loading ? "Loading..." : "Join Waitlist"}
          </Button>
        </div>

        <div className="mt-4">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleRecaptchaChange}
          />
        </div>
      </form>

      {status && (
        <div
          className={`mt-4 p-3 rounded-md ${
            status.includes("Success")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </div>
      )}
    </>
  );
}
