# CLAUDE.md — Xpendster public site

Guidance for Claude Code when working in this repo.

## What this is

The public marketing + legal site for the **Xpendster** Android app (app repo: `apropl/Xpendster`, package `com.xpendster`). It is a **plain static site** — no framework, no build step, no dependencies. Just HTML + one CSS file + a few lines of inline JS.

Served via **GitHub Pages** from the **`main`** branch at the repo root, on the custom domain **`xpendster.com`** (see `CNAME`).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page. **Bilingual EN/SV** via a language toggle (see below). |
| `privacy-policy.html` | Privacy policy (English). Linked from the Play Store listing + app. |
| `privacy-policy.md` | Markdown source/mirror of the privacy policy. |
| `account-deletion.html` | Account & data deletion instructions (English). Required by Google Play. |
| `styles.css` | **Shared** brand stylesheet for all three pages. |
| `assets/` | Images copied from the app repo's `store-assets/` (see below). |
| `CNAME` | Custom domain for GitHub Pages: `xpendster.com`. Do not delete. |

## Brand system (in `styles.css`)

Palette derives from the app's real brand art:
- Navy `#0D1117` (background / hero), surface `#161B22`
- Coin green `#49DB7E` (primary accent — sampled from the app icon)
- App indigo `#4A5BC4` / `#7C88E8` (secondary accent, matches the app's Material theme `primary`)
- Text `#E6EDF3`, muted `#9AA4B2`

The landing page and page chrome are **dark** (navy); long-form legal pages render on a **light `.paper` card** (`.legal .paper`) for readability. All three pages share the same `.topbar` header and `<footer>`. Keep them consistent — if you change the header/footer on one, change it on all.

## Bilingual toggle (index.html)

- Every translatable element is duplicated with `data-lang="en"` / `data-lang="sv"`.
- CSS hides `[data-lang]` by default and reveals the one matching `<html lang>`.
- Inline JS sets `<html lang>` from `localStorage` (`xp-lang`) or the browser language, defaulting to English, and toggles on the EN/SV buttons.
- **When adding landing-page copy, always add both EN and SV variants**, or it will be invisible in one language.
- The legal pages are **English only** for now (SV translation is a known follow-up).

## Assets

Images live in `assets/` and are **copied from the app repo** (`../Xpendster/store-assets/`), not generated here:
- `feature-graphic.png` ← `store-assets/feature_graphic_1024x500.png` (hero banner + social `og:image`)
- `icon-512.png` ← `store-assets/store_icon_512.png` (favicon + logo)
- `phone_1..6.png` ← `store-assets/phone/phone_1..6.png` (screenshot gallery)

If the store assets are regenerated in the app repo, re-copy them here.

## Conventions

- Keep contact email as **`support@xpendster.com`** everywhere (matches the Play Store listing).
- No analytics, trackers, or third-party scripts — this site collects nothing.
- Test by opening the HTML files directly in a browser (no server needed). Check both EN and SV, and that footer links resolve.

## Deploy

Merging to `main` publishes via GitHub Pages. Custom domain + HTTPS are configured in the repo's **Settings → Pages** plus Cloudflare DNS (A records to GitHub Pages IPs for the apex, `www` CNAME → `apropl.github.io`).

## Known follow-ups

- Swedish translations of `privacy-policy.html` and `account-deletion.html`.
- Replace the "Coming soon to Google Play" badge in `index.html` with a real "Get it on Google Play" badge + link (`https://play.google.com/store/apps/details?id=com.xpendster`) once the app is publicly live.
