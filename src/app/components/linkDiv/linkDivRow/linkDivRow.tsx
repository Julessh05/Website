import { ReactElement } from 'react'
import LinkDiv from '../linkDiv'
import styles from './linkDivRow.module.css'

export default function LinkDivRow({ names, destinations, color }: { names: string[], destinations: string[], color: string }) {
    let result: ReactElement[] = []
    for (let i = 0; i < destinations.length; i++) {
        result[i] = <LinkDiv
            destination={destinations[i]}
            name={names[i]}
            width={100 / destinations.length - 10}
            key={i}
            color={color}
        />
    }
    return (
        <div className={styles.rowContainer}>
            {result}
        </div>
    )
}