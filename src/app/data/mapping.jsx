import projectsData from "./config.json"

import Project from "../objects/project"
import Connection from "../objects/connection"

export default function idToProject(projectID) {
    const object = projectsData.projects[projectID]
    const connection = object.connection
    return new Project(
        projectID,
        object.typeImplemented,
        object.typeGoal,
        object.platformsReady,
        object.PlatformsGoal,
        object.language,
        object.framework,
        object.name,
        object.description,
        object.features,
        new Connection(
            connection.repo,
            connection.playStore,
            connection.appStore,
            connection.fdroid
        ),
        object.firstVersionReleased
    )
}

