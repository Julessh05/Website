import generalStyles from "@/app/cssComponents/smallPage.module.css"

export default function Maintenance() {
    return (
        <main className={generalStyles.main}>
            <h1> Maintenance </h1>
            <p>
                This Website is still in maintenance Mode, meaning
                it some features do not work, some links are not connected
                to the real destination yet and some design may be
                looking a bit odd, overlapping each other or
                simply do not work on some devices / pages.
            </p>
            <p> Come back later to see the full page! </p>
        </main>
    )
}