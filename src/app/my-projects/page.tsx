"use client";
import React from "react";
import ProjectButton from "../components/ProjectButton";
import { PROJECT_SECTION_TEXT_SWE } from "../languages/swe_text";
import { PROJECT_SECTION_TEXT_ENG } from "../languages/eng_text";
import { useLanguage } from "../lib/LanguageProvider";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with React and TypeScript.",
    link: "https://yourportfolio.com",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app to manage daily tasks, built with Next.js and Tailwind CSS.",
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard using OpenWeatherMap API and styled-components.",
    link: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Recipe Finder",
    description:
      "A web app to search and save recipes, using the Spoonacular API and React Query.",
    link: "https://github.com/yourusername/recipe-finder",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with Socket.io, Express, and React.",
    link: "https://github.com/yourusername/chat-app",
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack e-commerce platform with Stripe integration and Next.js.",
    link: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Blog Platform",
    description:
      "A markdown-based blog platform with authentication and comments, built with Next.js.",
    link: "https://github.com/yourusername/blog-platform",
  },
  {
    title: "Movie Explorer",
    description:
      "Browse and search movies using the TMDB API, built with React and Chakra UI.",
    link: "https://github.com/yourusername/movie-explorer",
  },
  {
    title: "Fitness Tracker",
    description:
      "Track workouts and progress, built with React Native and Firebase.",
    link: "https://github.com/yourusername/fitness-tracker",
  },
];

export default function ProjectsPage() {
  const { language } = useLanguage();
  let text;
  if (language === "sv") {
    text = PROJECT_SECTION_TEXT_SWE;
  } else {
    text = PROJECT_SECTION_TEXT_ENG;
  }

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
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card-bg border border-border rounded-2xl shadow-md p-8 flex flex-col gap-6 text-text no-underline transition duration-200 hover:border-accent hover:shadow-lg min-h-[320px] min-w-[320px] 2xl:min-h-[540px] 2xl:min-w-[440px] group block"
            >
              <h2 className="text-accent text-2xl font-semibold 2xl:text-4xl">
                {project.title}
              </h2>
              <p className="text-text text-lg 2xl:text-3xl">
                {project.description}
              </p>
              <div className="mt-auto">
                <ProjectButton />
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
