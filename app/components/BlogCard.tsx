import Link from "next/link";
import Image from "next/image";
import { BlogCardProps } from "@/app/types";
import { formatDate } from "@/app/lib/formatDate";

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group block rounded-xl border border-black overflow-hidden bg-white">
      <div className="relative aspect-video border-b border-black">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">{post.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}
