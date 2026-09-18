# Winco Books — website

Next.js 14 (App Router) · TypeScript · Tailwind CSS v3 · Framer Motion · Lenis smooth scroll.
Single page, fully responsive, heavy scroll-driven motion (all of it respects `prefers-reduced-motion`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

> Note: `next/font/google` downloads Fraunces + Newsreader at build time, so the first
> build needs internet access.

## Editing content

**Everything is in `src/data/content.ts`.** No component edits needed to change copy,
prices, package contents, services, FAQs or contact details.

## Before going live — checklist

1. **Contact details** — `site` object in `src/data/content.ts`: `phone`, `whatsapp`
   (digits only, with country code, e.g. `919876543210`), `email`, `address`, `socials`.
2. **Our Books** — the `books.items` array is placeholder. Add real titles/authors, drop
   cover images into `public/books/` and set `cover: '/books/filename.jpg'`. Cards fall
   back to a drawn spine when `cover` is empty, so it never looks broken.
3. **Logo** — currently a Fraunces wordmark in `Nav.tsx`, `Footer.tsx` and `Preloader.tsx`.
   Ask the client for a **transparent SVG or PNG** (the JPG has a white background and will
   show as a white box on the stone page). Save as `public/logo.svg`, then replace the
   wordmark span in those three files with `<Image src="/logo.svg" ... />`.
   Also add `public/favicon.ico` cropped to the W mark alone.
4. **Domain** — update `metadataBase` in `src/app/layout.tsx`.
5. **OG image** — add `public/og.jpg` (1200×630) and reference it in `metadata.openGraph`.

## Form

The contact form has no backend — it composes the enquiry and hands off to WhatsApp or the
user's mail client. Works on any static host. To switch to a real inbox later, add a route
handler at `src/app/api/enquiry/route.ts` and POST `composed` from `Contact.tsx`.

## Sections

Hero (parallax manuscript stack) → Manifesto → Journey (pinned horizontal on desktop,
vertical on mobile) → Why Winco → About → Services (12, inline expanding) → Packages →
Our Books → FAQ (32, tabbed by category) → Contact → Footer.

## Design tokens

Defined in `tailwind.config.ts`.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1B1A18` | Text, dark sections |
| `ink-soft` | `#4A4845` | Body copy |
| `ash` | `#979797` | The logo grey — reserved for marks |
| `paper` | `#F1EFEA` | Page background (cool stone) |
| `page` | `#E3E1DB` | Alternating sections |
| `rule` | `#C9C6BE` | Hairlines |
| `saffron` | `#EF7D00` | Brand orange — fills, and text on dark only |
| `ember` | `#C25E00` | Darker orange for text on light backgrounds (contrast) |

**Accent rule:** `saffron` at full strength fails contrast as text on `paper`
(~2.4:1). Use `ember` for accent text on light backgrounds and `saffron` for fills,
rules, and text on `ink`. The sed-level shortcut of using one orange everywhere is
what makes brand-orange sites look cheap.

Type: **Fraunces** (display) / **Newsreader** (body).
