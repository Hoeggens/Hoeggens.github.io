import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import { withdrawProjectData } from "./lib/fetchProjects";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const language =
    cookieStore.get(process.env.LANGUAGECOOKIE)?.value || process.env.SWEDISH;

  const projectz = await withdrawProjectData(language);

  return (
    <>
      <HeroSection />
      <ProjectSection projects={projectz} />
    </>
  );
}
