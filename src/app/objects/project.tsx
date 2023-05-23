import Connection from "./connection"

class Project {
    constructor(
        typeImplemented: string[],
        typeGoal: string[],
        platformsReady: string[],
        platformsGoal: string[],
        language: string,
        framework: string,
        name: string,
        description: string,
        features: string[],
        connection: Connection
    ) {
        this.typeImplemented = typeImplemented
        this.typeGoal = typeGoal
        this.platformsReady = platformsReady
        this.platformsGoal = platformsGoal
        this.language = language
        this.framework = framework
        this.name = name
        this.description = description
        this.features = features
        this.connection = connection
    }

    typeImplemented: string[]

    typeGoal: string[]

    platformsReady: string[]

    platformsGoal: string[]

    language: string

    framework: string

    name: string

    description: string

    features: string[]

    connection: Connection
}

export default Project