import projectsData from "./projects.json"

import Project from "../objects/project"
import Connection from "../objects/connection"


export default function getProjects() {
    let list = []
    let listOfTypes = []
    for (const projectsType in projectsData.projects) {
        listOfTypes.push(projectsType)
        for (const project in projectsData.projects[projectsType]) {
            list.push(idToProject(project, projectsType))
        }
    }
    return [list, listOfTypes]
}

function idToProject(projectID, type) {
    const object = projectsData.projects[type][projectID]
    return new Project(
        type,
        projectID,
        object.typeImplemented,
        object.typeGoal,
        object.platformsReady,
        object.platformsGoal,
        object.language,
        object.framework,
        object.name,
        object.description,
        object.features,
        new Connection(
            object.connection.repo,
            object.connection.playstore,
            object.connection.appstore,
            object.connection.fdroid,
            object.connection.pubdev
        ),
        object.firstVersionReleased,
        object.activeSupport
    )
}