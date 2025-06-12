"use client";
import React, { useState } from "react";
import Image from "next/image";

const MAX_MESSAGE_LENGTH = 1000;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className=" mb-12 ">
          <h1 className="text-4xl font-bold text-center text-accent md:mt-2 mt-8">
            Get In Touch
          </h1>
          <p className="text-text text-center sm:text-lg">
            Have a question or just want to say hi? Please reach out to me!
          </p>
        </div>

        {/* Grid Layout: Profile + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Profile Card */}
          <div className="bg-card-bg border border-border rounded-2xl p-8 shadow-md flex flex-col justify-center h-full">
            <div className="flex flex-col items-center md:items-center flex-1">
              <Image
                src="/TEST.jpg"
                alt="Pontus Höglund"
                width={300}
                height={300}
                className="rounded-2xl border-4 border-accent object-cover shadow mb-6"
                priority
              />
              <h2 className="text-2xl font-semibold text-text mb-1">
                Pontus Höglund
              </h2>
              <p className="text-base text-secondary-text mb-1">
                Skellefteå, Sweden
              </p>
              <a
                href="mailto:pontus.hoglund@hoeggens.se"
                className="text-link text-base hover:underline mb-1"
              >
                pontus.hoglund@hoeggens.se
              </a>
              <a
                href="tel:+46701234567"
                className="text-link text-base hover:underline"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-secondary-text mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-bg text-text px-3 py-2 outline-none focus:border-accent transition"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-secondary-text mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-bg text-text px-3 py-2 outline-none focus:border-accent transition"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-secondary-text mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                maxLength={MAX_MESSAGE_LENGTH}
                required
                className="w-full rounded-lg border border-border bg-bg text-text px-3 py-2 resize-y outline-none focus:border-accent transition"
              />
              <div className="text-xs text-secondary-text text-right mt-1">
                {form.message.length} / {MAX_MESSAGE_LENGTH}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full bg-accent text-white py-3 rounded-lg font-semibold text-base shadow hover:scale-[1.02] transition ${
                submitted
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-hoverlink"
              }`}
            >
              {submitted ? "Message Sent!" : "Send Message"}
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
