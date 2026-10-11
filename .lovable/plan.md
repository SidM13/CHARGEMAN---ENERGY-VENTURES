
# Chargeman Energy Ventures — Premium Corporate Site

A Fortune-500-grade multi-page site inspired by nex3.xyz's spacing, motion, and hierarchy, but visually and structurally recast for a global energy consulting & engineering firm led by Pankaj Manchanda.

## Brand & Design System

- **Palette (tokens in `src/styles.css`):**
  - `--navy: #071B34` (primary / dark sections)
  - `--energy-blue: #0E6FFF` (secondary / CTAs)
  - `--energy-green: #20C45A` (accent / success, sustainability)
  - Neutrals: white, light-gray surface, soft borders
  - Gradients: navy→blue hero wash, subtle blue→green accents
- **Typography:** Inter (body) + Manrope (display), loaded via `<link>` in `__root.tsx`. Large display headings, generous tracking, strong hierarchy.
- **Surfaces:** white glass cards with soft shadows, rounded-2xl, thin gradient borders, backdrop blur on nav/cards over imagery.
- **Motion:** framer-motion for fade/slide/scale/blur reveals, parallax hero, counter animations, timeline scroll reveals, hover lift on cards, button glow. Restrained — one considered move per section.

## Information Architecture (routes)

Each is a real route under `src/routes/` with its own `head()` metadata (title, description, og:title/description, og:image where a hero exists).

- `/` Home
- `/about`
- `/expertise`
- `/experience`
- `/projects` (index) + `/projects/$projectId` (detail)
- `/solutions`
- `/insights` (index) + `/insights/$slug` (article)
- `/contact`

Replace the placeholder `src/routes/index.tsx` with the real Home.

## Page Blueprints

**Home**
1. Sticky nav — transparent over hero, solid white on scroll; right-side "Book Consultation" CTA.
2. Cinematic hero: full-bleed energy imagery (offshore platform / refinery / solar+wind blend) with dark overlay. Left: "38 Years of Energy Leadership" + subhead + two CTAs. Right: floating glass card with Pankaj Manchanda portrait, title, ONGC credential.
3. Animated stats strip (38+, 20+, 100+, ₹1000+ Cr, multi-sector).
4. Trusted-industries marquee (Oil & Gas, Power, Renewables, Hydrogen, Infrastructure, LNG, Energy Transition).
5. About preview (split image + story teaser → link to /about).
6. Expertise grid preview (6 cards → /expertise).
7. Featured projects (3 large luxury cards → /projects).
8. Leadership philosophy band (Integrity, Innovation, Leadership, Sustainability, Growth, Vision).
9. Testimonials carousel.
10. Large blue CTA section ("Let's Build the Future of Energy Together").
11. Footer.

**About** — split hero, full biography, animated career timeline (ONGC → Leadership → Strategic Consulting → Chargeman → Future Energy), values.

**Expertise** — full grid of premium cards with hover expand: Upstream O&G, Engineering & EPC, Marketing & BD, Energy Consulting, Renewables, Hydrogen, Solar, Wind, Carbon Management, Energy Transition.

**Experience** — vertical scroll-animated timeline from 1987 → present.

**Projects** — filterable gallery (Oil Fields, Refineries, Pipelines, Solar, Wind, Storage, Hydrogen). Detail page: Overview, Challenge, Solution, Results, Gallery.

**Solutions** — service cards (Oil & Gas, Power, Renewables, Advisory, PM, Investment Advisory, Technical Due Diligence, Carbon Neutrality, Hydrogen Strategy).

**Insights** — blog grid with search + category chips; article template.

**Contact** — premium split layout: form + floating info card (phone, email, office, LinkedIn) + embedded map.

## Imagery

Generated via image tool in a consistent cinematic style: offshore platforms, refineries, LNG terminals, control rooms, pipelines, solar/wind farms, hydrogen plants, engineers on-site, executive meetings. Portrait of Pankaj Manchanda is a **user-supplied asset** (see question below). Hero and section images saved under `src/assets/` and referenced through generated `.asset.json` pointers where large.

## Components (reusable)

`SiteNav`, `SiteFooter`, `Hero`, `GlassCard`, `StatCounter`, `LogoMarquee`, `SectionHeading`, `TimelineItem`, `ExpertiseCard`, `ProjectCard`, `SolutionCard`, `TestimonialCarousel`, `CtaBanner`, `RevealOnScroll` wrapper. All colors via semantic tokens; no hardcoded hex in components.

## Technical Notes

- TanStack Start file-based routes; `<Outlet />` in `__root.tsx` preserved.
- Semantic design tokens in `src/styles.css` (`@theme inline` mapping navy/blue/green + gradient/shadow tokens).
- Fonts via `<link>` in root head (never `@import` remote in CSS).
- `framer-motion` for animations; `embla-carousel` for testimonials/marquee.
- Per-route `head()` with unique SEO metadata; leaf-level og:image only.
- Accessibility: aria-labels on icon buttons, single `<main>` per route, focus-visible states, WCAG-AA contrast on all tokens.
- No backend in this pass (static content + forms → later). Contact form UI only; wiring deferred.

## Out of Scope (this pass)

- Real CMS / Lovable Cloud backend, form submissions, auth, analytics wiring, real blog content pipeline. Content is high-quality placeholder copy structured for easy later editing.

---

## One clarifying question before I build

Do you have:
1. A **portrait photo of Pankaj Manchanda** to upload (for the hero glass card and About page)?
2. Real **project names / short descriptions** for the Featured Projects, or should I write plausible placeholder projects across O&G, Solar, Wind, Hydrogen, LNG that you can later replace?
3. Actual **contact details** (phone, email, office address, LinkedIn URL) for the Contact page and footer?

If you'd rather I just proceed with tasteful placeholders everywhere and you swap real content later, say "proceed with placeholders" and I'll implement the full plan as-is.
