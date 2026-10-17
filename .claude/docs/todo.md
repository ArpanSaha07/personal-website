# To do

Suggested fixes and improvements. Items from `README.md` are marked (README). Bug fixes with a clear cause are in `bugs.md`; this list is for improvements and open decisions.

## Quick fixes (see bugs.md for details)

- [ ] Fix the meta description apostrophe in `layout.tsx`
- [ ] Update ElevateTech references in `page.tsx` JSON-LD and the keywords meta
- [ ] Make the About Me heading an `<h2>`
- [ ] Fix `aria-label` in `HoverTextAnimation.tsx`
- [ ] Fix the inverted `prefers-color-scheme` block in `globals.css`

## Performance (README: PageSpeed / WebPageTest suggestions)

- [ ] Videos: compress and convert to WebM (plus MP4 fallback), add `poster` images, `preload="metadata"`, and `playsInline`. Largest files: `campusvibe-video.mp4` (5.8 MB), `NewsFlash.mp4` (4.6 MB).
- [ ] Play videos only when visible (IntersectionObserver) and pause them offscreen, instead of autoplaying all six. (README optional: turn videos into GIFs. GIFs are usually larger than video; short MP4/WebM is the lighter choice.)
- [ ] Add `images.formats: ['image/avif', 'image/webp']` in `next.config.ts` and consider limiting `deviceSizes` so the 4032 px hero is not served at 3840 px.
- [ ] Re-export `hero-image-mobile.jpg` smaller (currently 740 KB at 1814x2268); the optimizer serves it at most ~1200 px wide anyway.
- [ ] Move the project section parallax to CSS scroll-driven animations (or Framer Motion) so `react-scroll-parallax` can be removed and `ProjectSection` can be a server component.
- [ ] Replace per-mousemove `setState` in `CustomCursor.tsx` with a ref and `transform` updates; render it only on devices with a fine pointer (`(hover: hover) and (pointer: fine)`).
- [ ] Run PageSpeed and WebPageTest again after the above and record the scores here.

## Layout and visuals

- [ ] (README) Fix layer shift of the TechStack section (section is currently commented out in `page.tsx`)
- [ ] (README) Add a hover scroll animation on the desktop Navbar text. `HoverTextAnimation.tsx` already does this for the mobile menu and could be reused.
- [ ] (README) Fix the ProjectCard shadow effect (inline `boxShadow` overrides hover; see bugs.md #5)
- [ ] (README) Remove the hero image from the page background. Decide whether `fixed` is intended; `absolute` inside the hero section is the likely fix.
- [ ] (README) Project cards overflow into each other during the scroll animation. Likely related to the parallax offsets plus `translate-y-4`; revisit with the parallax change above. Note the "middle card" logic assumes 3 columns but the grid is 2 columns at `sm`.
- [ ] (README) Improve the project hover cursor. The cursor says "View Project →" but cards aren't clickable; either make the card link somewhere or change the label.
- [ ] (README, optional) Make all project cards the same height
- [ ] (README, optional) Change the card shadow on hover (blocked by the inline style)
- [ ] Add `scroll-margin-top` to section anchors so headings don't hide under the fixed navbar
- [ ] Improve navbar contrast over the hero photo (for example a darker nav background or white text while over the hero)
- [ ] Hero text on mobile: decide whether the text should move so it doesn't overlap the subject in the portrait photo (open decision)
- [ ] Check the hero on tall phones (for example 390x844): the 4:5 portrait crop is cropped on the sides

## Cleanup and refactors

- [ ] (README, optional) Refactor the button component so it can be used for every button: hero Resume, project card links and contact submit. This would fix the nested `<button>`/`<a>` issue.
- [ ] Make `Button.tsx` props simpler: replace `className1` and `className2` with named variants
- [ ] Remove the commented-out hover-play code in `ProjectCard.tsx` or implement it
- [ ] Remove the redundant `@tailwind utilities;` line in `globals.css`
- [ ] Pin the icon stylesheet version in `TechStackSection.tsx` before re-enabling it

## SEO and metadata

- [ ] (README) Add favicon and app icons for multiple platforms (apple-touch-icon, 192/512 PNG, `site.webmanifest`); only `app/favicon.ico` exists now
- [ ] Add Open Graph and Twitter card metadata, a canonical URL, and an OG image in `layout.tsx`
- [ ] Add `sitemap.ts` and `robots.ts` under `app/`
- [ ] Give the hero `h1` a stable, crawlable text (the typewriter cycles through greetings)

## Accessibility

- [ ] Add labels (or visually hidden labels) to the contact form inputs and make the message field required if intended
- [ ] Add a honeypot (`_honey`) and a redirect (`_next`) to the formsubmit form, or move to a server action or API route so the email address isn't in the HTML
- [ ] Add `aria-expanded` to the burger button and close the mobile menu on Escape and outside click
- [ ] Respect `prefers-reduced-motion` for the typewriter, parallax and hover animations
- [ ] Use real lists for experience bullets instead of `•` characters in the JSON strings
- [ ] Add `rel="noopener noreferrer"` to all `target="_blank"` links

## Content to verify

- [ ] Review About Me text for grammar ("building cool AI solution")
- [ ] Decide on a 404 page link back to the home page

## New features

- [ ] Start a technical blog section
- [ ] Start a blog section for travels
- [ ] Create a section sharing what I'm currently working on

Open decisions before building (not decided yet):
- How posts are written and stored (for example MDX files in the repo, a CMS, or JSON like the other data)
- Whether tech and travel are two separate sections or one blog with categories
- Navigation: new Navbar links, or separate pages such as `/blog` and `/travel`
- Whether travel posts need photo galleries or maps, since that affects image handling and page weight

## Resolved this session (verify in browser)

- [ ] Hero image on mobile: portrait crop via `<picture>`, `h-svh`, lighter overlay (README: hero image size on mobile)
- [ ] Experience vertical line sizing and scroll fill (README: vertical line in experience section)
- [ ] Hydration error in `ProjectSection` (README: resolve browser errors; other console errors may remain)
