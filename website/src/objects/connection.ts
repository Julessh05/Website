export default class Connection {
    repo: string

    playstore: string

    appstore: string

    microsoftstore: string

    website : string

    fdroid: string

    pubdev: string


    constructor(
        repo: string,
        playstore: string,
        appstore: string,
        microsoftstore: string,
        website: string,
        fdroid: string,
        pubdev: string,
        ) {
        this.repo = repo
        this.playstore = playstore
        this.appstore = appstore
        this.microsoftstore = microsoftstore
        this.website = website
        this.fdroid = fdroid
        this.pubdev = pubdev
    }

    public getActive(): Map<string, string> {
        const result: Map<string, string> = new Map()
        if (this.website != null && this.website.length > 0) {
            result.set('Website', this.website)
        }
        if (this.repo != null && this.repo.length > 0) {
            result.set('Repository', this.repo)
        }
        if (this.appstore != null && this.appstore.length > 0) {
            result.set('App Store', this.appstore)
        }
        if (this.playstore != null && this.playstore.length > 0) {
            result.set('Play Store', this.playstore)
        }
        if (this.microsoftstore != null && this.microsoftstore.length > 0) {
            result.set('Microsoft Store', this.microsoftstore)
        }
        if (this.fdroid != null && this.fdroid.length > 0) {
            result.set('F-Droid', this.fdroid)
        }
        if (this.pubdev != null && this.pubdev.length > 0) {
            result.set('Pub.dev', this.pubdev)
        }
        return result

    }
}
