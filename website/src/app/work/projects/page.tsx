"use client";

import Link from "next/link";
import getProjects from "../../data/mapping";
import Project from "../../objects/project";
import ProjectType from "../../objects/project_type";
import { useState } from "react";

export default function Projects() {
    const ar: unknown[] = getProjects();
    const projects: Project[] = ar[0] as Project[];
    const types: ProjectType[] = ar[1] as ProjectType[];
    const [type, setType] = useState(types[0]);
    const [dropdownShown, setDropdownShown] = useState(false);

    function dropdownItemSelected(projectType: ProjectType) {
        setType(projectType);
        setDropdownShown(false);
    }

    return (
        <main>
            <div>
                <button
                    type="button"
                    onClick={() => setDropdownShown(!dropdownShown)}
                >
                    {type.name}
                </button>
                <div
                    className={`${dropdownShown ? "inline-block" : "hidden"
                        } absolute bg-black`}
                >
                    {types.map((type) => (
                        <button
                            className="block p-1"
                            key={type.identifier}
                            type="button"
                            onClick={() => dropdownItemSelected(type)}
                        >
                            {type.name}
                        </button>
                    ))}
                </div>
                {/* Divider */}
                <div style={{ height: "10px" }}></div>
            </div>
            <ul>
                {projects
                    .filter((p) => p.projectType == type.identifier)
                    .map((project) => (
                        <li key={project.identifier}>
                            <Link href={`projects/${project.identifier}`}>{project.name}</Link>
                        </li>
                    ))}
            </ul>
        </main>
    );
}
