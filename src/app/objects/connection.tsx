class Connection {
    constructor(
        repo: string,
        playStore: string,
        appStore: string,
        fdroid: string
    ) {
        this.repo = repo
        this.playStore = playStore
        this.appStore = appStore
        this.fdroid = fdroid
    }

    repo: string

    playStore: string

    appStore: string

    fdroid: string
}