const HeroSection = () => {
  return (
    <div className="lg:mt-24 md:mt-24 sm:mt-32 mt-32 min-h-screen w-full bg-[url('/REAL.png')] bg-cover bg-center pt-20 md:pt-24 flex items-center justify-center">
      <div
        className={`
        bg-black bg-opacity-30 rounded-lg p-4 max-w-md
        absolute
        top-32 left-1/2 -translate-x-1/2 text-center
        md:top-24 md:left-1/2 md:-translate-x-1/2 md:text-center
        lg:top-24 lg:left-1/2 lg:-translate-x-1/2 lg:text-center
        xl:top-24 xl:left-1/2 xl:-translate-x-1/2 xl:text-center
        xl:text-3xl xl:max-w-md
        [@media(min-width:1330px)]:top-28 [@media(min-width:1330px)]:left-4 [@media(min-width:1330px)]:translate-x-0 [@media(min-width:1330px)]:text-left
      `}
        style={{
          maxWidth: "90vw",
        }}
      >
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-gray-100 mb-2">
          Hi, I'm Pontus Höglund
        </h1>

        <p className="hidden sm:block text-gray-100 md:text-lg xl:text-2xl">
          Newly graduated and passionate developer
        </p>
        <p className="hidden lg:block text-base md:text-lg xl:text-2xl text-gray-100">
          eager to build beautiful and functional experiences.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
