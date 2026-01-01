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
            <p>
                Explore my work, projects and more here.
                Browse through various projects and applications and find something you like!
                <br />
                Each project has it&rsquo;s own page with more information and links to the respective stores
                or repositories.
            </p>
            <h2>Projects</h2>
            <p>You can find my projects on the corresponding page <Link href="/work/projects">here</Link>.</p>
            <h2>Other</h2>
            <p>Some projects and ideas which are currently not listed on the projects page can be found here.</p>
            <p>Virtual Safety & Security Systems <Link href="https://v3s.tech" target="_blank">v3s.tech</Link></p>
            <br />
            <p>Stay tuned, more coming soon!</p>
        </main>
    )
}
