import { ReactElement } from 'react'
import LinkDiv from '../linkDiv'

export default function LinkDivRow({ names, destinations }: { names: string[], destinations: string[] }) {
    let result: ReactElement[] = []
    for (let i = 0; i < destinations.length; i++) {
        result[i] = <LinkDiv
            destination={destinations[i]}
            name={names[i]}
            width={100 / destinations.length}
            key={i}
        />
    }
    return (
        <div className='rowContainer' style=
            {
                {
                    width: `100vw`
                }
            }>
            {result}
        </div>
    )
}