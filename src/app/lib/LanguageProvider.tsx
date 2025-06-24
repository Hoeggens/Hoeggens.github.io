"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

interface LanguageProviderProps {
  initialLanguage: string;
  children: ReactNode;
}

export default function LanguageProvider({
  initialLanguage,
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState(initialLanguage);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    Cookies.set("languageCookie", lang, {
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  };

  useEffect(() => {
    const cookieLang = Cookies.get("languageCookie");
    if (cookieLang && cookieLang !== language) {
      setLanguageState(cookieLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
