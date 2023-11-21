import projectsData from "./projects.json"

import Project from "../objects/project"
import Connection from "../objects/connection"

export default function idToProject(projectID) {
    const object = projectsData.projects[projectID]
    return new Project(
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
            object.connection.fdroid
        ),
        object.firstVersionReleased,
        object.activeSupport
    )
}