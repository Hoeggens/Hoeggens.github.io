export default function ProjectButton({ language }: { language: string }) {
  return (
    <button
      type="button"
      className="inline-block 2xl:text-3xl mt-4 2xl:px-6 2xl:py-4 px-4 py-2 rounded bg-accent text-white font-medium transition group-hover:underline group-hover:bg-hoverlink 2xl:rounded-lg"
    >
      {language === process.env.SWEDISH ? "Visa projekt →" : "View Project →"}
    </button>
  );
}
