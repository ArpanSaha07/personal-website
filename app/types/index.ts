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

// Page Types
export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>

// Components Types
export type ProjectCardProps = {
    project: Project
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