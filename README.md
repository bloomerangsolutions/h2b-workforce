# H2B Workforce

Marketing site for H2B Workforce, an attorney-led seasonal labor solutions platform serving landscaping, roofing, hospitality, and other US trades.

Built by GDS for Denman & Lerner.

## Stack

- Next.js 15 (App Router, RSC)
- React 18
- Tailwind CSS 3
- TypeScript
- Deployed on Vercel

## Pages

- `/` — Homepage with cap status widget, cost comparison, pricing teaser
- `/programs` — Program overview (H-2B, H-2A, audits)
- `/industries/landscaping` — Industry vertical (template for additional verticals)
- `/how-it-works` — 12-week process timeline with risk transparency
- `/pricing` — Three-tier pricing with comparison table and RFE guarantee
- `/eligibility` — Interactive 7-question quiz with qualification scoring
- `/about` — Lerner story, leadership, mission
- `/resources` — Article index with featured post and newsletter signup
- `/resources/[slug]` — Article detail with sidebar
- `/contact` — Inquiry form
- `/privacy` — Privacy policy

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Image placeholders are currently rendered as Material Symbols icons inside gradient blocks. Swap to real photography before launch.
- Form submissions on `/contact`, `/resources` newsletter, and search are non-functional UI; wire to a backend (Resend, Formspree, or custom API route) before launch.
- Eligibility quiz is fully client-side and does not persist results. Add result-capture endpoint if you want lead generation from the quiz.
