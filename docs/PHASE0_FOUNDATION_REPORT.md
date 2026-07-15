# Michael Marine Phase 0 Foundation Report

Status: Owner-approved technical foundation; final pre-merge validation passed.

- Draft PR: `https://github.com/saber93/dubai-marina-glow/pull/2`
- Owner-approved implementation head:
  `53e4755a0c251970f21f0cfc4af3ac51e997ebb9`
- Deploy Preview: `https://deploy-preview-2--michael-maintenance.netlify.app/`
- Validated Deploy Preview ID: `6a56a26e5ef56600089f5d18`
- Validated Deploy Preview source:
  `53e4755a0c251970f21f0cfc4af3ac51e997ebb9`
- Restricted baseline evidence: `BASE-TECH-001` /
  `PHASE0-ARCHIVE-MICHEALMARINESERVICES-COM-20260714`

## Preserved baseline

- Production: `https://michealmarineservices.com/`
- Repository: `saber93/dubai-marina-glow`
- Baseline/hotfix commit: `3b2a328a1397fa81072db8378e91c3ca6e3c3b89`
- Netlify deploy: `6a567f126c6d480008205afb`
- Homepage: direct `200`
- Source-defined inner routes: 20, recorded as direct `404` pending evidence
- Public sitemap membership: homepage only

## Foundation scope

This Draft pins Node `24.18.0` and npm `11.16.0`, establishes deterministic
quality scripts, and records one homepage plus 20 source-defined inner routes
in a typed governance inventory. The manifest is test/validation input only and
is not imported by the runtime application.

No route was restored. No sitemap member, redirect, consolidation, identity
claim, authority asset, network link, language alternate or production behavior
was added.

The Deploy Preview crawl confirmed the homepage remains direct `200`, all 20
source-defined inner routes remain real `404`, an unknown route remains real
`404`, and `sitemap.xml` remains a one-URL production-homepage sitemap. GitHub
Quality and Netlify Deploy Preview checks passed.

## Final pre-merge validation

The approved implementation head was current with `main`; `main` had not
changed since the foundation branch was created. Validation completed on Node
`v24.18.0` and npm `11.16.0`:

- `npm ci`: passed;
- `npm run lint`: passed with zero warnings;
- `npm run typecheck`: passed;
- `npm test`: passed, 5/5 tests;
- `npm run build`: passed;
- `npm run seo:check`: passed;
- `npm audit --omit=dev`: passed with zero production vulnerabilities;
- `git diff --check`: passed.

The complete dependency tree still reports one moderate and one high
development-only Vite/esbuild finding. They are not production dependency
findings and require a future breaking toolchain upgrade; this foundation does
not hide or override them.

Deploy Preview verification:

- homepage: direct `200`, with no unexpected redirect;
- source-defined inner routes: 20/20 real `404`;
- representative unknown route: real `404`;
- sitemap: direct `200`, exactly one production-homepage URL;
- robots: direct `200`, referencing the production sitemap;
- redirects and consolidations: zero;
- route restoration and new sitemap members: zero;
- initial title and description: unchanged from production;
- rendered H1, body text, schema and image source list: unchanged from
  production;
- media: 29/29 rendered image elements loaded, with the same source list as
  production;
- source maps: absent locally and the JavaScript `.map` request returned
  `404`;
- browser console and hydration warnings: none;
- desktop and 390-by-844 mobile layouts: no overflow and visual parity with
  production, apart from the Deploy Preview's Netlify review drawer.

The generated production assets at the approved implementation head are
`assets/index-BUV2YRF-.js` and `assets/index-Cb92xuMh.css`. The production
deploy remained `6a567f126c6d480008205afb` throughout preview validation.

The final evidence update changes this report only. It does not change the
approved application implementation or broaden the release scope.

## Evidence and blockers

URL-level Search Console Page Indexing, Links, Live Test, identity, claim and
media-rights evidence remain required before a route-restoration or content
remediation phase. Current source claims are preserved as baseline application
content and are not approved by this foundation PR.
