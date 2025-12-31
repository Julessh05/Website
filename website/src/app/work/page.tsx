import Link from "next/link";

export const metadata = {
    title: 'Julian Schumacher - Work',
    description: 'Explore my work and projects',
}

export default function Projects() {
    return (
        <main>
            <h1>Work</h1>
            <p>Explore various projects and initiatives.</p>
            <h2>Projects</h2>
            <p>Find my projects <Link href="work/projects">here</Link>.</p>
            <h2>Other</h2>
            <p>Virtual Safety & Security Systems <Link href="https://v3s.tech">v3s.tech</Link></p>
            <p>Stay tuned, more coming soon!</p>
        </main>
    )
}
