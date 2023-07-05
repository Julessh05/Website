import { ReactElement } from 'react'
import LinkDiv from '../linkDiv'
import styles from './linkDivRow.module.css'

export default function LinkDivRow({ names, destinations, color }: { names: string[], destinations: string[], color: string }) {
    let result: ReactElement[] = []
    // TODO: change
    const isMobile: boolean = false
    for (let i = 0; i < destinations.length; i++) {
        result[i] = <LinkDiv
            destination={destinations[i]}
            name={names[i]}
            width={100 / destinations.length - 10}
            key={i}
            color={color}
        />
    }
    let display: string
    if (isMobile) {
        display = 'block'
    } else {
        display = 'flex'
    }
    // TODO: mobile Display not looking as intended yet
    return (
        <div
            className={styles.rowContainer}
            style={
                {
                    display: display
                }
            }
        >
            {result}
        </div>
    )
}