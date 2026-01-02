import fs from "node:fs"
import path from "node:path";
import Link from "next/link";

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

export default async function Blog() {
    const blogEntryFiles: string[] = fs.readdirSync("./public/blog");
    const blogEntryNames: string[] = [];
    blogEntryFiles.forEach(async (fileName) => {
        const fullPath: string = path.join("./public/blog/", fileName);
        const fileContents: string = fs.readFileSync(fullPath, "utf8");
        const headline: string = fileContents.split("\n")[0].replace("# ", "");
        blogEntryNames.push(headline)
    });
    const blogEntries: Record<string, string> = {};
    for (let i: number = 0; i < blogEntryNames.length; i++) {
        blogEntries[blogEntryNames[i]] = blogEntryFiles[i].replace(".md", "");
    }
    return (
        <main>
            <h1>Blog</h1>
            <p>Read more about my work, projects, and thoughts on software development.</p>
            <h2>Entries</h2>
            {blogEntryFiles.length === 0 ? (
                <p>No blog entries found.</p>
            ) : (
                <ul>
                    {Object.entries(blogEntries).map(([name, file]) => (
                        <li key={name}>
                            <a href={`/blog/${file}`}>{name}</a>
                        </li>
                    ))}
                </ul>
            )
            }
            <p>Stay tuned for updates!</p>
            <h2>Learnings</h2>
            <p>
                For an explicit list of learnings related to a multitude of different technologies and frameworks,
                visit the <Link href="/learnings">Learnings page</Link>.
            </p>
        </main>
    )
}
