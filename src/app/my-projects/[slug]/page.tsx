import { notFound } from "next/navigation";
import { Metadata } from "next";

const project = {
  slug: "my-awesome-project",
  title: "My Awesome Project",
  description: "Description for My Awesome Project.",
  content: "Detailed content about My Awesome Project.",
};

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  if (params.slug !== project.slug) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: PageProps) {
  if (params.slug !== project.slug) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        {project.title}
      </h1>
      <p style={{ color: "#666", fontSize: "1.2rem", marginBottom: "2rem" }}>
        {project.description}
      </p>
      <article style={{ lineHeight: 1.7, fontSize: "1.1rem" }}>
        {project.content}
      </article>
    </main>
  );
}
