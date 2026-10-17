# Bugs

Found by reading the code and checking the rendered HTML from the dev server. None of the fixes below have been applied unless stated. Line numbers are as of this audit.

## Confirmed bugs

1. **Resume button links to a deleted file.**
   `app/components/HeroSection.tsx:69` points to `/pdf/Arpan_Resume.pdf`; the repo only has `public/pdf/Arpan-Resume.pdf`, so the link 404s.
   Fix: change the href to `/pdf/Arpan-Resume.pdf`.

2. **Meta description shows a literal `&#39;`.**
   `app/layout.tsx:25` uses `Arpan Saha&#39;s` inside a JS string, so the rendered tag is `content="Arpan Saha&amp;#39;s personal portfolio website."`.
   Fix: use a plain apostrophe (`Arpan Saha's`) in the string.

3. **Custom cursor listeners are never removed.**
   `app/components/CustomCursor.tsx:24-25` calls `removeEventListener` with new arrow functions, which cannot match the ones that were added. The listeners leak.
   Fix: keep the handlers in named variables (or use one delegated `mouseover` listener on `document`).

4. **Custom cursor can stop working after hydration on phone-width screens.**
   `CustomCursor.tsx:17` queries the `[data-cursor="project"]` elements once on mount. `ProjectSection` now re-renders into a different tree on small screens after hydration, which can replace the card DOM nodes and drop the listeners.
   Fix: event delegation on `document` (`mouseover`/`mouseout` with `closest('[data-cursor]')`).

5. **Project card hover shadow never appears.**
   `app/components/ProjectCard.tsx:39` sets `boxShadow` inline, which overrides the `hover:shadow-*` classes. This is the "Fix ProjectCard shadow effect" item in the README.
   Fix: remove the inline style and put the blue shadow in a class.

6. **Invalid classes on project cards.**
   `ProjectCard.tsx:35` uses `bg-grey-800` (should be `gray`, and it currently does nothing). `ProjectCard.tsx:46` uses `hover:play`, which is not a Tailwind class.
   Fix: remove both, or replace with intended styles.

7. **`aria-label` is inside the className string.**
   `app/components/HoverTextAnimation.tsx:16` has `aria-label=${label}` as part of the `className` template, so no aria-label is applied and a junk class is added.
   Fix: pass `aria-label={label}` as a prop.

8. **Dark-mode colors are inverted.**
   `app/globals.css:21` sets the dark background (`#0a0a0a`) and light text under `prefers-color-scheme: light`. Visitors with a light preference get dark body colors, which show on any area without its own background (overscroll, gaps) and make unstyled text light-gray on white sections.
   Fix: change the query to `dark` (or remove it), then check that every section sets its own text color.

9. **Two `<h1>` elements on the page.**
   `HeroSection.tsx:43` and `app/components/AboutMeSection.tsx:5` both use `<h1>`.
   Fix: make the About Me heading an `<h2>`.

10. **Interactive elements nested inside each other (invalid HTML).**
    - `app/components/Button.tsx:6-7`: `<button>` wraps `<Link>`.
    - `ProjectCard.tsx` links: `<Link>` wraps `<button>`.
    - `HeroSection.tsx` Resume: `<button>` wraps `<a>`.
    Only the inner text is clickable, and screen readers announce two controls.
    Fix: use a single `<Link>` or `<a>` styled as a button.

11. **Hero social icons shift their neighbors on hover.**
    `HeroSection.tsx:63-65` uses `hover:text-5xl`, which changes font size and moves the icons next to it.
    Fix: use `hover:scale-125` (transform) instead.

12. **Stale personal details in metadata.**
    `app/page.tsx:40` says the person works for `ElevateTech`, and the keywords meta in `layout.tsx:33` mentions ElevateTech and Machine learning Engineer. The experience data and resume show ATS Containers.
    Fix: update the JSON-LD and keywords.

## Possible bugs / things to verify

1. **All six project videos autoplay at once.** `ProjectCard.tsx:45` uses `autoPlay` with no `playsInline`, `preload`, `poster` or visibility control. About 15.9 MB of video sits in `public/videos/`. Without `playsInline`, iOS Safari may not autoplay inline.
2. **Date mismatch.** `app/data/experiences.json` says ATS Containers started May 2026; an earlier resume version said June 2026. Confirm which is right.
3. **Contact form.** `ContactSection.tsx` posts to `formsubmit.co` with the email address in the page HTML (spam target), has no honeypot or redirect back to the site, and inputs have only placeholders (no labels). formsubmit also needs a one-time email confirmation of the address.
4. **Nav contrast over the hero.** The navbar links and logo are black on a blurred dark photo (visible in the desktop screenshot), which is hard to read.
5. **Mobile menu behavior.** `Navbar.tsx` has no `aria-expanded`, and the menu doesn't close on outside click or Escape.
6. **Anchor links under the fixed nav.** Smooth scrolling is on, but sections have no `scroll-margin-top`, so headings can end up behind the 55px navbar depending on padding.
7. **`target="_blank"` links without `rel`.** `HeroSection.tsx:64` (LinkedIn) and `app/components/Footer.tsx` social links have no `rel="noopener noreferrer"`. Modern browsers imply `noopener`, but it is better explicit.
8. **Hero image is `fixed` behind the whole page.** This is the README item "remove the hero image from the background of the webpage". It stays painted while scrolling and shows through any transparent section. Decide whether the fixed behavior is intended before changing it.
9. **Hero icon and text animations ignore reduced-motion.** The typewriter and hover effects don't check `prefers-reduced-motion`.
10. **`TechStackSection` (currently disabled)** loads icon CSS from jsDelivr using `@master` (unpinned) and has a duplicated `animate-slide` class. Check both before re-enabling it.
11. **Empty `@tailwind utilities;`** in `globals.css:2` is redundant with `@import "tailwindcss"` in Tailwind v4. It is harmless but can be removed.
