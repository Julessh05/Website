import readingStyles from "../cssComponents/readingPage.module.css"

import projectsData from "../data/projects.json"
import ProjectsTile from "../components/projectstile/projectstile"

import idToProject from "@/app/data/mapping"

export const metadata = {
    title: 'Julian Schumacher - Projects',
    description: 'My personal Projects',
}

export default function Projects() {
    let projectsList = []
    let i = 0
    for (let project in projectsData.projects) {
        const cP = projectsData.projects[project]
        const cPC = cP.connection
        projectsList[i] = <ProjectsTile
            project={
                idToProject(project)
            }
            key={project.identifier}
        />
        i++
    }
    return (
        <main className={readingStyles.main}>
            <h1>Projects</h1>
            <p>Here&rsquo;s an overview of all my projects</p>
            {projectsList}
        </main>
    )
}