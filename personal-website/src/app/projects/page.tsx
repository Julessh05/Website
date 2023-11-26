import getProjects from "@/app/data/mapping";
import Project from "@/app/objects/project";

export default function Projects() {
    const ar: any[] = getProjects()
    const projects: Project[] = ar[0]
    const types: string[] = ar[1]
    return (
        <main>
            <ul>
                {types.map(type => <li key={type}>{type}</li>)}
            </ul>
            <ul>
                {projects.map(project => (
                        <li key={project.identifier}>
                            {project.name}
                        </li>
                    )
                )}
            </ul>
        </main>
    )
}