"use client";

import Link from "next/link";
import { useState } from "react";
import styles from './page.module.scss';
import getProjects from "../../data/mapping";
import Project from "../../objects/project";
import ProjectType from "../../objects/project_type";


export default function Projects() {
    const ar: unknown[] = getProjects();
    const projects: Project[] = ar[0] as Project[];
    const types: ProjectType[] = ar[1] as ProjectType[];
    const allType: ProjectType = {
        identifier: "all",
        name: "All"
    }
    const [type, setType] = useState(types[0]);

    return (
        <main>
            <h1>Projects</h1>
            {/* Type selector */}
            <h2>Type</h2>
            <div className={styles.typeSelector}>
                <ul>
                    <li key="all">
                        <button
                            onClick={() => setType(allType)}
                            className={"all" == type.identifier ? styles.active : ''}
                        >
                            All
                        </button>
                    </li>
                    {types.map((t) => (
                        <li key={t.identifier}>
                            <button
                                onClick={() => setType(t)}
                                className={t.identifier == type.identifier ? styles.active : ''}
                            >
                                {t.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Projects */}
            <div style={{ height: "50px" }}></div>
            {type.identifier == "all" ? ShowAllProjects(types, projects) :
                <>
                    <h2>{type.name}</h2>
                    <ul>
                        {projects.filter((p) => p.projectType == type.identifier).length == 0 ?
                            <div>
                                <b>No projects of this type available yet.</b>
                                <p>Stay tuned for more!</p>
                            </div> :
                            projects
                                .filter((p) => p.projectType == type.identifier)
                                .map((project) => (
                                    <div key={project.identifier} className={styles.linkContainer}>
                                        <Link href={`projects/${project.identifier}`} className={styles.link}>
                                            <h4
                                                className={styles.linkContent}
                                            >
                                                {project.name}
                                            </h4>
                                            <p
                                                className={styles.linkContent}
                                            >
                                                {project.description}
                                            </p>
                                        </Link>
                                    </div>
                                ))}
                    </ul>
                </>
            }
        </main >
    );
}

function ShowAllProjects(types: ProjectType[], projects: Project[]) {
    return (
        <div key={"all-projects"}>
            {
                types.map((type) => (
                    <div key={`all-type-${type.identifier}`}>
                        <h2>{type.name}</h2>
                        <ul>
                            {projects.filter((p) => p.projectType == type.identifier).length == 0 ?
                                <div>
                                    <b>No projects of this type available yet.</b>
                                    <p>Stay tuned for more!</p>
                                </div> :
                                projects
                                    .filter((p) => p.projectType == type.identifier)
                                    .map((project) => (
                                        <div key={`all-${project.identifier}`} className={styles.linkContainer}>
                                            <Link href={`projects/${project.identifier}`} className={styles.link}>
                                                <h4
                                                    className={styles.linkContent}
                                                >
                                                    {project.name}
                                                </h4>
                                                <p
                                                    className={styles.linkContent}
                                                >
                                                    {project.description}
                                                </p>
                                            </Link>
                                        </div>
                                    ))}
                        </ul>
                    </div>
                )
                )
            }
        </div>
    );
}
