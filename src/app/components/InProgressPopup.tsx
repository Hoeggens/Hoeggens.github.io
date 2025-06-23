"use client";
import React, { useEffect, useState } from "react";
import { WORK_IN_PROGRESS_SWE } from "../languages/swe_text";
import { WORK_IN_PROGRESS_ENG } from "../languages/eng_text";
import { useLanguage } from "../lib/LanguageProvider";

const COOKIE_NAME = "portfolio_in_progress";
const COOKIE_VALUE = "true";
const COOKIE_DAYS = 5;
const POPUP_DELAY = 5000;

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

const InProgressPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      const timer = setTimeout(() => {
        setOpen(true);
        setTimeout(() => setVisible(true), 10);
      }, POPUP_DELAY);
      return () => clearTimeout(timer);
    }
  }, []);

  const language = useLanguage();
  let text;
  if (language.language === process.env.swedish) {
    text = WORK_IN_PROGRESS_SWE;
  } else {
    text = WORK_IN_PROGRESS_ENG;
  }

  const handleClose = () => {
    setCookie(COOKIE_NAME, COOKIE_VALUE, COOKIE_DAYS);
    setVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className="bg-white p-8 2xl:rounded-2xl rounded-lg min-w-[300px] 2xl:min-w-[800px] shadow-lg text-center border border-gray-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-0 right-2 2xl:right-4 text-gray-400 hover:text-hoverlink text-4xl 2xl:text-8xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-4xl font-bold text-accent 2xl:text-8xl mb-6 2xl:mb-16">
          {text.TITLE}
        </h2>
        <p className="text-2xl text-text 2xl:text-6xl 2xl:mb-6">
          {text.DESCRIPTION}
        </p>
        <p className="text-2xl text-text 2xl:text-6xl 2xl:mb-6">
          {text.CLARIFICATION}
        </p>
        <p className="text-2xl text-accent 2xl:text-6xl 2xl:mb-6">
          {text.CLOSE}
        </p>
      </div>
    </div>
  );
};

export default InProgressPopup;
