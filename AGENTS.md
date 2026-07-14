# Michael Marine Services Repository Rules

## Current Phase

This repository is in the six-property Phase 0 foundation audit. The visible
brand remains `Precision Marine Services`, the production domain remains
`https://michealmarineservices.com/`, and the repository remains
`saber93/dubai-marina-glow` until approved identity evidence says otherwise.

## Phase 0 Boundaries

- Preserve the current homepage and the 20 source-defined inner-route records.
- Do not restore an inner route, change direct HTTP behavior, or add a public
  sitemap entry until route ownership and supporting evidence are approved.
- Do not add rental or booking keyword ownership, the readiness-checklist
  authority asset, redirects, consolidations, cross-network editorial links,
  language alternates, `hreflang`, or `x-default`.
- Do not invent a legal entity, qualifications, awards, certifications,
  experience, project totals, ratings, testimonials, response times,
  guarantees, contact facts, or media rights.
- The typed route inventory is governance data only. Runtime application and
  output code must not import it during Phase 0.
- Search Console actions and production deployment require explicit owner
  approval.

## Runtime and Quality Gate

Use Node `24.18.0` and npm `11.16.0` everywhere. Before publishing a change,
run:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
npm run seo:check
npm audit --omit=dev
git diff --check
```

Do not weaken validation or hide a failure. Keep remediation work in Draft
until the factual, identity, media, route, GitHub and Netlify gates pass.
