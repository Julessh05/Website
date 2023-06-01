'use client';

import { useParams } from 'next/navigation';
import projectsData from "../../data/config.json"

export default function Page() {
    const id = useParams()
    return (
        <div>
            <h1>{id}</h1>
            <p>{projectsData[id].description}</p>
        </div>
    )
}