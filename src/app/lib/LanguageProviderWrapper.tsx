"use client";

import LanguageProvider from "./LanguageProvider";

interface Props {
  initialLanguage: string;
  children: React.ReactNode;
}

export default function LanguageProviderWrapper({
  initialLanguage,
  children,
}: Props) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      {children}
    </LanguageProvider>
  );
}
