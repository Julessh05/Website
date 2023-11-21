export default class Connection {
    repo: string

    playstore: string

    appstore: string

    fdroid: string

    constructor(repo: string, playstore: string, appstore: string, fdroid: string) {
        this.repo = repo;
        this.playstore = playstore;
        this.appstore = appstore;
        this.fdroid = fdroid;
    }
}