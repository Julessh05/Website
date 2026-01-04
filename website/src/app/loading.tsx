import styles from "./loading.module.scss"

export default function Loading() {
    return (
        <main>
            <div className={styles.loadingWrap}>
                <div className={styles.loadingCircle}></div>
                <h1 className={styles.loadingText}>Loading...</h1>
            </div>
        </main>
    )
}
