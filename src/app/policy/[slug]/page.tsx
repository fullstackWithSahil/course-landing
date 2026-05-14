import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
    const slug = await params;
    const post = await getPostBySlug(slug.slug, "policy");

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto px-4 py-8 font-serif">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <time className="text-gray-600">{post.date}</time>
            </header>

            <div
                className="max-w-none policy-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = await getAllPosts("policy");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
    const slug = await params;
    const post = await getPostBySlug(slug.slug, "policy");

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
        },
    };
}
