import getProjects from "../../data/mapping";
import Project from "../../objects/project";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ar: any[] = getProjects();
  const projects: Project[] = ar[0];
  const project = projects.find((p) => p.identifier.toLowerCase() === slug.toLowerCase());
  if (!project) {
    return (
      <main>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
      </main>
    );
  } else {
    return (
      <main>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <h2>Features</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h2>Technologies</h2>
      </main>
    );
  }
}
