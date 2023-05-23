import Project from "@/app/objects/project"

export default function ProjectsTile({ project }: { project: Project }) {
    return (
        <div>
            {project.name}
        </div>
    )
}