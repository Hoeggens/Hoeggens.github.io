import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cookies } from "next/headers";
import LanguageProviderWrapper from "./lib/LanguageProviderWrapper";
import InProgressPopup from "./components/InProgressPopup";

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
  const languageCookie =
    cookieStore.get(process.env.NEXT_PUBLIC_LANGUAGECOOKIE)?.value ||
    process.env.NEXT_PUBLIC_SWEDISH;

  return (
    <html lang={languageCookie}>
      <body className="bg-bg text-text font-sans antialiased">
        <LanguageProviderWrapper initialLanguage={languageCookie}>
          <InProgressPopup />
          <Navbar />
          {children}
          <Footer />
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
