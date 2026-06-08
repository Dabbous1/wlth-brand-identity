# WLTH. Brand Identity Website

A rich, scroll-worthy brand identity showcase website for WLTH. — an Egyptian wealth management platform by Acumen Holding. Built from the official brand guidelines PDF.

## Run & Operate

- `pnpm --filter @workspace/wlth-brand run dev` — run the brand site (frontend only, no backend)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (react-vite artifact at `/`)
- Styling: Tailwind CSS v4, framer-motion animations
- Fonts: Philosopher (consumer display), Cardo (institutional display), Inter (body/UI), JetBrains Mono (data)
- Dark mode: next-themes

## Where things live

- `artifacts/wlth-brand/src/` — brand identity website source
- `artifacts/wlth-brand/src/pages/Home.tsx` — main page assembly
- `artifacts/wlth-brand/src/components/` — individual brand sections
- `artifacts/wlth-brand/src/index.css` — WLTH. design tokens (colors, fonts, radius)
- `attached_assets/WLTH_Brand_Guidelines_1780948368313.pdf` — source PDF (25 pages)
- `attached_assets/pdf_pages/` — PDF pages rendered as PNG for reference

## Brand System

**Tagline:** Wealth, working for you.

**Colors:**
- Wealth gradient: #7E5A12 → #BD8E25 → #D7A736 → #E3B340 → #F6D87A (18deg)
- Cream background: #FAF7F0
- Ink (primary text): #23201A
- Navy: #1F2A44
- Teal (accent): #0E7C66

**Typefaces:** Philosopher (display) · Cardo (institutional) · Inter (body) · JetBrains Mono (data)

**Core values (WEALTH acrostic):** Wisdom · Empowerment · Accessibility · Longevity · Transparency · Humanity

## Product

A single-page brand identity website with 12 sections: Hero, Brand Foundation (Purpose/Vision/Positioning/Only-ness), Core Values, Two Voices, Brand Personality, Voice & Tone, The Wealth Gradient, Colour System, Typography, Logo System, Governance, and a closing.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The wealth gradient should NEVER be used as a full-page wash behind body text — only on wordmarks, hero figures, and primary CTAs
- Logo wordmark: always four capitals + full stop: WLTH.
- Consumer voice uses Philosopher font; institutional voice uses Cardo — never mix them in one lockup

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- PDF pages extracted to `attached_assets/pdf_pages/page_01.png` through `page_25.png`
