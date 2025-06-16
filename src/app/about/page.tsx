import { Mail, Github } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl 2xl:max-w-6xl 2xl:text-4xl w-full mx-auto mt-12 mb-12 px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-accent text-center 2xl:text-6xl">
        About Me
      </h1>
      <main className="bg-background rounded-2xl shadow-lg font-sans p-0 overflow-hidden">
        <div className="w-full h-72 sm:h-80 md:h-96 2xl:h-[32rem] relative">
          <Image
            src="/REAL.png"
            alt="Pontus"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="p-8">
          <p className="text-lg text-text mb-6 2xl:text-3xl">
            Hi, I'm Pontus! I'm a web developer passionate about building
            beautiful, accessible, and performant web experiences. My journey
            started with curiosity for how things work on the internet, and has
            grown into a love for open source, sharing knowledge, and
            collaborating with others.
          </p>
          <p className="text-base text-text mb-6 2xl:text-3xl">
            On this site, you'll find my projects, blog posts, and thoughts on
            web development, TypeScript, and the ever-evolving world of frontend
            technologies. I believe in continuous learning and enjoy helping
            others grow in their coding journey.
          </p>
          <p className="text-base text-text mb-8 2xl:text-3xl">
            When I'm not coding, you might find me exploring new tech,
            contributing to open source, or enjoying a good cup of coffee.
            Thanks for stopping by!
          </p>
          <div className="flex gap-4">
            <div className="flex w-full justify-between">
              <a
                href="https://github.com/Hoeggens"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 2xl:px-6 2xl:py-4 px-4 py-2 rounded-lg bg-accent text-bg font-semibold shadow hover:bg-hoverlink transition"
                aria-label="GitHub"
              >
                <Github size={16} className="2xl:w-7 2xl:h-7 mt-2" />
                GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center 2xl:px-6 2xl:py-4 gap-2 px-4 py-2 rounded-lg bg-accent text-bg font-semibold shadow hover:bg-hoverlink transition"
                aria-label="Contact"
              >
                <Mail size={16} className="2xl:w-7 2xl:h-7 mt-2" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
