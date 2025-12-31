export const metadata = {
    title: 'Julian Schumacher - Blog',
    description: 'Read my latest blog posts and updates',
    keywords: [
        "Developer Blog",
        "Programming Blog",
        "Blog",
        "Personal Blog",
        "Julian Schumacher Blog",
        "Blog",
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

export default function Blog() {
    return (
        <main>
            <h1>Blog</h1>
            <p>Stay tuned for updates!</p>
            <p>Blog Posts will be implemented soon!</p>
        </main>
    )
}
