
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


    public getActive(): Map<string, string> {
        let result: Map<string, string> = new Map()
        if (this.appStore != null) {
            result.set('appStore', this.appStore)
        }
        if (this.repo != null) {
            result.set('repo', this.repo)
        }
        if (this.playStore != null) {
            result.set('playStore', this.playStore)
        }
        if (this.fdroid != null) {
            result.set('fdroid', this.fdroid)
        }
        return result
    }
}
export default Connection
