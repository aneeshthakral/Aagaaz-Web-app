# Aagaaz Web App

Marketing and hospitality site for Aagaaz in Ludhiana, built with Next.js 15 App Router, JavaScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- shadcn/ui
- Framer Motion

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```

## Project Notes

- App routes live in `app/`
- shared SEO helpers live in `lib/seo.js`
- task tracking and review notes live in `docs/TASK_LEDGER.md`

## Image Settings

- The app currently uses local placeholder/generated visuals only
- `next.config.mjs` keeps image optimization enabled
- No remote image hosts are allowlisted yet because the project does not currently depend on external image domains
- When production photography is added from a CDN or remote host, update `images.remotePatterns` before shipping those assets

## Production Check

Current ship state passes:

```bash
npm run lint
npm run build
```
