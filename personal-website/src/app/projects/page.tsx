import getProjects from "@/app/data/mapping";
import Project from "@/app/objects/project";
import ProjectType from "@/app/objects/project_type";

export default function Projects() {
    const ar: any[] = getProjects()
    const projects: Project[] = ar[0]
    const types: ProjectType[] = ar[1]
    console.log(types)
    return (
        <main>
            <ul>
                {types.map(type => <li key={type.identifier}>{type.name}</li>)}
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