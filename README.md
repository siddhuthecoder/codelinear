# N7 — Modern Banking Landing Page

A pixel-perfect, fully responsive landing page for **N7**, a modern core banking platform. Built as a frontend engineering assignment with a focus on design accuracy, performance, accessibility, and clean architecture.

---

## Live Demo

> Deploy to Vercel and add the URL here.

---

## Overview

The page implements the complete N7 marketing site — from a floating glass navbar and animated hero section through to a multi-column footer — with smooth scroll-triggered animations, a persisted dark/light mode toggle, and a production-grade CSS design token system.

---

## Features

### Sections (top to bottom)

| Section | Description |
|---|---|
| **Hero** | Full-bleed dark section with staggered headline, CTA buttons, dashboard screenshot, and "Trusted by" logo strip |
| **Solutions** | 2-column grid of five product cards — Core Banking CB7, Digital Banking N7, Open Banking, Loan Origination System, Loan Management System |
| **Core Banking** | Split layout with CB7 watermark, feature list, and oversized laptop visual anchored off-canvas |
| **Flexible Banking** | Alternating layout with CKYC dashboard visual and feature checklist |
| **CTA Banner** | Full-width call-to-action with heading, body copy, and decorative watermark |
| **Banking Banner** | Infinite auto-scrolling marquee of brand phrases (pauses on hover) |
| **Digital Banking** | 3-column phone-centred layout with left/right feature rows and an animated phone mockup |
| **Insights** | Featured + compact article card grid with metadata and "Read More" links |
| **Case Studies** | Horizontal carousel of case study cards with active/inactive states |
| **Footer** | Logo, 3-column locations, 3-column link columns, copyright block |

### Dark / Light Mode

- Toggle button in the floating navbar (sun/moon icon)
- Preference persisted in `localStorage` under the key `n7-theme`
- Falls back to the OS `prefers-color-scheme` setting when no preference is stored
- Anti-FOUC inline script in `<head>` applies the correct CSS class to `<html>` before React hydrates — zero flash on page load or hard refresh
- Full light-mode token overrides for every surface, button, card, and glow effect

### Animations

- Scroll-triggered `fadeInUp`, `fadeIn`, `scaleIn` reveals on every section (Framer Motion)
- Staggered children on hero, solutions grid, and insight cards
- `once: true` viewport — animations fire once and do not repeat on scroll-back
- `prefers-reduced-motion` respected globally — all motion components fall back to plain HTML when the OS accessibility setting is on
- CSS `will-change: transform` on the marquee for GPU compositing

### Performance

- `next/image` with AVIF + WebP format negotiation, explicit `sizes` per breakpoint, `priority` on the above-the-fold hero image
- `compress: true` and `poweredByHeader: false` in Next.js config
- `experimental.optimizeCss: true` (Lightning CSS minification)
- Fluid `clamp()` typography — no layout reflow at breakpoints
- Static site generation — all routes prerendered at build time

### SEO and Meta

- `<title>`, `<meta description>`, `keywords` in `layout.tsx`
- Open Graph (`og:title`, `og:description`, `og:type`, `og:locale`)
- Twitter Card (`summary_large_image`)
- `robots: { index: true, follow: true }`
- Programmatic `robots.txt` and `sitemap.xml` via Next.js App Router route handlers (`app/robots.ts`, `app/sitemap.ts`)
- `favicon.ico` in `app/` folder

### Accessibility

- `role="banner"` on `<header>`, `aria-label` on `<footer>`, `aria-labelledby` on hero section
- `aria-label` on all icon-only buttons (theme toggle, nav logo)
- `aria-checked` + `role="switch"` on the theme toggle button
- `aria-hidden` on decorative SVG icons
- `tabIndex` management on carousel cards (`-1` when inactive)
- Keyboard-navigable nav and all interactive links

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + custom CSS design tokens |
| Animations | Framer Motion 12 |
| Fonts | Figtree, Archivo, Chivo Mono (Google Fonts via `next/font`) |
| Icons | Hugeicons React |
| Components | shadcn/ui (base primitives) |
| Linting | ESLint (eslint-config-next) |
| Build | SWC (Next.js native compiler) |

---

## Project Structure

```
n7-landing/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata, anti-FOUC script
│   ├── page.tsx             # Page composition — all sections in order
│   ├── globals.css          # Tailwind entry + all component CSS
│   ├── favicon.ico
│   ├── robots.ts            # Generates /robots.txt
│   └── sitemap.ts           # Generates /sitemap.xml
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx  # Fixed floating navbar shell
│   │   ├── section.tsx      # Generic section wrapper
│   │   └── page-container.tsx
│   │
│   ├── motion/
│   │   ├── variants.ts      # Shared Framer Motion variants + easing curves
│   │   ├── reveal.tsx       # MotionReveal, MotionStagger, MotionItem, MotionSection
│   │   ├── motion-hero.tsx
│   │   ├── motion-footer.tsx
│   │   ├── animated-home.tsx
│   │   └── motion-provider.tsx
│   │
│   ├── theme/
│   │   ├── theme-provider.tsx   # ThemeContext, localStorage persistence
│   │   ├── theme-toggle.tsx     # Sun/moon icon toggle button
│   │   └── index.ts
│   │
│   ├── sections/
│   │   ├── hero/            # hero-content, hero-visual, hero-header, trusted-by
│   │   ├── solutions/       # solutions-grid, solution-card, data.ts
│   │   ├── core-banking/    # core-banking-content, core-banking-visual, cb7-watermark
│   │   ├── flexible-banking/
│   │   ├── cta/
│   │   ├── banking-banner/  # Marquee + wave animation
│   │   ├── digital-banking/ # Phone stage, feature rows, watermark
│   │   ├── insights/        # InsightCardFeatured, InsightCardCompact, grid
│   │   ├── case-studies/    # Carousel, case-study-card
│   │   ├── footer/          # footer-link, data.ts
│   │   └── shared/
│   │       └── section-laptop-visual.tsx  # Reusable oversized dashboard image
│   │
│   └── ui/
│       └── button.tsx
│
├── styles/
│   └── tokens/
│       ├── primitives.css   # Raw color palette (navy, blue, gray scales)
│       ├── semantic.css     # Named tokens (--background, --foreground, etc.)
│       ├── typography.css   # Fluid type scale with clamp()
│       └── layout.css       # Spacing, grid, radius, shadow tokens
│
├── lib/
│   ├── utils.ts             # cn() helper (clsx + tailwind-merge)
│   └── tokens/index.ts
│
├── public/
│   ├── banner_image.png
│   ├── cloud_image.png
│   ├── flexible_image.png
│   ├── white_banner.png
│   ├── case_study.png
│   ├── icons/               # SVG icons (footer logo, checkboxes, arrows)
│   ├── logos/               # Partner / trusted-by logos
│   ├── phones/              # Phone mockup assets + Lottie JSON
│   └── aboutus/             # Solution section icons
│
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

---

## Design Token System

Styles are organized in four layers, each building on the previous:

```
primitives.css   →   Raw values  (hex colors, unitless numbers)
      ↓
semantic.css     →   Named roles (--background, --foreground, --text-muted …)
                     Includes :root.light overrides for every token
      ↓
typography.css   →   Fluid type scale (clamp-based, 320px → 1440px)
      ↓
layout.css       →   Spacing rhythm, grid columns, radius, shadow values
```

All tokens are bridged into Tailwind via `@theme inline` in `globals.css`, so Tailwind utilities (`text-foreground`, `bg-surface-dark`, `shadow-card`) consume the same single source of truth as hand-written CSS.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
git clone <repo-url>
cd n7-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js dev server with hot reload |
| `npm run build` | Production build (static generation) |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

---

## Deployment

The project is configured for zero-config deployment on Vercel.

1. Push the repository to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Click Deploy — no environment variables are required

---

## Assignment Context

Built as a frontend engineering assignment for **Codelinear**. Evaluation criteria covered:

- **Frontend accuracy** — spacing, typography, and visual consistency matched to the Figma design
- **Responsiveness** — fully responsive across desktop (1440px), tablet (768px), and mobile (390px)
- **Component structure** — feature-based folder organisation, small focused files, shared abstractions
- **Code quality** — TypeScript throughout, zero ESLint errors, no `any` types
- **Performance** — Next.js Image optimisation, CSS minification, static generation
- **Scalability** — design token system, composable motion primitives, reusable section components
- **Development practices** — App Router, server components by default, accessibility, SEO metadata
- **Attention to detail** — hover interactions on all cards, animated underlines, scroll reveals, dark/light mode with no FOUC
