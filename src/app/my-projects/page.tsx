"use client";
import React from "react";

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
  return (
    <main className="bg-bg min-h-screen pb-16 py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-accent text-center text-4xl font-bold mb-2 tracking-tight">
          My projects
        </h1>
        <p className="text-text text-center mb-10">
          Here are some of the projects I've worked on recently.
        </p>
        <div className="grid gap-x-72 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                                bg-card-bg
                                border border-border
                                rounded-2xl
                                shadow-[0_2px_8px_rgba(60,60,60,0.04)]
                                p-12
                                flex flex-col gap-8
                                text-text
                                no-underline
                                transition
                                duration-200
                                hover:border-accent
                                hover:shadow-[0_4px_16px_rgba(216,58,58,0.08)]
                                min-h-[320px]
                                group block
                            `}
              style={{ minWidth: "320px" }}
            >
              <h2 className="text-accent text-2xl font-semibold m-0">
                {project.title}
              </h2>
              <p className="text-text text-lg m-0">{project.description}</p>
              <div className="mt-auto">
                <button
                  type="button"
                  className="inline-block w-full px-5 py-3 rounded bg-accent text-white font-medium transition group-hover:underline group-hover:bg-hoverlink text-base"
                >
                  View Project &rarr;
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
