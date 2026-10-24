# Arpan Saha's Personal Website

Personal portfolio site at [arpan-saha.com](https://arpan-saha.com), showcasing projects, experience and contact details, plus a blog at `/blogs`.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- MDX blog posts via `@next/mdx`
- Framer Motion, react-scroll-parallax, react-simple-typewriter
- Deployed on Vercel (Analytics and Speed Insights)

## Getting started

```bash
npm install
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # run ESLint
```

## Project structure

- `app/page.tsx` composes the sections: Hero, About Me, Projects, Experience, Contact.
- `app/components/` holds the section and shared components.
- `app/data/` holds the content as JSON (`projects.json`, `experiences.json`, `techstack.json`); edit these to update the site content.
- `app/types/` holds the TypeScript types for the data and component props.
- `public/` holds images, project videos and the resume PDF.
- `content/blogs/` holds the blog posts as MDX; topics are in `app/data/blogTopics.json`. The pages are `app/blogs/page.tsx` (landing) and `app/blogs/[slug]/page.tsx` (post).

## Writing a blog post

Add `content/blogs/<slug>.mdx` (the filename becomes `/blogs/<slug>`), starting with a `metadata` export (title, summary, date, author, topic, tags, coverImage), then write the post in Markdown. Put images in `public/images/blogs/`. Full guide: `.claude/docs/blog.md`.

## Performance

- Improve the website by taking suggestions from https://pagespeed.web.dev/ and https://www.webpagetest.org/

## Roadmap and known issues

Open tasks, known bugs and planned features are tracked in `.claude/docs/todo.md` and `.claude/docs/bugs.md`.
