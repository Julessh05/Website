import styles from './page.module.scss'
import Image from "next/image";

export default function Home() {
    return (
        <main className={`h-screen ${styles.withBackground}`}>
            <div className="m-4">
                <h1>Hi</h1>
                <p>I&rsquo;m glad you&rsquo;re here</p>
                <div className="flex">
                    <div className={styles.column}>
                        <Image
                            src="/me.jpg"
                            alt={"A Picture of myself"}
                            width={100}
                            height={150}
                        >
                        </Image>
                    </div>
                    <div className={styles.column}>
                        <p>Text</p>
                    </div>
                </div>
            </div>
        </main>
    )
}