import { ReactElement } from 'react'
import LinkDiv from '../linkDiv'

export default function LinkDivRow({ names, destinations }: { names: string[], destinations: string[] }) {
    let result: ReactElement[] = []
    for (let i = 0; i++; i < destinations.length) {
        result[i] = <LinkDiv
            destination={destinations[i]}
            name={names[i]}
        />
    }
    return (
        <div className='rowContainer' style=
            {
                {
                    width: `calc(100 / ${result.length})vw`
                }
            }>
            {result}
        </div>
    )
}