'use client';

import generalstyles from "@/app/cssComponents/readingPage.module.css"

import { useParams } from 'next/navigation'
import LinkDivRow from "@/app/components/linkDiv/linkDivRow/linkDivRow";

import projectsData from "../../data/projects.json"

export default function Page() {
    let id = useParams()
    const cP = projectsData.projects[id.slug]
    return (
        <div className={generalstyles.main}>
            <h1>{cP.name}</h1>
            <p>{cP.description}</p>
        </div>
    )
}