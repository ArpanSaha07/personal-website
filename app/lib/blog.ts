import fs from "fs";
import path from "path";
import type { MDXContent } from "mdx/types";
import type { BlogPost, BlogPostMeta } from "@/app/types";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

type PostModule = {
  default: MDXContent
  metadata: BlogPostMeta
}

export function getSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

async function loadPost(slug: string): Promise<PostModule> {
  return import(`@/content/blogs/${slug}.mdx`);
}

// All posts, newest first
export async function getAllPosts(): Promise<Array<BlogPost>> {
  const posts = await Promise.all(
    getSlugs().map(async (slug) => ({ slug, ...(await loadPost(slug)).metadata }))
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string) {
  const { default: Content, metadata } = await loadPost(slug);
  return { Content, post: { slug, ...metadata } };
}
