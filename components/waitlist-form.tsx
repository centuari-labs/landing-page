"use client";

import { useState, FormEvent, useCallback } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useReCaptcha } from "next-recaptcha-v3";
import { toast } from "sonner";
import { cn } from "@/libs/utils";

export default function WaitlistForm() {
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
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
          toast.success("Success! Your email has been added to the waitlist.");
          setIsError(false);
          setEmail("");
        } else {
          toast.error(data.error || "An error occurred. Please try again.");
          setIsError(true);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [executeRecaptcha, email]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center relative w-full md:w-[500px] gap-3 mt-4 md:mt-8 md:flex-row">
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="jhon@centuari.com"
            className={cn(
              "rounded-full h-14 border-[#1084AB] px-3 ring-[#0C63BA]",
              isError ? "border-red-500 focus:ring-red-600" : ""
            )}
          />
          <Button
            type="submit"
            variant="colorful"
            className="cursor-pointer rounded-full absolute right-2"
            disabled={loading || !email}
          >
            {loading ? "Loading..." : "Subscribe"}
          </Button>
        </div>
      </form>
    </>
  );
}
