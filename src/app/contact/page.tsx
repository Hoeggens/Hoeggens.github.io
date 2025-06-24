"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CONTACT_SECTION_TEXT_SWE } from "../languages/swe_text";
import { CONTACT_SECTION_TEXT_ENG } from "../languages/eng_text";
import { useLanguage } from "../lib/LanguageProvider";

const MAX_MESSAGE_LENGTH = 1000;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  let text;
  if (language === "sv") {
    text = CONTACT_SECTION_TEXT_SWE;
  } else {
    text = CONTACT_SECTION_TEXT_ENG;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "message" ? value.slice(0, MAX_MESSAGE_LENGTH) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-bg min-h-screen py-28 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto w-full 2xl:w-[1200px]">
        {/* Heading */}
        <div className=" mb-12 ">
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-center text-accent md:mt-2 mt-8">
            {text.TITLE}
          </h1>
          <p className="text-text text-center sm:text-lg 2xl:text-4xl">
            {text.DESCRIPTION}
          </p>
        </div>

        {/* Grid Layout: Profile + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[560px] 2xl:min-h-[860px]">
          {/* Profile Card */}
          <div className="bg-card-bg border border-border rounded-2xl p-8 shadow-md flex flex-col justify-center h-full">
            <div className="flex flex-col items-center md:items-center flex-1">
              <div className="w-full max-w-xs 2xl:max-w-md aspect-[7/9] relative mb-6 2xl:mb-12 mx-auto 2xl:mt-6">
                <Image
                  src="/TEST.jpg"
                  alt="Pontus Höglund"
                  fill
                  className="rounded-2xl border-4 border-accent object-cover shadow"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1536px) 320px, 400px"
                />
              </div>
              <h2 className="text-2xl font-semibold text-text mb-1 2xl:text-2xl">
                Pontus Höglund
              </h2>
              <p className="text-base text-secondary-text mb-1 2xl:text-2xl">
                Skellefteå, {text.LOCATION}
              </p>
              <a
                href="mailto:pontus.hoglund@hoeggens.se"
                className="text-link text-base hover:underline mb-1 2xl:text-2xl"
              >
                pontus.hoglund@hoeggens.se
              </a>
              <a
                href="tel:+46701234567"
                className="text-link text-base hover:underline 2xl:text-2xl"
              >
                +46 70 123 45 67
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card-bg border border-border rounded-2xl p-8 shadow-lg flex flex-col gap-5 h-full justify-center"
          >
            <h1 className="text-accent text-4xl font-semibold text-center mb-24 2xl:text-5xl">
              {text.SEND_EMAIL}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-secondary-text mb-1 2xl:text-2xl"
                  htmlFor="name"
                >
                  {text.NAME_LABEL}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full 2xl:text-2xl rounded-lg border border-border bg-bg text-text px-3 py-2 outline-none focus:border-accent transition"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-secondary-text mb-1 2xl:text-2xl"
                  htmlFor="email"
                >
                  {text.EMAIL_LABEL}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className=" 2xl:text-2xl w-full rounded-lg border border-border bg-bg text-text px-3 py-2 outline-none focus:border-accent transition"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-secondary-text mb-1 2xl:text-2xl"
                htmlFor="message"
              >
                {text.MESSAGE_LABEL}
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                maxLength={MAX_MESSAGE_LENGTH}
                required
                className="w-full 2xl:text-2xl rounded-lg border max-h-[240px] border-border bg-bg text-text px-3 py-2 resize-y outline-none focus:border-accent transition"
              />
              <div className="text-xs text-secondary-text text-right mt-1 2xl:text-xl">
                {form.message.length} / {MAX_MESSAGE_LENGTH}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full bg-accent 2xl:text-2xl 2xl:py-4 text-white py-3 rounded-lg font-semibold text-base shadow hover:scale-[1.02] transition ${
                submitted
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-hoverlink"
              }`}
            >
              {submitted ? text.SEND_BUTTON : text.MESSAGE_SENT}
            </button>
          </form>
        </div>

        {/* Material Icons */}
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
        `}</style>
      </div>
    </main>
  );
}
