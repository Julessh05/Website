import Project from "@/app/objects/project";

import projectsData from "@/app/data/projects.json"
import idToProject from "@/app/data/mapping";

export default function Projects() {
    let projects: Project[] = [];
    for (const project in projectsData.projects) {
        projects.push(idToProject(project))
    }
    return (
        <main>
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