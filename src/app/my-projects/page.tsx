import ProjectPageGrid from "../components/ProjectPageGrid";
import { withdrawProjectData } from "../lib/fetchProjects";
import { cookies } from "next/headers";

export default async function ProjectsPage() {
  const cookieStore = await cookies();
  const language =
    cookieStore.get(process.env.languageCookie)?.value ||
    process.env.NEXT_PUBLIC_SWEDISH;

  const projectz = await withdrawProjectData(language);

  return <ProjectPageGrid projects={projectz} />;
}
