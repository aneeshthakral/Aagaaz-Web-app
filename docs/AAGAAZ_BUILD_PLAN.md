# Aagaaz Web App — Master Build Plan

A heritage-grade website for Aagaaz (Ludhiana), built to the quality bar of suryagarhcollection.com/suryagarh while staying fully original. Built by two agents working in parallel inside VS Code: Claude Code as lead builder, Codex as QA and plumbing.

---

## 1. What we are building

A cinematic, photography-led hotel website that feels expensive, calm, and confident. The reference site sells a feeling first and rooms second. We do the same, but we tilt the spotlight toward the three offerings that actually pay the bills: Banquet, Kitty Parties, and Rooms.

The name Aagaaz means a beginning, a dawn, a commencement. That is a gift for a celebrations venue. Weddings, kitty gatherings, anniversaries, every booking is the start of something. We let that idea run quietly through the whole site instead of stamping it everywhere.

---

## 2. Stack decision (read this before you run anything)

You asked for ReactJS, Tailwind, shadcn/ui, React Bits, no TypeScript, Vercel free plan. All of that holds. I am recommending one refinement.

**Recommendation: Next.js 15 (App Router), in JavaScript.**

Next.js is React, so nothing in your brief breaks. Here is why it beats a plain Vite single-page app for this specific project:

- **SEO is the main growth lever for a hotel.** People search "banquet hall in Ludhiana", "kitty party venue Ludhiana", "hotels near me Ludhiana". A Vite SPA ships near-empty HTML to Google and ranks poorly without extra prerendering work. Next.js server-renders real HTML out of the box, so every page is crawlable and shareable.
- **Vercel builds Next.js.** On the free Hobby plan it deploys with zero config, optimizes images automatically, and gives you serverless functions for the enquiry form. No friction.
- **shadcn/ui treats Next.js App Router as its primary target.** Cleanest possible setup.
- **React Bits drops straight in.** Its JS plus Tailwind variant installs through the shadcn CLI.
- **No TypeScript is fully supported.** shadcn writes `.jsx` when `components.json` has `"tsx": false`, paired with a `jsconfig.json` for the `@/` alias. Verified against the official docs.

If you would rather stay a pure SPA, Vite plus React plus React Router works, but you take an SEO hit and have to bolt on react-helmet and a prerender step. For a revenue site I would not. The rest of this plan assumes Next.js JS. Say the word if you want the Vite variant and I will swap the folder structure and prompts.

**Final stack**

| Layer | Choice |
|---|---|
| Framework | Next.js 15, App Router, JavaScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui (`tsx: false`) |
| Animation | React Bits (JS plus Tailwind variant) plus Framer Motion as the base engine |
| Fonts | next/font, self-hosted, zero layout shift |
| Forms | Web3Forms (no backend, free) by default, or a Next route handler plus Resend as the upgrade |
| Contact | wa.me click-to-chat, tel: links, embedded Google Map |
| Hosting | Vercel Hobby (free) |
| Repo | Single GitHub repo, single folder |

A note on tooling drift: React Bits and shadcn change their CLI commands often. Both agents must verify exact install commands against the live docs (reactbits.dev and ui.shadcn.com) at execution time rather than trusting any command pasted here.

---

## 3. Four things I need from you

The plan proceeds with smart defaults, but these four shape the work. Correct any of them and the agents adjust.

1. **Framework.** Defaulting to Next.js JS for SEO. Confirm or tell me to go Vite.
2. **Photography.** This is the single biggest factor in whether we hit Suryagarh quality. Do you have real, high-resolution photos of the rooms, the banquet hall set up for events, the food, and the exterior? If yes, we art-direct around them. If not, we build with tasteful placeholders and I will give your mentor a shot list to commission. A luxury layout on weak photos looks worse than a simple layout on strong photos.
3. **Bookings.** I am assuming there is no live room-booking engine and that everything runs on enquiries: a form, a WhatsApp tap, and a phone call. That fits Vercel free and fits how banquet and kitty bookings actually happen in India. Confirm.
4. **Copy and facts.** Claude Code writes the polished words. It needs the raw facts from you or your mentor: room types and counts, banquet seating and floating capacity, what a kitty package includes, dining hours, address, phone, WhatsApp number. Anything missing gets a clearly marked placeholder.

---

## 4. Design direction for Aagaaz

We borrow Suryagarh's *grammar*, not its *content*. Suryagarh is a desert palace in sandstone and ochre. Aagaaz is a Punjab celebration house. Different soul, same level of craft.

**Mood.** Warm, regal, cinematic, grand but welcoming. Full-bleed imagery, generous breathing room, slow and deliberate motion. Nothing busy, nothing loud.

**Palette.** Claude Code extracts the real palette from the existing logo first, then builds tokens around it. The working direction, to be validated against the logo:

- A deep ink or midnight base for cinematic full-bleed sections
- Warm ivory or cream for content surfaces
- A regal gold or brass accent for highlights and CTAs
- One warm secondary keyed off the logo, likely a deep wine or a dawn amber

Tokens get semantic names (`background`, `surface`, `ink`, `accent`, `accent-foreground`) so we never hardcode hex in components.

**Type.** A high-contrast display serif for headings (Fraunces, Cormorant, or Playfair feel) paired with a clean humanist sans for body (Inter, General Sans, or Geist). No mono, a hotel does not need it. Final pairing is Claude Code's call after seeing the logo. Note: this is the hotel's identity, kept separate from any personal or StoryGrid type system.

**Motion language.** Slow, settled easing. Scroll reveals, gentle parallax on heroes, soft Ken Burns drift on key images, calm fades between sections. React Bits handles hero text reveals and accent moments. Everything respects `prefers-reduced-motion`. Motion should feel like the building exhaling, never like a demo reel.

**Originality guardrail.** We never copy Suryagarh's exact layouts, copy, or assets. We study how they pace a page and how they let images breathe, then we build Aagaaz's own version.

---

## 5. Sitemap and page priorities

Mapped from the reference structure, re-weighted for revenue.

**Primary (heaviest visibility, richest pages, strongest CTAs)**
- **Banquet and Weddings** — capacities, layout options, package tiers, gallery, enquiry
- **Kitty Parties** — themed packages, what is included, gallery, enquiry
- **Rooms / Stay** — room types, amenities, rates or enquiry

**Secondary**
- **Dining / Culinary** — restaurant or in-house catering, cuisine, sample menus
- **Experiences / Occasions** — birthdays, corporate events, anniversaries
- **Gallery** — the visual proof
- **Story** — the Aagaaz meaning and the house's character

**Essential**
- **Contact and Arrival** — map, directions, phone, WhatsApp, enquiry form, hours
- **Home** — the showpiece that surfaces the three revenue offerings high on the page

**Navigation.** The three revenue items sit first and most prominent. A persistent "Enquire" CTA lives in the header. A floating WhatsApp button rides along on every page. The home page hero leads into the three offerings within the first scroll.

---

## 6. Folder structure (clean, flat, no surprises)

```
aagaaz-web-app/
├── app/
│   ├── layout.js                 # root layout, fonts, header, footer
│   ├── page.js                   # Home
│   ├── globals.css               # Tailwind layers + design tokens
│   ├── rooms/page.js
│   ├── banquet/page.js
│   ├── kitty-parties/page.js
│   ├── dining/page.js
│   ├── experiences/page.js
│   ├── gallery/page.js
│   ├── story/page.js
│   ├── contact/page.js
│   ├── sitemap.js                # generated sitemap (Codex)
│   ├── robots.js                 # robots rules (Codex)
│   └── api/
│       └── enquiry/route.js      # form handler (if using route + Resend)
├── components/
│   ├── ui/                       # shadcn primitives only
│   ├── layout/                   # Navbar, Footer, Container, MobileNav
│   ├── sections/                 # Hero, OfferingGrid, Testimonials, CTABand, etc.
│   ├── animations/               # React Bits wrappers and motion helpers
│   └── shared/                   # Logo, buttons, cards, WhatsAppFloat
├── lib/
│   ├── utils.js                  # cn helper
│   ├── constants.js              # nav, business info, contact details
│   ├── seo.js                    # metadata + JSON-LD helpers (Codex)
│   └── content/                  # page content as plain JS objects
│       ├── rooms.js
│       ├── banquet.js
│       ├── kitty.js
│       └── ...
├── hooks/                        # custom hooks
├── public/
│   ├── logo/                     # existing logo, untouched
│   ├── images/
│   │   ├── hero/
│   │   ├── rooms/
│   │   ├── banquet/
│   │   ├── kitty/
│   │   ├── dining/
│   │   └── gallery/
│   └── fonts/                    # if any font is self-hosted manually
├── docs/
│   ├── AAGAAZ_BUILD_PLAN.md      # this file
│   ├── AGENT_PROTOCOL.md         # the rules both agents follow
│   ├── TASK_LEDGER.md            # the live source of truth
│   └── DESIGN_SYSTEM.md          # tokens + type + motion, written by Claude Code
├── jsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── components.json               # shadcn config, "tsx": false
├── next.config.js
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── package.json
└── README.md
```

Rules: shadcn primitives live only in `components/ui`. Page-specific blocks live in `components/sections`. Content lives as data in `lib/content`, never hardcoded inside JSX. No component gets created without first checking it does not already exist.

---

## 7. Division of labor

You set this up well. Claude Code takes creative ownership, Codex takes the grunt work and the safety net. They run in two terminals on the same folder.

### Claude Code — Lead Builder and Creative Owner
- Reads the reference images and the existing site first
- Extracts the logo palette and writes the design system
- Builds the layout shell, every page, every section
- Composes components and integrates React Bits and Framer Motion
- Owns responsive behavior and the overall feel
- Writes and polishes all copy in your voice
- Uses its installed skills (frontend-design, UI and UX, and any other relevant ones)
- **Models: plan on Opus, build on Sonnet** (switch with `/model` in Claude Code)

### Codex — QA Engineer, Plumber, Reviewer
- Sets up tooling: ESLint, Prettier, jsconfig, .gitignore, env
- Keeps dependencies clean and conflict-free
- Runs accessibility audits: contrast, alt text, focus order, keyboard nav, reduced-motion
- Runs performance audits: Lighthouse, image weight, lazy loading, bundle size
- Owns technical SEO: metadata, sitemap.js, robots.js, JSON-LD (LocalBusiness plus Hotel schema)
- Validates responsive behavior across breakpoints and browsers
- Fixes build errors, hunts duplicate components and dead code, checks links and form logic
- Runs the pre-deploy checklist and the Vercel config sanity pass
- **Does not own creative decisions and does not invent features**

The mental model: Claude Code writes the song, Codex tunes the instruments and checks the room for fire hazards.

---

## 8. Agent collaboration protocol (this prevents the mess)

Two agents on one folder will collide unless they follow rules. These are non-negotiable. They also live in `docs/AGENT_PROTOCOL.md` so both agents read them on startup.

1. **One source of truth.** `docs/TASK_LEDGER.md` holds every task with an ID, owner, status, files touched, and notes. Both agents read it before any action and update it after. Statuses: TODO, IN PROGRESS, READY FOR REVIEW, FIXING, DONE.

2. **File ownership zones.** Claude Code writes in `app/` (pages), `components/`, `lib/content/`, `lib/constants.js`, styling, and image art direction. Codex writes in config files, `app/sitemap.js`, `app/robots.js`, `lib/seo.js`, `scripts/`, and `docs/` QA notes. Codex only edits a feature file to fix a logged bug, never to add features.

3. **File locks.** Before editing any file, an agent marks it locked in the ledger with its name and a timestamp. The other agent never touches a locked file. Locks clear when the task moves to READY FOR REVIEW or DONE.

4. **Handoff rhythm.** Claude Code builds a section to READY FOR REVIEW, then stops touching those files. Codex picks up READY FOR REVIEW items, audits and fixes, and marks them DONE or kicks them back with notes. The two never edit the same file at the same time.

5. **No duplicate components.** Before creating any component, both agents check `components/` and the ledger. Codex actively scans for duplication and dead code every phase.

6. **One installer at a time.** Never run `npm install` in both terminals at once. Coordinate every dependency add through the ledger. Claude Code installs build deps, Codex installs tooling deps, and they announce it in the ledger before running.

7. **Git from day one.** Initialize git locally in Phase 0, long before the GitHub push. Small, frequent commits with clear prefixes: `feat:`, `fix:`, `chore:`, `a11y:`, `perf:`, `seo:`, `docs:`. This gives you history and rollback while building. For any large refactor, the acting agent uses a short-lived branch and merges when green.

8. **Verify live docs.** For React Bits and shadcn commands, check the official docs at run time. Do not trust pasted commands.

---

## 9. The roadmap: phases, sessions, sections

Eight phases. Each phase is one or more sessions. Each page breaks into sections. Both agents produce their own detailed task list at the start of each phase and log it in the ledger before building.

### Phase 0 — Foundation and setup
*Session 0.1 (Codex leads).* Scaffold Next.js JS, install Tailwind, init shadcn with `tsx: false`, set jsconfig alias, add ESLint and Prettier, init git, create the docs folder and an empty ledger.
*Session 0.2 (Claude Code, Opus).* Study every reference image in `/Reference`, inspect the old PHP site if reachable, extract the logo palette, and write `docs/DESIGN_SYSTEM.md` plus the token layer in `globals.css` and `tailwind.config.js`.
*Gate: tokens and tooling confirmed before any page work.*

### Phase 1 — Design system and core shell
*Claude Code (Sonnet).* Install the shadcn primitives we need (button, sheet, dialog, accordion, navigation-menu, carousel, form, input, textarea). Build the layout shell: responsive Navbar with the three revenue items first, MobileNav, Footer, Container, the persistent Enquire CTA, and the WhatsApp float. Wire fonts through next/font.
*Codex.* Accessibility and responsive audit of the shell. Confirm focus states, keyboard nav, and contrast. Set up the SEO metadata helper and base layout metadata.
*Gate: shell looks right and passes a11y on mobile and desktop.*

### Phase 2 — Home page (the showpiece)
*Claude Code (Opus to plan the section flow, Sonnet to build).* Sections in order: cinematic hero with the Aagaaz line, the three revenue offerings surfaced high, a short Story teaser, a dining glimpse, experiences strip, testimonials or social proof, a closing CTA band, footer. Integrate the first React Bits moments here (hero text reveal, image drift).
*Codex.* Performance pass on the hero (largest image on the site), lazy loading below the fold, Lighthouse baseline, reduced-motion check.
*Gate: home page feels premium and scores well on Lighthouse.*

### Phase 3 — Revenue pages (priority)
Built in this order because they earn the money.
*Session 3.1 Banquet and Weddings.* Hero, capacities and layouts, package tiers, gallery, strong enquiry block.
*Session 3.2 Kitty Parties.* Hero, themed packages, what is included, gallery, enquiry block.
*Session 3.3 Rooms / Stay.* Hero, room-type cards, amenities, rates or enquiry, gallery.
*Claude Code builds each, Codex reviews each before the next begins.*
*Gate: all three convert clearly, each with an obvious next step for the visitor.*

### Phase 4 — Supporting pages
Dining, Experiences, Gallery, Story, Contact and Arrival. Contact gets the embedded map, tel and WhatsApp links, hours, and the enquiry form. Gallery gets a performant lightbox with proper lazy loading.
*Claude Code builds, Codex reviews.*

### Phase 5 — Animation and polish
*Claude Code.* Layer in the remaining React Bits and Framer Motion moments. Page transitions, scroll reveals, hover states, micro-interactions. Tune easing so everything feels slow and expensive.
*Codex.* Hard reduced-motion audit, jank and layout-shift check, mobile performance under throttling.
*Gate: motion adds calm, never noise, and never hurts performance.*

### Phase 6 — Forms and lead capture
*Claude Code.* Build the enquiry forms (banquet, kitty, rooms, general) with shadcn form components and clean validation. Wire WhatsApp and tel CTAs everywhere they belong.
*Codex.* Wire and test the backend path (Web3Forms key or the Next route handler plus Resend). Validate every form: success state, error state, spam honeypot, and that the lead actually lands in the inbox.
*Gate: a test enquiry from each form reaches the destination.*

### Phase 7 — SEO, performance, accessibility, responsive QA
*Codex leads.* Full technical SEO: per-page metadata, Open Graph, sitemap.js, robots.js, JSON-LD for LocalBusiness and Hotel, image alt text everywhere. Full Lighthouse pass on every page. WCAG AA contrast and keyboard sweep. Responsive sweep across phone, tablet, and desktop, plus Safari, Chrome, and Firefox.
*Claude Code.* Fixes anything visual or structural that Codex flags.
*Gate: green Lighthouse, clean a11y, real titles and descriptions on every page.*

### Phase 8 — Pre-deploy, launch, GitHub
*Codex.* Pre-deploy checklist, env handling, `next.config.js` and image-domain sanity, production build with no errors or warnings, README written.
*Claude Code.* Final visual QA on the Vercel preview deploy.
*You.* Connect the repo to Vercel, deploy on the free plan, then push the single repo to GitHub for backup and to give your co-developer access.
*Gate: live, fast, crawlable, and handed over.*

---

## 10. Quality bar (the definition of done)

A page is done only when every line below is true.

- It carries the Aagaaz feeling: calm, warm, expensive
- Photography is the hero, text supports it
- The three revenue offerings are never more than a tap away
- Every interactive element is keyboard reachable with a visible focus state
- Contrast passes WCAG AA
- It is flawless from a 360px phone up to a wide desktop
- Lighthouse performance and SEO both sit comfortably in the green
- Motion respects `prefers-reduced-motion`
- No duplicate components, no dead code, no console errors
- Copy sounds human and plain, with no em dashes, no semicolons, and no buzzwords

---

## 11. One reminder on assets

I will say it once more because it matters most. The gap between this site looking like a template and looking like Suryagarh is almost entirely photography. If real photos are not ready, we build cleanly with placeholders and ship the shot list to your mentor so the upgrade is a single swap later. The structure will be ready for great images the moment they arrive.
