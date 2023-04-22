import styles from "./linkDiv.module.css"

export default function LinkDiv({ destination, name, width }: { destination: string, name: string, width: number }) {
    return (
        <a href={destination} className={styles.link} style={
            {
                width: `${width}vw`
            }
        }>
            <div>
                <p> {name} </p>
            </div>
        </a>
    )
}