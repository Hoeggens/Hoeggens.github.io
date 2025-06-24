"use client";
import { HERO_SECTION_TEXT_SWE } from "../languages/swe_text";
import { HERO_SECTION_TEXT_ENG } from "../languages/eng_text";
import { useLanguage } from "../lib/LanguageProvider";

const HeroSection = () => {
  const { language } = useLanguage();

  let text;

  if (language === process.env.NEXT_PUBLIC_SWEDISH) {
    text = HERO_SECTION_TEXT_SWE;
  } else {
    text = HERO_SECTION_TEXT_ENG;
  }

  return (
    <div className="min-h-screen w-full bg-[url('/REALTEST.png')] bg-cover xl:bg-contain xl:bg-top bg-center bg-repeat-x pt-20 flex items-center justify-center">
      {" "}
      <div
        className={`
        bg-black bg-opacity-30 rounded-lg p-4 max-w-md
        absolute top-0 left-1/2
        mt-28  -translate-x-1/2 text-center

          sm:mt-28 sm:left-1/2 sm:-translate-x-1/2 sm:text-center´
          xl:mt-12 xl:ml-12 xl:-translate-x-1/2 xl:text-center
        2xl:mt-36 2xl:ml-12 2xl:-translate-x-1/2 2xl:text-left
        [@media(min-width:1330px)]:top-28 [@media(min-width:1330px)]:left-4 [@media(min-width:1330px)]:translate-x-0 [@media(min-width:1330px)]:text-left
      `}
        style={{
          maxWidth: "90vw",
        }}
      >
        <h1 className="sm:text-xl text-2xl 2xl:text-6xl md:text-3xl xl:text-4xl font-bold text-gray-100 mb-2">
          {text.INTRO}
        </h1>
        <p className="hidden 2xl:text-4xl sm:block text-gray-100 md:text-lg xl:text-xl">
          {text.SUBTITLE}
        </p>
        <p className="hidden lg:block 2xl:text-4xl text-base md:text-lg xl:text-xl text-gray-100">
          {text.DESCRIPTION}
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
