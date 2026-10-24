import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import SideImage from "@/app/components/SideImage";

// Styles for the elements written in content/blogs/*.mdx
const components: MDXComponents = {
  h2: ({ children }) => <h2 className="clear-both text-3xl font-semibold text-gray-900 mt-12 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="clear-both text-2xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>,
  p: ({ children }) => <p className="text-lg leading-relaxed text-gray-700 mb-6">{children}</p>,
  a: ({ href = "", children }) => (
    <Link href={href} className="text-black underline underline-offset-4 hover:text-gray-600">{children}</Link>
  ),
  ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700">{children}</ol>,
  blockquote: ({ children }) => <blockquote className="border-l-4 border-black pl-4 italic mb-6">{children}</blockquote>,
  hr: () => <hr className="clear-both border-black my-10" />,
  code: ({ children }) => <code className="bg-gray-100 rounded px-1.5 py-0.5 text-base">{children}</code>,
  pre: ({ children }) => (
    <pre className="clear-both bg-gray-100 border border-black rounded-xl p-4 mb-6 overflow-x-auto text-sm [&>code]:bg-transparent [&>code]:p-0">
      {children}
    </pre>
  ),
  img: ({ src = "", alt = "" }) => (
    <Image src={src} alt={alt} width={1600} height={900} className="w-full rounded-xl border border-black mb-6" />
  ),
  SideImage,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
