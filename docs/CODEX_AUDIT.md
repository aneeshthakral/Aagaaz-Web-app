# Codex Independent Audit

Date: 2026-06-02
Mode: Audit only. No production files changed.

## 1. BUILD AND CODE

- CA-001
  File and line: `docs/AUDIT_REPORT.md` (file missing)
  What is wrong: The required Claude Code audit file is not present in the repository, so the Part B cross-check requested in this audit brief cannot be completed from source.
  Severity: Blocker
  Violates: User command `CONTEXT FILES TO READ FIRST ... docs/AUDIT_REPORT.md`; user command `PART B — CROSS-CHECK AGAINST CLAUDE CODE'S AUDIT`.

- CA-002
  File and line: [app/banquet/components/BanquetHero.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/banquet/components/BanquetHero.jsx:133), [app/banquet/components/BanquetPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/banquet/components/BanquetPackages.jsx:218), [app/banquet/components/BanquetPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/banquet/components/BanquetPackages.jsx:243), supporting route [app/banquet/page.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/banquet/page.js:16)
  What is wrong: Banquet CTAs still target `#enquiry`, but the banquet route no longer renders any enquiry section or any element with `id="enquiry"`. These are broken conversion CTAs on a money page.
  Severity: Blocker
  Violates: Build Plan §5 primary revenue-page CTA requirement; Build Plan §9 Phase 3 gate `each with an obvious next step for the visitor`; user command Part A.6 `test every ... Enquire Now CTA`.

- CA-003
  File and line: [app/kitty-parties/components/KittyHero.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/components/KittyHero.jsx:114), [app/kitty-parties/components/KittyPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/components/KittyPackages.jsx:206), [app/kitty-parties/components/KittyPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/components/KittyPackages.jsx:267), supporting route [app/kitty-parties/page.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/page.js:16)
  What is wrong: Kitty page CTAs still target `#enquiry`, but the route no longer renders an enquiry section or any element with `id="enquiry"`. These are broken lead-capture actions on a revenue page.
  Severity: Blocker
  Violates: Build Plan §5 primary revenue-page CTA requirement; Build Plan §9 Phase 3 gate `each with an obvious next step for the visitor`; user command Part A.6 `test every ... Enquire Now CTA`.

- CA-004
  File and line: [components/sections/ContactHero.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/ContactHero.jsx:259), supporting route [app/contact/page.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/contact/page.js:14)
  What is wrong: The contact-page primary CTA still points to `#enquiry`, but the contact route now renders only `ContactHero`, `ContactInfo`, and `ContactMap`. The target section is gone.
  Severity: Blocker
  Violates: Build Plan §5 `Contact and Arrival` requirements; Build Plan §9 Phase 4 contact page requirement; user command Part A.6 `test every ... Enquire Now CTA`.

- CA-005
  File and line: [app/layout.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/layout.js:1), [app/globals.css](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/globals.css:11)
  What is wrong: The app no longer wires fonts through `next/font`, but the token layer still expects `--font-fraunces` and `--font-inter`. Those CSS variables are unresolved and the site silently falls back to local fonts.
  Severity: Major
  Violates: Build Plan §2 final stack `Fonts | next/font, self-hosted, zero layout shift`; Build Plan §9 Phase 1 `Wire fonts through next/font`; AGENT_PROTOCOL Patch 1 rule 13 `Design token consistency`.

- CA-006
  File and line: [components/layout/MobileNav.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/layout/MobileNav.jsx:177)
  What is wrong: The mobile hamburger control is a `div` with `role="button"` and `tabIndex={0}`, but it has no keyboard activation handler for Enter or Space. It is not fully keyboard-operable.
  Severity: Major
  Violates: Build Plan §7 Codex accessibility audit responsibility; Build Plan §9 Phase 1 gate `passes a11y on mobile and desktop`.

- CA-007
  File and line: [components/shared/index.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/shared/index.js:8), [components/sections/index.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/index.js:28), [components/sections/ContactForm.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/ContactForm.jsx:29)
  What is wrong: The repo still exports multiple legacy enquiry components and an orphaned `ContactForm` section even though the routed pages have already been consolidated away from them. This is duplicate/orphaned lead-capture code.
  Severity: Major
  Violates: AGENT_PROTOCOL rule 5 `No duplicate components`; Build Plan §6 `No component gets created without first checking it does not already exist`.

- CA-008
  File and line: `npm run build` on 2026-06-02
  What is wrong: No production build errors and no production build warnings were emitted. No missing `'use client'` violations were found in components using hooks, `window`, `document`, or `gsap`. No `console.*` statements were found in audited source.
  Severity: None
  Violates: None

## 2. REACT BITS (CardNav, MagicBento, StarBorder)

- CA-009
  File and line: [components/layout/MobileNav.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/layout/MobileNav.jsx:24)
  What is wrong: CardNav is correctly mobile-only and the desktop navbar shows all seven user-facing destinations, but the mobile CardNav implementation is not fully compliant because its primary toggle is not keyboard-activatable.
  Severity: Major
  Violates: Build Plan §5 navigation requirement; Build Plan §9 Phase 1 shell accessibility gate.

- CA-010
  File and line: repository-wide search for `MagicBento`
  What is wrong: No `MagicBento` implementation was found anywhere in the repository, so this shared-spec item cannot be verified against a live implementation.
  Severity: Minor
  Violates: User command Part A.2 `confirm each matches its shared spec`.

- CA-011
  File and line: repository-wide search for `Analytics|Dashboard|Get Started|react-icons`
  What is wrong: No leftover demo text (`Analytics`, `Dashboard`, `Get Started`) and no `react-icons` imports were found. `StarBorder` CSS also does not bleed `:root` or `color-scheme` into globals.
  Severity: None
  Violates: None

## 3. FONTS AND TYPE

- CA-012
  File and line: [app/layout.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/layout.js:48), [app/globals.css](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/globals.css:11), [components/sections/CuisineCards.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/CuisineCards.jsx:78), [components/sections/MenuHighlights.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/MenuHighlights.jsx:144)
  What is wrong: The site does not have one working central font system in production. Components still hardcode `style={{ fontFamily: 'var(--font-fraunces)' }}` while the root layout no longer defines that font variable.
  Severity: Major
  Violates: Build Plan §2 `Fonts | next/font, self-hosted, zero layout shift`; AGENT_PROTOCOL Patch 1 rule 13 `Design token consistency`.

## 4. READABILITY

- CA-013
  File and line: [components/shared/PlaceholderImage.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/shared/PlaceholderImage.jsx:47)
  What is wrong: Placeholder image labels use gray text over very pale multicolour gradients. They are legible, but the contrast margin is weaker than the rest of the system and inconsistent with the brand’s black-on-light standard.
  Severity: Minor
  Violates: AGENT_PROTOCOL Patch 1 rule 12 `Contrast requirements`; AGENT_PROTOCOL Patch 1 rule 13 `Design token consistency`.

## 5. BRAND COLOUR

- CA-014
  File and line: [app/banquet/components/BanquetGallery.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/banquet/components/BanquetGallery.jsx:144), [app/banquet/components/BanquetGallery.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/banquet/components/BanquetGallery.jsx:234), [app/kitty-parties/components/KittyOfferings.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/components/KittyOfferings.jsx:117), [app/kitty-parties/components/KittyPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/components/KittyPackages.jsx:157), [components/shared/PlaceholderImage.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/shared/PlaceholderImage.jsx:17), [components/shared/WhatsAppFloat.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/shared/WhatsAppFloat.jsx:33)
  What is wrong: Blue, purple, rose, green, orange, and gray palettes remain in live UI components and placeholders instead of staying within the locked gold/white/black palette.
  Severity: Major
  Violates: User command Part A.5 `list any colour outside the gold, white, and black tokens`; AGENT_PROTOCOL Patch 1 rule 13 `Design token consistency`.

## 6. LINKS

- CA-015
  File and line: [components/layout/MobileNav.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/layout/MobileNav.jsx:193), [components/layout/Navbar.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/layout/Navbar.jsx:76), [components/sections/EnhancedCTABand.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/EnhancedCTABand.jsx:80)
  What is wrong: The global `Enquire Now` CTA target `/#enquire-now` is present and valid. The broken links found in this audit are the page-local `#enquiry` anchors listed above.
  Severity: None
  Violates: None

## 7. OUTDATED CONTENT

- CA-016
  File and line: [app/banquet/components/BanquetPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/banquet/components/BanquetPackages.jsx:154), [app/kitty-parties/components/KittyPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/components/KittyPackages.jsx:148), [components/sections/CorporatePackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/CorporatePackages.jsx:145), [components/sections/CuisineCards.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/CuisineCards.jsx:258)
  What is wrong: Prohibited marketing labels still remain in live UI: `Most Popular` badges and the word `Discover` on dining cards.
  Severity: Major
  Violates: User command Part A.7 `flag any leftover ... any most popular or recommended highlight, the word Discover on dining cards`.

- CA-017
  File and line: [components/sections/MenuHighlights.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/MenuHighlights.jsx:16), [components/sections/MenuHighlights.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/MenuHighlights.jsx:79), [components/sections/MenuHighlights.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/MenuHighlights.jsx:103), [components/sections/MenuHighlights.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/MenuHighlights.jsx:290), [components/sections/ContactInfo.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/ContactInfo.jsx:15), [components/sections/ContactInfo.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/ContactInfo.jsx:48), [components/sections/ContactHero.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/ContactHero.jsx:250)
  What is wrong: Specific dish copy is now hardcoded across the dining page and should be treated as unverified until owner-approved. The contact page also still contains unverified operating claims such as `Available 24/7`, `Response within 2 hours`, `9:00 AM - 10:00 PM`, `24/7 Support`, and `during business hours`. `Menu details coming soon` contradicts the fact that detailed named dishes are already on page.
  Severity: Major
  Violates: Build Plan §3 `Anything missing gets a clearly marked placeholder`; user command Part A.7 `flag any borrowed ... dish text or business hours`.

- CA-018
  File and line: [app/kitty-parties/components/KittyPackages.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/components/KittyPackages.jsx:263), [app/kitty-parties/page.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/kitty-parties/page.js:33)
  What is wrong: Placeholder editorial content still ships in live UI: `[THEME DETAILS NEEDED]` and `Coming soon - beautiful moments from our kitty celebrations`.
  Severity: Minor
  Violates: Build Plan §3 `Anything missing gets a clearly marked placeholder`; Build Plan §5 support-page content quality bar.

## 8. ALIGNMENT AND SPACING

- CA-019
  File and line: [components/sections/MenuHighlights.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/MenuHighlights.jsx:214)
  What is wrong: Dining recommendation cards are forced to a shared `min-h-44` even though body-copy lengths differ sharply. This avoids overlap, but it produces visibly uneven empty space distribution between cards instead of a consistent editorial rhythm.
  Severity: Minor
  Violates: User command Part A.8 `flag overlap, misalignment, and inconsistent spacing ... calling out the dining recommendation cards specifically`.

## 9. PLACEHOLDERS

- CA-020
  File and line: [components/sections/FamilyLeadership.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/FamilyLeadership.jsx:11), [components/sections/FamilyLeadership.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/FamilyLeadership.jsx:47), [components/sections/FamilyLeadership.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/sections/FamilyLeadership.jsx:123)
  What is wrong: The family portraits reserve space correctly and are visibly marked as pending, but Dr. Sonika Ahuja still exposes placeholder copy (`[Title Pending Owner Approval]`, `[Professional description ... pending owner approval]`) in live content.
  Severity: Major
  Violates: Build Plan §3 `Anything missing gets a clearly marked placeholder`; Build Plan §5 `Story` page quality bar.

- CA-021
  File and line: [app/apple-icon.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/apple-icon.js:10)
  What is wrong: The favicon/apple icon is still a generated letter `A` placeholder rather than a final branded asset.
  Severity: Minor
  Violates: User command Part A.9 `list every placeholder ... favicon`.

## 10. RESPONSIVE AND CROSS-BROWSER

- CA-022
  File and line: [components/layout/MobileNav.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/layout/MobileNav.jsx:95), [components/layout/MobileNav.jsx](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/components/layout/MobileNav.jsx:121)
  What is wrong: The mobile nav depends on JS-driven height measurement and GSAP timeline resets during resize. That pattern is more brittle in Safari than CSS-driven disclosure and is already paired with the keyboard-accessibility defect above.
  Severity: Major
  Violates: Build Plan §7 Codex responsibility to validate responsive behavior across breakpoints and browsers; user command Part A.10 `note anything that breaks in Safari or Firefox specifically`.

- CA-023
  File and line: local test tooling
  What is wrong: No Playwright test package is installed in this repo (`npm ls @playwright/test` returned empty), so Safari/Firefox/browser-console validation could not be executed with an automated browser harness inside this repository.
  Severity: Minor
  Violates: User command Part A.10 expectation for cross-browser checking.

## PART B — CROSS-CHECK AGAINST CLAUDE CODE'S AUDIT

### MISSED BY CLAUDE CODE

- Blocked: `docs/AUDIT_REPORT.md` is missing from the repository, so I could not perform a literal Claude-vs-Codex comparison.

### DISPUTED

- Blocked: `docs/AUDIT_REPORT.md` is missing from the repository, so there is no source report to dispute line by line.

### SEVERITY MISMATCH

- Blocked: `docs/AUDIT_REPORT.md` is missing from the repository, so there is no source report to compare severity against.

## Summary Count By Severity

- Blocker: 4
- Major: 10
- Minor: 6

## Combined Blocker List From Both Audits

- `docs/AUDIT_REPORT.md` is missing, so the requested Claude-vs-Codex blocker merge cannot be completed from source.
- Banquet page revenue CTAs point to a non-existent `#enquiry` target.
- Kitty Parties page revenue CTAs point to a non-existent `#enquiry` target.
- Contact page primary CTA points to a non-existent `#enquiry` target.

## Recommended Fix Order

1. Restore or add `docs/AUDIT_REPORT.md` so Part B can be completed as requested.
2. Fix the dead `#enquiry` CTAs on `banquet`, `kitty-parties`, and `contact`.
3. Restore one real centralized font system through `next/font` and remove unresolved font-variable usage.
4. Fix mobile-nav keyboard access.
5. Remove orphaned duplicate enquiry components and stale exports.
6. Remove prohibited copy (`Most Popular`, `Discover`, placeholder business hours, placeholder theme copy).
7. Normalize non-brand colours back to the locked palette.
8. Replace remaining launch-visible placeholders, including Dr. Sonika’s pending copy and the favicon.
