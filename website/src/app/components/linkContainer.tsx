import Link from "next/link";
import styles from "./linkContainer.module.scss"

export default function LinkContainer({ name, description, href }: { name: string, description: string, href: string }) {
    return (
        <div key={name} className={styles.linkContainer}>
            <Link href={href} className={styles.link}>
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
            </Link>
        </div>
    );
}
