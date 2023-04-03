import Link from "next/link"
import styles from "linkDiv.module.css"

export default function LinkDiv(destination: URL, name: String) {
    return (
        <div>
            <p> {name} </p>
            <Link href={destination}></Link>
        </div>
    )
}