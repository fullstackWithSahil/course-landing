import Link from "next/link";
import { getAllPosts } from "@/app/blog/blog";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="grid gap-6">
                {posts.map((post) => (
                    <article key={post.slug} className="border-b pb-6">
                        <Link href={`/blog/${post.slug}`} className="group">
                            <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mb-2">{post.date}</p>
                            <p className="text-gray-700">{post.excerpt}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}

export const metadata = {
    title: "Blog",
    description: "Latest blog posts and insights",
};
