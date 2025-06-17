import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cookies } from "next/headers";
import LanguageProviderWrapper from "./lib/LanguageProviderWrapper";

export const metadata = {
  icons: {
    icon: "/svg/eph_colored_icon.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const languageCookie = cookieStore.get("languageCookie")?.value || "sv";

  return (
    <html lang={languageCookie}>
      <body className="bg-bg text-text font-sans antialiased">
        <LanguageProviderWrapper initialLanguage={languageCookie}>
          <Navbar />
          {children}
          <Footer />
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
