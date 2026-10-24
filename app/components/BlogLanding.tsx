'use client';
import { useState } from "react";
import Link from "next/link";
import { BlogLandingProps } from "@/app/types";
import { formatDate } from "@/app/lib/formatDate";

// Number of posts listed before "Find all" is clicked
const VISIBLE_POSTS = 3;

export default function BlogLanding({ topics, posts }: BlogLandingProps) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredPosts = activeTopic ? posts.filter((post) => post.topic === activeTopic) : posts;
  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, VISIBLE_POSTS);

  // Clicking the active topic again clears the filter
  const selectTopic = (slug: string) => {
    setActiveTopic((prev) => (prev === slug ? null : slug));
    setShowAll(false);
  };

  return (
    <>
      {/* Topic sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topics.map((topic) => {
          const isActive = activeTopic === topic.slug;
          const count = posts.filter((post) => post.topic === topic.slug).length;
          return (
            <button
              key={topic.slug}
              onClick={() => selectTopic(topic.slug)}
              aria-pressed={isActive}
              className={`text-left rounded-xl border border-black p-6 min-h-40 flex flex-col justify-between gap-4 transition-colors duration-300 ${
                isActive ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <h2 className="text-2xl font-semibold">{topic.name}</h2>
              <div>
                <p className={`text-base ${isActive ? "text-gray-300" : "text-gray-600"}`}>{topic.description}</p>
                <p className="text-sm mt-2">{count} {count === 1 ? "post" : "posts"}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Post list */}
      <div className="mt-16 border-t border-black">
        {visiblePosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block border-b border-black py-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 group-hover:underline underline-offset-4">
              {post.title}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-gray-600">
              <span>{formatDate(post.date)}</span>
              <span className="flex flex-wrap gap-x-3">
                {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
              </span>
            </div>
          </Link>
        ))}
        {filteredPosts.length === 0 && (
          <p className="border-b border-black py-6 text-lg text-gray-600">No posts here yet.</p>
        )}
      </div>

      {!showAll && filteredPosts.length > VISIBLE_POSTS && (
        <button onClick={() => setShowAll(true)} className="mt-10 text-xl text-black hover:underline underline-offset-4">
          Find all &rarr;
        </button>
      )}
    </>
  );
}
