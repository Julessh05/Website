import Connection from "@/app/objects/connection";

export default class Project {
    identifier: string

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

    firstVersionReleased: boolean

    activeSupport: boolean

    constructor(
        identifier: string,
        typeImplemented: string[],
        typeGoal: string[],
        platformsReady: string[],
        platformsGoal: string[],
        language: string,
        framework: string,
        name: string,
        description: string,
        features: string[],
        connection: Connection,
        firstVersionReleased: boolean,
        activeSupport: boolean,
    ) {
        this.identifier = identifier;
        this.typeImplemented = typeImplemented;
        this.typeGoal = typeGoal;
        this.platformsReady = platformsReady;
        this.platformsGoal = platformsGoal;
        this.language = language;
        this.framework = framework;
        this.name = name;
        this.description = description;
        this.features = features;
        this.connection = connection;
        this.firstVersionReleased = firstVersionReleased;
        this.activeSupport = activeSupport
    }
}