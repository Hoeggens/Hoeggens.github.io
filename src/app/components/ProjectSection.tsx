"use client";
import Link from "next/link";
import ProjectButton from "./ProjectButton";
import { PROJECT_SECTION_TEXT_SWE } from "../languages/swe_text";
import { PROJECT_SECTION_TEXT_ENG } from "../languages/eng_text";
import { useLanguage } from "../lib/LanguageProvider";
import { getSlug } from "../lib/getSlugsClient";

interface Project {
  created_at: string;
  id: string;
  project_content: string;
  project_description: string;
  project_name: string;
  slug: string;
}

interface Props {
  projects: Project[];
}

export default function ProjectSection({ projects }: Props) {
  const { language } = useLanguage();
  let text;
  if (language === process.env.NEXT_PUBLIC_SWEDISH) {
    text = PROJECT_SECTION_TEXT_SWE;
  } else {
    text = PROJECT_SECTION_TEXT_ENG;
  }
  const slug = getSlug(language);

  return (
    <section className="bg-bg py-12 px-4 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-accent mb-6 2xl:text-6xl">
          {text.TITLE}
        </h2>
        <p className="text-text text-center mb-8 max-w-2xl 2xl:text-4xl">
          {text.DESCRIPTION}
          <br />
          <br />
          {text.ADDITIONAL}
        </p>
      </div>
      <div className="flex flex-col text-center justify-center md:items-end md:justify-end w-full mb-6 md:pr-8 lg:pr-24">
        <Link
          href={`/${slug}`}
          className="text-accent font-semibold text-lg 2xl:text-3xl group transition duration-300 group-hover:text-gray-100 inline-block"
        >
          <span className="relative after:block after:h-[2px] after:bg-accent after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">
            {text.VIEW_ALL} &rarr;
          </span>
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(projects ?? []).slice(0, 4).map((project: any) => (
          <li
            key={project.id}
            className="bg-card-bg border border-border  rounded-lg p-6 transition hover:shadow-lg hover:border-accent"
          >
            <Link
              href={`/${slug}/${project.slug
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="group block h-full"
            >
              <h3 className="text-xl font-semibold text-text 2xl:text-5xl">
                {project.project_name}
              </h3>
              <p className="text-neutral-700  2xl:text-3xl mt-2">
                {project.project_description}
              </p>
              <ProjectButton language={language} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
