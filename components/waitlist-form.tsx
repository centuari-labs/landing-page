"use client";

import { useState, FormEvent, useCallback } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useReCaptcha } from "next-recaptcha-v3";

export default function WaitlistForm() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Generate ReCaptcha token
      const token = await executeRecaptcha("form_submit");

      setLoading(true);

      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, recaptchaToken: token }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("Success! Your email has been added to the waitlist.");
          setEmail("");
        } else {
          setStatus(data.error || "An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setStatus("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [executeRecaptcha, email]
  );

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
