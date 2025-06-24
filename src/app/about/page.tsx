"use client";
import { Mail, Github } from "lucide-react";
import React from "react";
import Image from "next/image";
import { ABOUT_SECTION_TEXT_SWE } from "../languages/swe_text";
import { ABOUT_SECTION_TEXT_ENG } from "../languages/eng_text";
import { useLanguage } from "../lib/LanguageProvider";

export default function AboutPage() {
  const { language } = useLanguage();
  let text;
  if (language === "sv") {
    text = ABOUT_SECTION_TEXT_SWE;
  } else {
    text = ABOUT_SECTION_TEXT_ENG;
  }
  return (
    <div className="max-w-4xl 2xl:max-w-6xl 2xl:text-4xl w-full mx-auto mt-12 mb-12 px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-accent text-center md:text-5xl 2xl:text-6xl">
        {text.TITLE}
      </h1>
      <main className="bg-background rounded-2xl shadow-lg font-sans p-0 overflow-hidden">
        <div className="w-full h-72 sm:h-80 md:h-96 2xl:h-[32rem] relative">
          <Image
            src="/REAL.png"
            alt="Pontus"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="p-8">
          <p className="text-lg text-text mb-6 2xl:text-3xl">
            {text.DESCRIPTION}
          </p>
          <p className="text-lg text-text mb-6 2xl:text-3xl">
            {text.CONTINUATION}
          </p>
          <p className="text-lg text-text mb-8 2xl:text-3xl">{text.PERSONAL}</p>
          <div className="flex gap-4">
            <div className="flex w-full justify-between">
              <a
                href="https://github.com/Hoeggens"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 2xl:px-6 2xl:py-4 px-4 py-2 rounded-lg bg-accent text-bg font-semibold shadow hover:bg-hoverlink transition text-lg"
                aria-label="GitHub"
              >
                <Github size={24} className="2xl:w-7 2xl:h-7" />
                GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center 2xl:px-6 2xl:py-4 gap-2 px-4 py-2 rounded-lg bg-accent text-bg font-semibold shadow hover:bg-hoverlink transition text-lg"
                aria-label="Contact"
              >
                <Mail size={24} className="2xl:w-7 2xl:h-7" />
                {text.CONTACT}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
