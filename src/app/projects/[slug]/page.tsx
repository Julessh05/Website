'use client'

import { usePathname } from 'next/navigation';

export default function Page() {
    // Workaround because useParams() is not recognized as function
    const pathname: string = usePathname()
    const id: string = pathname.replaceAll("/projects/", "")
    return (
        <h1>{id}</h1>
    )
}