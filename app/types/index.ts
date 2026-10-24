import type { ReactNode } from "react"

// Data Types
export type Project = {
  id: number
  name: string
  description: string
  video_link: string
  technologies: Array<string>
  links: {
    github: string;
    website?: string;
  };
}

export type Experience = {
  title: string
  company: string
  date: string
  description: Array<string>
}

export type TechStack = {
  row_num: number
  technologies: Array<string>
}

export type BlogTopic = {
  slug: string
  name: string
  description: string
}

// Exported as `metadata` from each post in content/blogs/*.mdx
export type BlogPostMeta = {
  title: string
  summary: string
  date: string // YYYY-MM-DD
  author: string
  topic: string // slug from blogTopics.json
  tags: Array<string>
  coverImage: string
}

export type BlogPost = BlogPostMeta & {
  slug: string
}

// Page Types
export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>

// Components Types
export type ProjectCardProps = {
    project: Project
}

export type BlogCardProps = {
    post: BlogPost
}

export type BlogLandingProps = {
    topics: Array<BlogTopic>
    posts: Array<BlogPost>
}

export type ShareButtonProps = {
    title: string
}

export type SideImageProps = {
    src: string
    alt: string
}

export type PillProps = {
    children: ReactNode
    className?: string
}

export type ButtonProps = {
    children: ReactNode
    href: string
    type: "button" | "reset" | "submit"
    className1: string
    className2: string
}