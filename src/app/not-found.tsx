"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const [seconds, setSeconds] = useState(30);
  const router = useRouter();

  useEffect(() => {
    if (seconds === 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg text-text font-sans">
      <h1 className="text-7xl font-bold mb-0 text-accent">404</h1>
      <h2 className="text-2xl font-semibold mt-0 text">Page Not Found</h2>
      <p className="my-6 text-lg">
        Redirecting to{" "}
        <Link href="/" className="text-accent underline">
          homepage
        </Link>{" "}
        in <span className="text-text">{seconds}</span> seconds.
      </p>
      <Link
        href="/"
        className="bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-hoverlink hover:scale-105"
      >
        Go Home Now
      </Link>
    </main>
  );
}
