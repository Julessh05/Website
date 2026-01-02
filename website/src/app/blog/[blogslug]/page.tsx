import path from "path";
import fs from "node:fs"
import { remark } from "remark";
import remarkHtml from "remark-html";

export const metadata = {
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

// https://nextjs.org/learn/pages-router/dynamic-routes-render-markdown
export default async function BlogPage({
    params,
}: {
    params: Promise<{ blogslug: string }>;
}) {
    const { blogslug } = await params;
    const fullPath = path.join("./public/blog/", blogslug + ".md");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const processesContent = await remark().use(remarkHtml).process(fileContents.toString());
    const contentHtml = processesContent.toString();

    return (
        <main>
            <article>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
        </main>
    );
}
