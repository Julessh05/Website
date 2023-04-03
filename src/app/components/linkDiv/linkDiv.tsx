import Link from "next/link"
import styles from "./linkDiv.module.css"

export default function LinkDiv({ destination, name }: { destination: string, name: string }) {
    return (
        <a href={destination} className={styles.link}>
            <div>
                <p> {name} </p>
            </div>
        </a>
    )
}