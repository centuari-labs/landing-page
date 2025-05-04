import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-5 left-0 w-full z-50">
      <div className="container mx-auto px-8 py-2 flex bg-slate-900 border border-slate-500 justify-between items-center max-w-5xl h-16 rounded-full">
        <Image src={"/logo.png"} width={150} height={150} alt="centuari logo" />
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="https://x.com/CentuariLabs"
            className="hover:underline dark:text-muted-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link
            href="https://discord.gg/XU2hUG4Uuz"
            className="hover:underline dark:text-muted-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="9" cy="12" r="1" />
              <circle cx="15" cy="12" r="1" />
              <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
              <path d="M7.5 16.5c3.5 1 5.5 1 9 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
              <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
            </svg>
          </Link>
          <Link
            href="https://centuari.gitbook.io/docs"
            className="hover:underline dark:text-muted-dark"
          >
            Docs
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
