
class Connection {
    constructor(
        repo: string,
        playstore: string,
        appstore: string,
        fdroid: string
    ) {
        this.repo = repo
        this.playstore = playstore
        this.appstore = appstore
        this.fdroid = fdroid
    }

    repo: string

    playstore: string

    appstore: string

    fdroid: string


    public getActive(): Map<string, string> {
        let result: Map<string, string> = new Map()
        if (this.appstore != null) {
            result.set('appStore', this.appstore)
        }
        if (this.repo != null) {
            result.set('repo', this.repo)
        }
        if (this.playstore != null) {
            result.set('playStore', this.playstore)
        }
        if (this.fdroid != null) {
            result.set('fdroid', this.fdroid)
        }
        return result
    }
}
export default Connection
