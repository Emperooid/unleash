# UNLEASH Hub

Marketing site for **The UNLEASH Hub** — the movement built around Topsy Kola-Oyeneyin's book *UNLEASH: The Blueprint for a Life that Attracts Uncommon Opportunities*.

Built with Next.js (App Router), Tailwind CSS, and Framer Motion. Visual direction draws on [Acumen](https://acumen.org/) and the [Obama Foundation](https://www.obama.org/) — editorial, photo-led, and corporate rather than templated. Brand color is orange on near-black ink, per [@theunleashhub](https://www.instagram.com/theunleashhub/).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```text
app/                    App Router entry (layout, page, global styles)
components/sections/    One file per homepage section (Hero, BookPromo, Testimonials, ...)
components/ui/          Shared primitives (Button, Container, Reveal, Book3D, ...)
components/layout/      Header, Footer
components/providers/   SmoothScroll (Lenis) and other client providers
lib/content.ts          Placeholder copy/data feeding the sections — swap for real content
public/book/             Book cover images used across the site
assets/                  Source images as supplied, before optimization/cropping
```

## Notes

- All copy in `lib/content.ts` and inline in the section components is placeholder — swap in real content as it's finalized.
- `Book3D` (`components/ui/Book3D.tsx`) is a CSS 3D-transform rotating book, used as the small logo mark in the header/footer and as the showcase visual in the Book Promo section. It currently renders the front/back cover only; spine and page-edge textures can be added once those assets exist.
- Backend/CMS integration is not yet wired up — forms (newsletter, Join the Hub) are currently non-functional placeholders.

## Scripts

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build
npm run lint      # ESLint
```
