import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl w-full mx-auto mt-12 mb-12 px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-accent text-center">
        About Me
      </h1>
      <main className="bg-background rounded-2xl shadow-lg font-sans p-0 overflow-hidden">
        <Image
          width={1200}
          height={500}
          priority
          src="/REAL.png"
          alt="Pontus"
          className="w-full h-72 sm:h-80 md:h-96 object-cover object-center"
        />
        <div className="p-8">
          <p className="text-lg text-text mb-6">
            Hi, I'm Pontus! I'm a web developer passionate about building
            beautiful, accessible, and performant web experiences. My journey
            started with curiosity for how things work on the internet, and has
            grown into a love for open source, sharing knowledge, and
            collaborating with others.
          </p>
          <p className="text-base text-text mb-6">
            On this site, you'll find my projects, blog posts, and thoughts on
            web development, TypeScript, and the ever-evolving world of frontend
            technologies. I believe in continuous learning and enjoy helping
            others grow in their coding journey.
          </p>
          <p className="text-base text-text mb-8">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg font-semibold shadow hover:bg-hoverlink transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .267.18.578.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg font-semibold shadow hover:bg-hoverlink transition"
                aria-label="Contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 8.25V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.25m18 0A2.25 2.25 0 0 0 18.75 6H5.25A2.25 2.25 0 0 0 3 8.25m18 0v.243a2 2 0 0 1-.553 1.38l-7.197 7.197a2 2 0 0 1-2.5 0l-7.197-7.197A2 2 0 0 1 3 8.493V8.25"
                  />
                </svg>
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
