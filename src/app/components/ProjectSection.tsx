import Link from "next/link";

const projects = [
  {
    name: "Project One",
    description: "A brief description of Project One.",
    href: "#project-one",
  },
  {
    name: "Project Two",
    description: "A brief description of Project Two.",
    href: "#project-two",
  },
  {
    name: "Project Three",
    description: "A brief description of Project Three.",
    href: "#project-three",
  },
  {
    name: "Project Four",
    description: "A brief description of Project One.",
    href: "#project-one",
  },
  {
    name: "Project Five",
    description: "A brief description of Project Two.",
    href: "#project-two",
  },
  {
    name: "Project Six",
    description: "A brief description of Project Three.",
    href: "#project-three",
  },
];

export default function ProjectSection() {
  return (
    <section className="bg-bg py-12 px-4 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-accent mb-6">
          My Projects
        </h2>
        <p className="text-text text-center dark:text-neutral-300 mb-8 max-w-2xl">
          Here you'll find a range of projects that showcase my experience
          across various technologies and domains. From modern web development
          to embedded systems and creative hardware solutions, each project
          highlights different skills and problem-solving approaches.
          <br />
          <br />
          Explore these examples to see how I bring ideas to life—whether
          through intuitive user interfaces, robust backend logic, or innovative
          hardware and embedded designs.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.slice(0, 4).map((project) => (
          <li
            key={project.name + project.href}
            className="bg-card-bg border border-border dark:border-neutral-700 rounded-lg p-6 transition hover:shadow-lg hover:border-accent"
          >
            <Link href={project.href} className="group block h-full">
              <h3 className="text-xl font-semibold text-text">
                {project.name}
              </h3>
              <p className="text-neutral-700 dark:text-text-300 mt-2">
                {project.description}
              </p>
              <button
                type="button"
                className="inline-block mt-4 px-4 py-2 rounded bg-accent text-white font-medium transition group-hover:underline group-hover:bg-hoverlink"
              >
                View Project &rarr;
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
