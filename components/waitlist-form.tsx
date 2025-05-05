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
    <form
      onSubmit={handleSubmit}
      className="md:w-1/3 w-full flex flex-col items-center justify-center"
    >
      <div className="flex items-center relative md:w-full w-2/3 justify-center gap-3 mt-8 md:mt-8 md:flex-row">
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jhon@centuari.com"
          className={cn(
            "rounded-full md:h-14 h-12 border-[#1084AB] text-xs md:text-sm px-3 ring-[#0C63BA] placeholder:text-xs md:placeholder:text-sm",
            isError ? "border-red-500 focus:ring-red-600" : ""
          )}
        />
        <Button
          type="submit"
          variant={isError ? "destructive" : "colorful"}
          className="cursor-pointer rounded-full absolute right-2 text-xs md:text-sm my-2"
          disabled={loading || !email}
        >
          {loading ? "Loading..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
