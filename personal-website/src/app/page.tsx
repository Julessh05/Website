import styles from './page.module.scss'
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div>
                <div className="flex">
                    <div className={styles.column}>
                        <Image
                            src="/me.jpg"
                            alt={"A Picture of myself"}
                            width={100}
                            height={150}
                            className="block ml-auto mr-auto"
                        >
                        </Image>
                    </div>
                    <div className={styles.column}>
                        <p>Hi</p>
                        <p>I&rsquo;m Julian, an 18 year old Developer</p>
                    </div>
                </div>
            </div>
        </main>
    )
}