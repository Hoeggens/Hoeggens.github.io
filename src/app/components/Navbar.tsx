"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSwitch from "./languageSwitch";
import { useLanguage } from "../lib/LanguageProvider";
import { NAVBAR_LABELS_SWE } from "../languages/swe_text";
import { NAVBAR_LABELS_ENG } from "../languages/eng_text";
import { getSlugs } from "../lib/Slug-map";

const Navbar = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkStyles =
    "relative inline-block text-text transition-transform transform hover:scale-110 hover:text";
  const underlineStyles =
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-text after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  let links: { href: string; label: string }[] = [];

  const hrefs = getSlugs(language);
  if (language === process.env.NEXT_PUBLIC_SWEDISH) {
    const labels = Object.values(NAVBAR_LABELS_SWE);
    links = labels.map((label, idx) => ({
      href: hrefs[idx],
      label,
    }));
  } else {
    const labels = Object.values(NAVBAR_LABELS_ENG);
    links = labels.map((label, idx) => ({
      href: hrefs[idx],
      label,
    }));
  }

  return (
    <nav
      className={`
        transition-all duration-500 ease-in-out
        fixed top-0 left-0 w-full z-30 bg-bg opacity-90
        ${
          isScrolled ? "pt-2 pb-2 " : "pt-6 pb-6 2xl:pt-8 2xl:pb-8"
        } border-b border-accent/50
      `}
    >
      <div className="w-full px-6 flex justify-between items-center md:justify-between">
        {/* Hamburger Icon (left on mobile) */}
        <button
          className="md:hidden flex items-center p-2 transition-transform duration-300"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className={`h-8 w-8 text-text transition-transform duration-300 ${
              menuOpen ? "rotate-90 scale-110" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {menuOpen ? (
              // X icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* SVG Icon */}
        <a
          href="/"
          className={`
            flex items-center
            ${/* Center on mobile, left on desktop */ ""}
            absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0
          `}
          style={{ zIndex: 40 }}
        >
          <img
            src="/svg/eph_colored_icon.svg"
            alt="Logo"
            className="h-14 w-14 md:h-10 md:w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 transition-all duration-300"
          />
        </a>
        {/* Desktop Links */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex space-x-16 lg:space-x-24 xl:space-x-36 2xl:space-x-64 xl:text-xl  2xl:text-3xl text-lg font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${navLinkStyles} ${underlineStyles}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Spacer for mobile to balance hamburger and logo */}
        <div className="w-8 h-8 md:hidden" />
        <div className="hidden sm:block">
          <LanguageSwitch />
        </div>
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden bg-bg px-6 pt-2 transition-all duration-300
          ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }
        `}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <div className="flex flex-row items-center justify-between space-x-4">
          <ul className="grid grid-cols-2 gap-x-0 gap-y-10 text-lg font-semibold pl-0 mb-0 justify-items-center w-full">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${navLinkStyles} ${underlineStyles}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex justify-end sm:hidden">
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
