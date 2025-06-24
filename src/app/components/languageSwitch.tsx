"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../lib/LanguageProvider";
import cookies from "js-cookie";

const flagSrc = (code: string) => `/svg/flags/${code}.svg`;

const languages = [
  { code: "sv", label: "Svenska" },
  { code: "eng", label: "English" },
];

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const handleSelect = (code: string) => {
    if (code === language) return;
    setLanguage(code);
    setOpen(false);
    cookies.set(process.env.NEXT_PUBLIC_LANGUAGECOOKIE, code, {
      secure: true,
      sameSite: "strict",
    });
    window.location.reload();
  };

  const selectedLang =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div ref={ref} className="relative inline-block">
      {/* Trigger button */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="bg-bg text-text border border-border rounded-md flex items-center justify-between px-4 py-3 text-base outline-none transition-shadow w-[150px] 2xl:w-[200px] focus:ring-2 focus:ring-accent"
      >
        <span className="flex items-center truncate">
          <img
            src={flagSrc(selectedLang.code)}
            alt={`${selectedLang.label} flag`}
            className="mr-2 w-5 h-4 object-contain 2xl:w-8 2xl:h-6"
          />
          <span className="truncate 2xl:text-2xl">{selectedLang.label}</span>
        </span>
        <span className="ml-2 text-xs text-gray-500">▼</span>
      </button>

      {/* Dropdown list */}
      {open && (
        <ul
          role="listbox"
          className="
            absolute right-0 mt-2 bg-white text-gray-900
            border border-gray-200 rounded-lg shadow-xl z-20
            divide-y divide-gray-200 w-[150px] 2xl:w-[200px]
          "
        >
          {languages.map((lang, idx) => {
            const isSelected = lang.code === language;
            const roundedClass =
              idx === 0
                ? "rounded-t-lg"
                : idx === languages.length - 1
                ? "rounded-b-lg"
                : "";
            return (
              <li
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                tabIndex={-1}
                onClick={() => handleSelect(lang.code)}
                className={`
                  block w-full flex items-center px-4 py-3 cursor-pointer transition-colors
                  ${roundedClass}
                  ${
                    isSelected
                      ? "bg-bg text-accent font-bold"
                      : "hover:bg-gray-200"
                  }
                `}
              >
                <img
                  src={flagSrc(lang.code)}
                  alt={`${lang.label} flag`}
                  className="mr-3 w-6 h-4 object-contain rounded shadow-sm 2xl:w-8 2xl:h-6 "
                />
                <span className="2xl:text-2xl">{lang.label}</span>
                {isSelected && (
                  <svg
                    className="ml-auto w-4 h-4 2xl:w-8 2xl:h-6 text-hoverlink"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitch;
