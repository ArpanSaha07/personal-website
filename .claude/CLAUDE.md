# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Arpan Saha's personal portfolio site (https://arpan-saha.com). Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, deployed on Vercel (uses `@vercel/analytics` and `@vercel/speed-insights`). There is no test suite.

## Commands

- `npm run dev` — dev server
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)

## Architecture

- Single-page site: `app/page.tsx` composes section components in order (Hero, AboutMe, Project, Experience, Contact) plus `CustomCursor`, and embeds JSON-LD `Person` structured data. `TechStackSection` exists but is commented out in `page.tsx`.
- `app/layout.tsx` wraps everything with `Navbar`, `Footer`, fonts (Rethink Sans, Lato via CSS variables) and Vercel analytics, and imports globals via `@/app/globals.css`. Site metadata/SEO lives here.
- Content is data-driven: `app/data/{projects,experiences,techstack}.json` feed the sections. Their shapes are typed in `app/types/index.ts` (`Project`, `Experience`, `TechStack`, plus component prop types) — update both together when changing a schema. Update content by editing JSON, not components.
- Project media: `video_link` in `projects.json` points at files in `public/videos/`; other assets are in `public/images/` and `public/pdf/` (resume, linked from the site — filename changes must be reflected in the referencing component).
- Import alias `@/` maps to the repo root (e.g. `@/app/components/...`).
- Styling is Tailwind utility classes inline; shared custom utilities (e.g. `.section-heading`) are defined in `app/globals.css` under `@layer utilities`.
- `ProjectSection` is a client component (`'use client'`) using `react-scroll-parallax`; it reads `window.innerWidth` during render to disable parallax on small screens. Other animation libs: `framer-motion`, `react-simple-typewriter`.

## Notes

`README.md` holds the owner's TODO / known-issues list (e.g. hero image sizing on mobile, project card overflow during parallax) — check it before assuming a visual quirk is new.

## Instructions
- Never assume a decision — taken or still open.
- Reuse existing components or classes before adding.