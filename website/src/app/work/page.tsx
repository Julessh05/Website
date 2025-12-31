import Link from "next/link";

export const metadata = {
    title: 'Julian Schumacher - Work',
    description: 'Explore my work and projects',
    keywords: [
        "Projects",
        "Apps",
        "Applications",
        "Portfolio",
        "Developer Portfolio",
        "Julian Schumacher Projects",
        "Work",
        "Development Projects",
        "Software Projects",
        "Programming Projects",
    ],
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
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
