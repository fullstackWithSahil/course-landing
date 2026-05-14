import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm"; // Add this!
export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    [key: string]: any;
}


export async function getAllPosts(folder: string): Promise<BlogPost[]> {
    const postsDirectory = path.join(process.cwd(), `src/content/${folder}`);
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
        fileNames
            .filter((name) => name.endsWith(".md"))
            .map(async (fileName) => {
                const slug = fileName.replace(/\.md$/, "");
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, "utf8");
                const { data, content } = matter(fileContents);

                const processedContent = await remark()
                    .use(remarkGfm) // Add GitHub Flavored Markdown support
                    .use(html)
                    .process(content);
                const contentHtml = processedContent.toString();

                return {
                    slug,
                    content: contentHtml,
                    title: data.title,
                    date: data.date,
                    excerpt: data.excerpt,
                    ...data,
                };
            }),
    );

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string, folder: string): Promise<BlogPost | null> {
    try {
        const postsDirectory = path.join(process.cwd(), `src/content/${folder}`);
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const processedContent = await remark()
            .use(remarkGfm) // Add here too
            .use(html)
            .process(content);
        const contentHtml = processedContent.toString();

        return {
            slug,
            content: contentHtml,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            ...data,
        };
    } catch (error) {
        return null;
    }
}
