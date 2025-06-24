import { redirect } from "next/navigation";
import { getProject } from "../../lib/fetchProjects";
import { cookies } from "next/headers";

interface PageProps {
  params: { slug: string };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const cookieStore = await cookies();

  const language =
    cookieStore.get(process.env.LANGUAGECOOKIE)?.value || process.env.SWEDISH;

  const project = await getProject(language, resolvedParams.slug);

  if (!project) {
    redirect("/my-projects");
  }

  return (
    <div className="max-w-4xl 2xl:max-w-6xl w-full mx-auto mt-12 mb-12 px-4 py-20">
      <main className="bg-background rounded-2xl shadow-lg font-sans p-0 overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-accent text-center md:text-5xl 2xl:text-6xl">
            {project.project_name}
          </h1>
          <p className="text-lg text-text mb-6 2xl:text-3xl text-center">
            {project.project_description}
          </p>
          <p className="text-lg text-text mb-8 2xl:text-3xl text-center">
            {project.project_content}
          </p>
        </div>
      </main>
    </div>
  );
}
