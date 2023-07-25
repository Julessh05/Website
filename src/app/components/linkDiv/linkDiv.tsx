import styles from "./linkDiv.module.css"

export default function LinkDiv(
    {
        destination,
        name,
        width,
        color
    }: {
        destination: string,
        name: string,
        width: number,
        color: string
    }) {
    return (
        <a
            href={destination}
            className={styles.link}
            style=
            {
                {
                    color: color,
                    borderColor: color,
                    width: `${width}vw`
                }
            }
            target="_blank">
            <div>
                <p> {name} </p>
            </div>
        </a>
    )
}