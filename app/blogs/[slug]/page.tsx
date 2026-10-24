import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/app/components/BlogCard";
import ReadingProgress from "@/app/components/ReadingProgress";
import ShareButton from "@/app/components/ShareButton";
import { getAllPosts, getPost, getSlugs } from "@/app/lib/blog";
import { formatDate } from "@/app/lib/formatDate";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

// Only the posts in content/blogs exist; any other slug 404s
export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { post } = await getPost((await params).slug);
  return {
    title: `${post.title} | Arpan Saha`,
    description: post.summary,
    openGraph: { images: [post.coverImage] },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { Content, post } = await getPost(slug);

  // Up to 3 other posts: same topic first, then the newest
  const others = (await getAllPosts()).filter((other) => other.slug !== slug);
  const morePosts = [
    ...others.filter((other) => other.topic === post.topic),
    ...others.filter((other) => other.topic !== post.topic),
  ].slice(0, 3);

  return (
    <main className="flex-grow bg-white text-black pt-32 pb-20 px-4">
      <ReadingProgress />

      <article className="max-w-3xl mx-auto">
        {/* Banner */}
        <div className="relative aspect-[2/1] rounded-xl border border-black overflow-hidden">
          <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" />
        </div>

        {/* Title, author, date, share */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-10">{post.title}</h1>
        <p className="text-lg text-gray-700 mt-4">By {post.author}</p>
        <div className="flex items-center justify-between border-b border-black pb-6 mt-1">
          <p className="text-base text-gray-600">{formatDate(post.date)}</p>
          <ShareButton title={post.title} />
        </div>

        {/* Post body */}
        <div className="mt-10 flow-root">
          <Content />
        </div>
      </article>

      {/* More posts */}
      {morePosts.length > 0 && (
        <section className="max-w-5xl mx-auto mt-20">
          <Link href="/blogs" className="text-2xl text-black hover:underline underline-offset-4">
            Check out more blogs &rarr;
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {morePosts.map((other) => <BlogCard key={other.slug} post={other} />)}
          </div>
        </section>
      )}
    </main>
  );
}
