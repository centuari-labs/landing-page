import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Centuari - Next Generation Lending Protocol",
  description:
    "Reinventing DeFi Lending With CLOB, Fixed Rates, Curated Vaults, and Real-World Integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden`}
      >
        <Navbar />
        <ReCaptchaProvider>{children}</ReCaptchaProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
