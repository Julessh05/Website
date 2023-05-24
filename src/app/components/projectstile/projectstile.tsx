import Project from "@/app/objects/project"
import Link from "next/link"
import styles from "./projectstile.module.css"

export default function ProjectsTile({ project }: { project: Project }) {
    return (
        <div className={styles.main}>
            <Link
                key={project.identifier}
                href={`projects/${project.identifier}`}
                style=
                {
                    {
                        color: "black",
                        textDecoration: "none"
                    }
                }
            >
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </Link>
        </div>
    )
}