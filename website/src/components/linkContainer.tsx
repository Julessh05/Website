import Link from "next/link";
import styles from "./linkContainer.module.scss"

export default function LinkContainer({ name, description, href }: { name: string, description: string, href: string }) {
    return (
        <Link key={name} href={href} className={`${styles.linkContainer} ${styles.link}`}>
            <div className={styles.link}>
                <h4
                    className={styles.linkContent}
                >
                    {name}
                </h4>
                <p
                    className={styles.linkContent}
                >
                    {description}
                </p>
            </div>
        </Link>
    );
}
