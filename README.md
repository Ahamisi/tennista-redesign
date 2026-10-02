# Tennista Foundation

Redesign of the Tennista Foundation site. Built as a component system so the page
can be assembled section by section against the approved mockups.

## Stack

| Concern    | Choice                                                            |
| ---------- | ----------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19, Turbopack)                      |
| Language   | TypeScript (strict)                                               |
| Styling    | Tailwind CSS v4 with CSS-first design tokens                      |
| Motion     | `motion` (Framer Motion) + Lenis for inertial scrolling           |
| SEO        | Metadata API, JSON-LD, generated `sitemap.xml` and `robots.txt`   |

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script                                     | What it does                                                   |
| ------------------------------------------ | -------------------------------------------------------------- |
| `npm run dev`                              | Dev server                                                     |
| `npm run build` / `npm start`              | Production build and serve                                     |
| `npm run lint`                             | ESLint                                                         |
| `npm run shots`                            | Headless screenshots of key states into `.tmp/shots/`           |
| `npm run fonts`                            | Converts `/assets` font files to woff2 in `src/assets/fonts`    |
| `python3 scripts/build-brand-assets.py`    | Regenerates the favicon, app icon and OG image                 |

`npm run shots` needs the dev server running and Chrome installed. Pass a filter to
narrow it down, e.g. `npm run shots menu footer`.

## Project structure

```
src/
  app/                  routes, global CSS, sitemap, robots, API handlers
  components/
    layout/             header, mega-menus, mobile nav, footer, wordmark
    sections/           page sections (hero, …)
    seo/                JSON-LD helper
    ui/                 primitives: Button, Container, WaveDivider, Reveal, icons
  config/
    navigation.ts       every nav/footer link — header, drawer and sitemap read from here
    site.ts             name, EIN, address, socials, canonical URL
  lib/
    fonts.ts            the type stack
    motion.ts           shared easings, durations and variants
    seo.ts              structured-data builders
```

### Adding a page to the navigation

Add it once in `src/config/navigation.ts`. The desktop mega-menu, the mobile
drawer, the footer columns and `sitemap.xml` all derive from that file.

### Design tokens

Colours, the fluid type scale, radii, shadows and easings live in the `@theme`
block at the top of `src/app/globals.css`. Values there were sampled from the
approved mockups and are the only place to edit when the style guide lands.

Three reusable type utilities are defined alongside them: `headline` (oversized
condensed uppercase), `eyebrow` (tracked-out label) and `prose-body`.

### Motion

`src/lib/motion.ts` holds the shared easing curves, durations and variants so
every animation shares one rhythm. Use `<Reveal>` / `<RevealGroup>` for
scroll-triggered entrances; both fall back to static rendering under
`prefers-reduced-motion`.

## Known gaps

- **Fonts are stand-ins.** The mockups are set in Roc Grotesk, but the files in
  `/assets` are Fontspring DEMO cuts that replace 28 characters — including the
  apostrophe, the hyphen and the digit `4` — with a "DEMO" watermark glyph. The
  site currently uses Anton (display) and Figtree (body), which match closely.
  See the comment in `src/lib/fonts.ts` for the swap once licences are in hand.
- **Hero photography** is not in yet; the hero has empty media slots on either
  side of the headline.
- **Newsletter signup** validates and traps bots in `src/app/api/newsletter/route.ts`
  but does not yet forward to an email provider.
- **`siteConfig.url`** still points at the assumed production domain; confirm
  before launch since canonicals, OG tags and the sitemap derive from it.
