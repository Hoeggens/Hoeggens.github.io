"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NOT_FOUND_PAGE_SWE } from "../app/languages/swe_text";
import { NOT_FOUND_PAGE_ENG } from "../app/languages/eng_text";
import { useLanguage } from "../app/lib/LanguageProvider";

export default function NotFoundPage() {
  const [seconds, setSeconds] = useState(30);
  const router = useRouter();
  const { language } = useLanguage();
  let text;
  if (language === process.env.NEXT_PUBLIC_SWEDISH) {
    text = NOT_FOUND_PAGE_SWE;
  } else {
    text = NOT_FOUND_PAGE_ENG;
  }

  useEffect(() => {
    if (seconds === 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg text-text font-sans transition-colors duration-700">
      <Image
        src="/svg/eph_colored_icon.svg"
        width={250}
        height={250}
        alt="Eph Colored Icon"
        className={`w-56 h-56 mb-8 transition-opacity duration-700 ${
          seconds % 2 === 0 ? "opacity-100 scale-105" : "opacity-30 scale-95"
        }`}
        style={{ transition: "opacity 0.7s, transform 0.7s" }}
      />
      <h1 className="text-7xl font-bold mb-0 text-accent transition-all duration-700">
        {seconds === 0 ? "Redirecting..." : "404"}
      </h1>
      <h2
        className="text-2xl font-semibold mt-0 transition-all duration-700"
        style={{ opacity: seconds === 0 ? 0.5 : 1 }}
      >
        {text.TITLE}
      </h2>
      <p
        className="my-6 text-lg transition-opacity duration-700"
        style={{ opacity: seconds === 0 ? 0.5 : 1 }}
      >
        {text.DESCRIPTION}{" "}
        <Link href="/" className="text-accent underline font-semibold">
          {text.DESCRIPTION2}
        </Link>{" "}
        {text.IN} <span className="text-accent font-bold">{seconds}</span>{" "}
        {text.SECONDS}.
      </p>
      <Link
        href="/"
        className="bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-hoverlink hover:scale-105"
        style={{
          opacity: seconds === 0 ? 0.5 : 1,
          pointerEvents: seconds === 0 ? "none" : "auto",
        }}
      >
        {text.NOW}
      </Link>
    </main>
  );
}
