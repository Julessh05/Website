'use client';

import { useParams } from 'next/navigation'

import projectsData from "../../data/projects.json"

export default function Page() {
    let id = useParams()
    const cP = projectsData.projects[id.slug]
    return (
        <div>
            <h1>{cP.name}</h1>
            <p>{cP.description}</p>
        </div>
    )
}