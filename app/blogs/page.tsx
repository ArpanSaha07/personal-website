import type { Metadata } from "next";
import BlogLanding from "@/app/components/BlogLanding";
import topics from "@/app/data/blogTopics.json";
import { getAllPosts } from "@/app/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Arpan Saha",
  description: "Arpan Saha writes about software development, travel, discipline and AI automation.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="flex-grow bg-white text-black pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-heading pb-10">Blog</h1>
        <BlogLanding topics={topics} posts={posts} />
      </div>
    </main>
  );
}
