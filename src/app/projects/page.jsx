import projectsData from "../data/config.json"
import ProjectsTile from "../components/projectstile/projectstile"

import Project from "../objects/project"
import Connection from "../objects/connection"

export default function Projects() {
    let projectsList = []
    let i = 0
    for (let project in projectsData.projects) {
        let cP = projectsData.projects[project]
        let cPC = cP.connection
        projectsList[i] = <ProjectsTile
            project={
                new Project(
                    project,
                    cP.typeImplemented,
                    cP.typeGoal,
                    cP.platformsReady,
                    cP.platformsGoal,
                    cP.language,
                    cP.framework,
                    cP.name,
                    cP.description,
                    cP.features,
                    new Connection(
                        "", "", "", ""
                    )
                )
            } />
        i++
    }
    return (
        <main>
            <h1>Projects</h1>
            <p>Here's an overview of all my projects</p>
            {projectsList}
        </main>
    )
}