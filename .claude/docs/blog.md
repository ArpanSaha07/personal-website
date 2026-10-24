# Blog

Posts are MDX files in the repo, compiled by `@next/mdx` and prerendered as static pages at build time.

## Routes

- `/blogs`: landing page. Four topic cards (2×2 grid) filter the post list below them; clicking the active card clears the filter. The list shows `VISIBLE_POSTS` (3) posts, and "Find all →" expands the rest in place. Topic filtering does not change the URL.
- `/blogs/[slug]`: a single post. Banner image, title, author, date and share button, then the post body, then "Check out more blogs →" with up to 3 other posts (same topic first, then newest). Unknown slugs return a 404 (`dynamicParams = false`).

## Adding a post

1. Create `content/blogs/<slug>.mdx`. The filename is the URL slug.
2. Start the file with a `metadata` export (shape: `BlogPostMeta` in `app/types/index.ts`):

   ```js
   export const metadata = {
     title: "My day trip to Quebec City",
     summary: "One-line description, used for SEO.",
     date: "2026-10-12", // YYYY-MM-DD, used for sorting
     author: "Arpan Saha",
     topic: "travel", // a slug from app/data/blogTopics.json
     tags: ["travel-blog"], // shown as #hashtags
     coverImage: "/images/blogs/quebec-cover.jpg",
   };
   ```

3. Write the body in Markdown. Put images in `public/images/blogs/`.
4. Use `<SideImage src="..." alt="..." />` for an image with text wrapping beside it on desktop.

## Adding a topic

Add an entry (`slug`, `name`, `description`) to `app/data/blogTopics.json`. The landing grid renders every topic in it.

## Files

| File | Purpose |
|---|---|
| `content/blogs/*.mdx` | Posts |
| `app/data/blogTopics.json` | Topics (landing cards) |
| `app/lib/blog.ts` | `getSlugs`, `getAllPosts` (newest first), `getPost` |
| `app/lib/formatDate.ts` | Date display (UTC, so server and client match) |
| `app/blogs/page.tsx` | Landing page (server) |
| `app/components/BlogLanding.tsx` | Topic cards, post list, "Find all" (client) |
| `app/blogs/[slug]/page.tsx` | Post page, static params, per-post metadata |
| `app/components/BlogCard.tsx` | Card in "Check out more blogs" |
| `app/components/ShareButton.tsx` | Native share sheet, or copies the link |
| `app/components/ReadingProgress.tsx` | Black line at the top of a post that grows left to right with scroll |
| `app/components/SideImage.tsx` | Floated in-post image |
| `mdx-components.tsx` | Tailwind styles for Markdown elements; registers `SideImage` |
| `next.config.ts` | Wraps the config with `createMDX()` |
| `app/components/Navbar.tsx` | "Blogs" link (desktop and mobile); other links are `/#...` so they work from blog pages |

## Design

White background, black 1px borders and divider lines, `rounded-xl` cards, Lato headings and Rethink Sans body text, matching the rest of the site. Blog pages set `bg-white text-black` on `<main>` themselves, because `globals.css` has an inverted `prefers-color-scheme` block (see `bugs.md`).

## Open items

- The 4 posts in `content/blogs/` and `public/images/blogs/placeholder.svg` are placeholders. Replace or delete them before deploying.
- Not built yet: RSS feed, sitemap, `BlogPosting` JSON-LD, reading time.
