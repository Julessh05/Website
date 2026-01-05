import styles from "./loading.module.scss"

export default function Loading() {
    return (
        <main>
            <div className={styles.loadingWrap} aria-busy="true" aria-live="polite">
                <div className={styles.skeletonHero}>
                    <div className={`${styles.skeletonAvatar} ${styles.skeleton}`}></div>
                    <div className={styles.skeletonText}>
                        <div className={`${styles.skeletonLine} ${styles.skeleton}`}></div>
                        <div className={`${styles.skeletonLineShort} ${styles.skeleton}`}></div>
                    </div>
                </div>
                <div className={styles.skeletonCards}>
                    <div className={`${styles.skeletonCard} ${styles.skeleton}`}></div>
                    <div className={`${styles.skeletonCard} ${styles.skeleton}`}></div>
                    <div className={`${styles.skeletonCard} ${styles.skeleton}`}></div>
                </div>
                <p className={styles.loadingText}>Loading...</p>
            </div>
        </main>
    )
}
