"use client";
import React from "react";
import ProjectButton from "./ProjectButton";
import { PROJECT_SECTION_TEXT_SWE } from "../languages/swe_text";
import { PROJECT_SECTION_TEXT_ENG } from "../languages/eng_text";
import { useLanguage } from "../lib/LanguageProvider";
import Link from "next/link";
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

function ProjectPageGrid({ projects }: Props) {
  const { language } = useLanguage();
  let text;
  if (language === process.env.NEXT_PUBLIC_SWEDISH) {
    text = PROJECT_SECTION_TEXT_SWE;
  } else {
    text = PROJECT_SECTION_TEXT_ENG;
  }
  const slug = getSlug(language);
  return (
    <main className="bg-bg min-h-screen pb-16 py-28">
      <div className="max-w-3xl mx-auto px-6 2xl:max-w-6xl">
        <h1 className="text-accent text-center text-4xl font-bold mb-2 tracking-tight md:text-5xl 2xl:text-6xl">
          {text.HEADER}
        </h1>
        <p className="text-text text-center mb-10  2xl:text-3xl">
          {text.RECENT}
        </p>
        <div className="grid sm:gap-x-12 md:gap-x-24 lg:gap-x-72 gap-x-72 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/${slug}/${project.slug
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="bg-card-bg border border-border rounded-2xl shadow-md p-8 flex flex-col gap-6 text-text no-underline transition duration-200 hover:border-accent hover:shadow-lg min-h-[320px] min-w-[320px] 2xl:min-h-[540px] 2xl:min-w-[440px] group block"
            >
              <h2 className="text-accent text-2xl font-semibold 2xl:text-4xl">
                {project.project_name}
              </h2>
              <p className="text-text text-lg 2xl:text-3xl">
                {project.project_description}
              </p>
              <div className="mt-auto">
                <ProjectButton language={language} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectPageGrid;
