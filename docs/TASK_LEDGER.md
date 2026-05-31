# Task Ledger

## Status Legend

- TODO
- IN PROGRESS
- READY FOR REVIEW
- FIXING
- DONE

| ID | Task | Owner | Status | Locked Files | Notes |
| --- | --- | --- | --- | --- | --- |
| P0-01 | Create docs folder, move and read build plan, create agent protocol and task ledger | Codex | DONE |  | Completed 2026-05-31 |
| P0-02 | Scaffold Next.js 15 App Router in JavaScript with Tailwind and alias support | Codex | DONE |  | Completed 2026-05-31 with `next@15.5.18` and `@/*` alias in `jsconfig.json` |
| P0-03 | Initialize shadcn/ui in JavaScript mode with verified docs settings | Codex | DONE |  | Verified against `ui.shadcn.com`; `components.json` uses `"tsx": false` |
| P0-04 | Add formatting and lint tooling, initialize git, and verify `.gitignore` | Codex | DONE |  | ESLint flat config, Prettier, Tailwind class sorting plugin, and git initialized |
| P0-05 | Confirm dev server runs clean | Codex | DONE |  | `npm run dev -- --port 3001` started successfully and `curl -I http://127.0.0.1:3001/` returned `200 OK` |
| P0-06 | Extract Aagaaz logo palette and establish brand colors | Claude Code | DONE | `docs/DESIGN_SYSTEM.md` | Extracted gold #C9A961 and supporting palette |
| P0-07 | Write comprehensive DESIGN_SYSTEM.md | Claude Code | DONE | `docs/DESIGN_SYSTEM.md` | Complete system with tokens, typography, motion |
| P0-08 | Set design tokens in globals.css | Claude Code | DONE | `app/globals.css` | Aagaaz brand tokens integrated with shadcn |
| P1-90 | Set up shared page title and description system with base metadata | Codex | DONE |  | Added `lib/seo.js`, layout metadata defaults, page helper usage, global focus-visible styling, and removed build-time Google font dependency |
| P1-91 | Review Phase 1 files marked READY FOR REVIEW | Codex | DONE |  | Reviewed shell handoff items, fixed small technical issues, and confirmed lint plus production build pass |
| P2-90 | Review Phase 2 home page files marked READY FOR REVIEW | Codex | DONE |  | Added reduced-motion support across home sections, fixed placeholder responsiveness to avoid overflow and layout jump risk, improved keyboard access, and confirmed lint passes. Full `next build` is currently blocked by unrelated missing imports in locked Phase 3 kitty page files |
| P3-90 | Review Phase 3 money pages marked READY FOR REVIEW | Codex | DONE |  | Only banquet was actually handed off as `READY FOR REVIEW`. Codex reviewed banquet wiring, contrast, reduced-motion, and anchor behavior, and confirmed lint passes. At this point `next build` was blocked by unrelated missing files in the gallery and kitty routes |
| P4-90 | Review Phase 4 supporting pages marked READY FOR REVIEW | Codex | DONE |  | Reviewed the handed-off Phase 4 support pages, fixed gallery keyboard/lightbox behavior, map and contact wiring, and minor contrast and affordance issues. `npm run lint` passes, and `next build` is now blocked only by unrelated missing files in the locked kitty route |
| P5-90 | Review Phase 5 motion changes marked READY FOR REVIEW | Codex | DONE |  | Reviewed the shared motion layer plus the handed-off Phase 4 motion pages, removed reduced-motion regressions, trimmed one heavy scroll-tied hero effect, and confirmed `npm run lint` passes. `next build` remains blocked only by unrelated missing files in the locked kitty route |
| P7-90 | Phase 7 quality sweep across the full site | Codex | DONE |  | Fixed the crawlability and metadata baseline, restored a clean production build across all current routes, and logged the remaining manual QA and performance issues for Claude Code below |
| P1-01 | Setup fonts with next/font for Fraunces and Inter | Claude Code | DONE |  | Codex removed remote Google font dependency in review so local build and production build pass in this environment |
| P1-02 | Build Container layout component | Claude Code | DONE |  | Reviewed for responsive spacing and no blocking issues found |
| P1-03 | Build Logo component with Aagaaz branding | Claude Code | DONE |  | Reviewed; no structural issues, but keep gold wordmark to display-scale use where possible |
| P1-04 | Build Navbar with revenue pages prioritized | Claude Code | DONE |  | Codex added `aria-current` and moved small-text active and hover states off low-contrast gold |
| P1-05 | Build MobileNav sheet component | Claude Code | DONE |  | Codex added `aria-current` and adjusted active and hover text contrast |
| P1-06 | Build Footer with contact details and links | Claude Code | DONE |  | Codex improved interactive text contrast; note that `/privacy` and `/terms` still need real routes later |
| P1-07 | Build WhatsApp floating button | Claude Code | DONE |  | Codex fixed the `wa.me` phone format and aligned focus handling with `focus-visible` |
| P1-08 | Build PageLayout wrapper component | Claude Code | DONE |  | Reviewed with shell integration and no blocking issues found |
| P1-09 | Create component index files | Claude Code | DONE |  | Reviewed and import surface is clean |
| P1-10 | Update home page with shell integration | Claude Code | DONE |  | Codex improved metadata description and replaced low-contrast checklist text with semantic list content |

## Codex Notes For Claude Code

- Shared metadata plumbing is now in place through `lib/seo.js`. New pages can export `metadata = createPageMetadata({ title, description, path })`.
- I added a global `*:focus-visible` outline so keyboard focus is visible by default even before component-level polish.
- I removed `next/font/google` from the root layout because the build in this environment could not resolve `fonts.googleapis.com`. If the final design needs Fraunces and Inter specifically, self-host them in `public/fonts` or restore them in a networked environment.
- For body-size interactive text on light backgrounds, prefer `secondary` or `foreground` over the gold accent. The gold reads better as a brand/display color than as 14px navigation text.
- The shell review passed after technical fixes, but I did not run a true browser automation sweep because Playwright is not installed in this repo. The review here is build-backed and code-backed rather than screenshot-backed.
- Home page placeholders now reserve layout space responsively. When real photography replaces them, keep the hero as the only above-the-fold asset with eager loading or priority and keep lower sections lazy.
- Motion now respects reduced-motion across the reviewed home sections. If later work adds parallax, autoplay, or carousel motion, wire those through the same user preference instead of reintroducing always-on transforms.
- Keep real photo focal points centered high enough for 360px crops. The hero, story, and dining sections will need consistent crop direction once placeholder blocks are swapped out.
- `next build` is blocked today by unrelated locked work in `app/kitty-parties/page.js` that imports `KittyPackages`, `KittyGallery`, and `KittyEnquiry` before those files exist. I did not modify that Phase 3 area during the Phase 2 review.
- For the banquet page, enquiry and gallery anchors now account for the sticky header. Keep that pattern on future revenue pages so “Get Quote” and “View Gallery” jumps do not land underneath the navbar.
- Only the banquet page was ready for review in Phase 3. Kitty is still in progress and rooms are still TODO, so they were intentionally not reviewed.
- Phase 4 fixes cleared the gallery and contact-page build issues. The only remaining project-wide build blocker is the locked kitty route importing `KittyGallery` and `KittyEnquiry` before those files exist.
- The contact page now uses a lazy-loaded embedded map plus real Google Maps and Apple Maps destination links. Before launch, Claude should confirm the exact venue pin against the final business listing.
- Contact actions are now wired for phone, WhatsApp, email, and map navigation. I normalized the main email path to `info@aagaaz.in` to match the footer and banquet enquiry page rather than the earlier `.com` placeholder.
- Gallery cards are now keyboard-operable buttons, and the lightbox no longer triggers state updates during render. When real photography replaces placeholders, keep the current aspect-ratio reservation pattern to avoid layout shifts.
- The dining gallery and cuisine cards are still placeholder visuals, but they no longer imply clickability. Keep that restraint unless those cards become real links or lightbox triggers.
- Reduced-motion handling in the shared motion wrappers is now genuinely static: `ScrollReveal`, `StaggerContainer`, and `PageTransition` no longer hide content and wait for scroll when the user requests less motion.
- I removed the dining hero’s global scroll-linked parallax offset. It was the most likely source of avoidable mobile scroll stutter and did not justify the extra work on every scroll frame.
- A few badges and decorative dots still use ambient motion in the enhanced pages, but they now stop correctly under reduced-motion. If Claude adds more motion in Phase 5 follow-up, prefer transform/opacity only and avoid adding new blur, filter, or layout-driven animation.

## Phase 7 Quality Sweep

### Fixed By Codex
- Site-wide production build was broken by inconsistent shared exports and a few incorrect hook imports. I normalized `Container`, `PageLayout`, `CTABand`, the section barrel, the shared barrel, and the `useReducedMotion` imports so every current route now builds successfully.
- The site had no crawl files. I added [app/sitemap.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/sitemap.js:1) and [app/robots.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/robots.js:1).
- Social share previews were incomplete. I added generated preview image routes at [app/opengraph-image.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/opengraph-image.js:1) and [app/twitter-image.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/twitter-image.js:1), then wired the default image into shared metadata.
- Search metadata was too generic for a full-site sweep. I upgraded [lib/seo.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/lib/seo.js:1) with canonical URLs, keywords, robots directives, default social images, route inventory, and stronger business details.
- Search-friendly structured data was missing. I added Organization, LodgingBusiness, EventVenue, and Restaurant JSON-LD in [app/layout.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/layout.js:1).
- Footer legal links pointed to missing pages. I added [app/privacy/page.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/privacy/page.js:1) and [app/terms/page.js](/Users/aneeshthakral/Downloads/Projects.md/Aagaaz%20Web%20App/app/terms/page.js:1).
- Page titles and descriptions were normalized across the current route set, including the home, banquet, kitty, rooms, dining, experiences, gallery, story, and contact pages.

### Claude Code Must Fix
- Real browser QA is still outstanding. I could not complete a true Chrome, Safari, and Firefox pass or produce Lighthouse-style speed scores in this environment because there is no installed browser automation or performance tooling in the repo. Claude should run a real browser matrix on phone, tablet, and desktop before release.
- Several key routes are still heavy on first load JS even after the build is clean: `/banquet` is about 250 kB, `/kitty-parties` about 249 kB, `/contact` about 248 kB, and `/rooms` about 242 kB according to `next build`. Claude should reduce eager client-side code, especially large animated/form sections and noncritical below-the-fold bundles.
- The site still relies heavily on placeholder visuals across the home, rooms, kitty, gallery, story, and dining surfaces. This limits real-world speed scoring, weakens social previews, and makes final contrast/crop QA incomplete until production photography is in place.
- Hotel and business SEO is still content-limited by placeholder or provisional data. Room categories, package details, kitchen timings, and some venue specifics still need final confirmed copy before the metadata and schema can be considered release-grade.
- The new legal pages are functional placeholders to remove broken internal links, not final policy text. Claude should replace them with approved legal copy before launch.

## PHASE 2 - HOME PAGE SHOWPIECE (Claude Code)

| ID | Task | Owner | Status | Locked Files | Notes |
| --- | --- | --- | --- | --- | --- |
| P2-01 | Install Framer Motion for animations | Claude Code | DONE | `package.json` | Framer Motion installed successfully |
| P2-02 | Build cinematic hero section | Claude Code | DONE | `components/sections/HeroCinematic.jsx` | Cinematic hero with Framer Motion animations and "beginning" concept |
| P2-03 | Build offerings grid section | Claude Code | DONE | `components/sections/OfferingsGrid.jsx` | Three revenue streams with luxury cards and hover effects |
| P2-04 | Build story teaser section | Claude Code | DONE | `components/sections/StoryTeaser.jsx` | Story teaser with Aagaaz meaning and emotional connection |
| P2-05 | Build dining glimpse section | Claude Code | DONE | `components/sections/DiningGlimpse.jsx` | Fessta restaurant with multi-cuisine showcase |
| P2-06 | Build experiences strip section | Claude Code | DONE | `components/sections/ExperiencesStrip.jsx` | Corporate events and celebrations strip |
| P2-07 | Build testimonials section | Claude Code | DONE | `components/sections/TestimonialsCarousel.jsx` | Social proof with guest reviews and stats |
| P2-08 | Build closing CTA section | Claude Code | DONE | `components/sections/CTABand.jsx` | Final CTA with multiple contact options |
| P2-09 | Create home page with all sections | Claude Code | DONE |  | Reviewed composition and metadata wiring; build and lint pass |
| P2-10 | Add placeholder image system | Claude Code | DONE |  | Codex made placeholder blocks responsive and semantic so they do not force horizontal overflow on narrow viewports |
| P2-02 | Build cinematic hero section | Claude Code | DONE |  | Codex added reduced-motion handling and converted the discover affordance into a keyboard-accessible anchor link |
| P2-03 | Build offerings grid section | Claude Code | DONE |  | Codex added anchor target handling, reduced-motion support, and safer small-text contrast |
| P2-04 | Build story teaser section | Claude Code | DONE |  | Codex added reduced-motion handling and safer badge contrast |
| P2-05 | Build dining glimpse section | Claude Code | DONE |  | Codex added reduced-motion handling and safer orange badge and icon contrast |
| P2-06 | Build experiences strip section | Claude Code | DONE |  | Codex removed misleading pointer affordance from non-clickable cards and improved link and badge contrast |
| P2-07 | Build testimonials section | Claude Code | DONE |  | Codex added reduced-motion handling and improved role label contrast |
| P2-08 | Build closing CTA section | Claude Code | DONE |  | Codex added reduced-motion handling and improved dark-surface contact link contrast |
| P2-11 | Create sections index file | Claude Code | DONE |  | Reviewed and no issues found |

## PHASE 3 - REVENUE PAGES (Claude Code)

| ID | Task | Owner | Status | Locked Files | Notes |
| --- | --- | --- | --- | --- | --- |
| P3-01 | Build Banquet and Weddings page | Claude Code | DONE |  | Codex reviewed banquet page wiring and accessibility, added reduced-motion support, improved small-text contrast, removed misleading gallery pointer affordance, and confirmed lint passes |
| P3-02 | Build Kitty Parties page | Claude Code | IN PROGRESS | `app/kitty-parties/page.js` | Hero, packages, gallery, enquiry - Locked by Claude Code 2026-05-31 |
| P3-03 | Build Rooms page | Claude Code | TODO | `app/rooms/page.js` | Hero, room types, gallery, enquiry |

## PHASE 4 - SUPPORTING PAGES (Claude Code)

| ID | Task | Owner | Status | Locked Files | Notes |
| --- | --- | --- | --- | --- | --- |
## PHASE 5 - MOTION AND POLISH (Claude Code) - COMPLETED

| ID | Task | Owner | Status | Locked Files | Notes |
| --- | --- | --- | --- | --- | --- |
| P5-01 | Apply React Bits scroll reveals and motion polish | Claude Code | DONE | All Phase 4 supporting page components, `components/animations/MotionUtils.jsx`, `components/layout/PageLayout.jsx` | Codex reviewed the shared motion layer, made reduced-motion rendering fully static in the utility wrappers, and trimmed the heaviest scroll-tied hero motion to keep mobile smoother |

## PHASE 4 - SUPPORTING PAGES WITH MOTION ENHANCEMENT - READY FOR REVIEW

| P4-01 | Dining page with React Bits motion polish | Claude Code | DONE | `app/dining/page.js`, `components/sections/DiningHero.jsx`, `components/sections/CuisineCards.jsx`, `components/sections/MenuHighlights.jsx`, `components/sections/DiningGallery.jsx` | Codex removed the global scroll-linked parallax from the hero, stopped reduced-motion regressions in decorative animation, and kept the page motion visually stable without layout shifts |
| P4-02 | Experiences page with luxury motion | Claude Code | DONE | `app/experiences/page.js`, `components/sections/ExperiencesHero.jsx`, `components/sections/EventTypes.jsx`, `components/sections/CorporatePackages.jsx` | Codex reviewed the motion-enhanced experiences files; no blocking motion-performance issues were found in the handed-off set |
| P4-03 | Gallery page with sophisticated animations | Claude Code | DONE | `app/gallery/page.js`, `components/sections/GalleryHero.jsx`, `components/sections/GalleryGrid.jsx`, `components/shared/Lightbox.jsx` | Codex confirmed layout stability and reduced-motion handling after fixing shared motion wrappers, with gallery interaction still keyboard-safe and no new CLS risks introduced |
| P4-04 | Story page with heritage motion storytelling | Claude Code | DONE | `app/story/page.js`, `components/sections/StoryHero.jsx`, `components/sections/StoryContent.jsx`, `components/sections/StoryValues.jsx` | Codex kept the storytelling motion intact while removing reduced-motion fade/reveal leftovers and avoiding extra delayed animations in the static path |
| P4-05 | Contact page with enhanced interactivity | Claude Code | DONE | `app/contact/page.js`, `components/sections/ContactHero.jsx`, `components/sections/ContactInfo.jsx`, `components/sections/ContactForm.jsx`, `components/sections/ContactMap.jsx` | Codex preserved the enhanced contact interactions while ensuring the reduced-motion path does not hide content or keep unnecessary decorative animation running |

---

## CLAUDE CODE BUILD PLAN & COMPONENT ARCHITECTURE

### Core Business Facts (From aagaaz.in)
- **Location:** Pakhowal Road, Ludhiana
- **Rooms:** 44 guest rooms with modern amenities  
- **Banquet:** Nawaazissh Hall (50-180 seated guests)
- **Kitty:** Ba-Dastoorr & Shafaq Halls (2 separate halls)
- **Dining:** Fessta Restaurant (Indian, Italian, Oriental, Continental)
- **Contact:** +91-9592099941, WhatsApp +91-6239503191

### PHASE 1 - Foundation Shell (Next Priority)
| ID | Component | File Path | Description | Dependencies |
| --- | --- | --- | --- | --- |
| P1-01 | Container | `components/layout/Container.jsx` | Max-width container with responsive padding | - |
| P1-02 | Navbar | `components/layout/Navbar.jsx` | Desktop nav with revenue items first + Enquire CTA | Container |
| P1-03 | MobileNav | `components/layout/MobileNav.jsx` | Sheet-based mobile navigation | shadcn/sheet |
| P1-04 | Footer | `components/layout/Footer.jsx` | Contact details, links, brand info | Container |
| P1-05 | WhatsAppFloat | `components/shared/WhatsAppFloat.jsx` | Persistent floating WhatsApp button | - |
| P1-06 | Logo | `components/shared/Logo.jsx` | Aagaaz logo component | - |

### PHASE 2 - Home Page Architecture
| ID | Component | File Path | Description | Key Features |
| --- | --- | --- | --- | --- |
| P2-01 | HeroCinematic | `components/sections/HeroCinematic.jsx` | Full-viewport hero with Aagaaz meaning | Background video/image, centered content |
| P2-02 | OfferingsGrid | `components/sections/OfferingsGrid.jsx` | Three revenue cards: Banquet, Kitty, Rooms | 3-column grid, strong CTAs |
| P2-03 | StoryTeaser | `components/sections/StoryTeaser.jsx` | Brief Aagaaz story section | Image + text layout |
| P2-04 | DiningGlimpse | `components/sections/DiningGlimpse.jsx` | Fessta restaurant showcase | Cuisine highlights |
| P2-05 | ExperiencesStrip | `components/sections/ExperiencesStrip.jsx` | Corporate events, celebrations strip | Horizontal scroll cards |
| P2-06 | TestimonialsCarousel | `components/sections/TestimonialsCarousel.jsx` | Social proof carousel | shadcn/carousel |
| P2-07 | CTABand | `components/sections/CTABand.jsx` | Closing CTA section | Enquiry form integration |

### PHASE 3 - Revenue Pages (Priority Order)
#### Banquet Page (`app/banquet/page.js`)
| ID | Component | Description | Business Context |
| --- | --- | --- | --- |
| P3-01 | BanquetHero | Full-bleed Nawaazissh Hall image | "Where celebrations begin" |
| P3-02 | CapacitySpecs | 50-180 seated capacity details | Flexible layout options |
| P3-03 | BanquetGallery | High-quality event photos | Weddings, anniversaries setup |
| P3-04 | PackageTiers | Wedding/event package options | TBD: Need package details |
| P3-05 | EnquiryBlock | Dedicated banquet enquiry form | WhatsApp integration |

#### Kitty Parties Page (`app/kitty-parties/page.js`)
| ID | Component | Description | Business Context |
| --- | --- | --- | --- |
| P3-06 | KittyHero | Ba-Dastoorr & Shafaq halls showcase | Two halls available |
| P3-07 | ThemedPackages | Kitty party theme options | TBD: Need package themes |
| P3-08 | KittyInclusions | What packages include | Food, decor, entertainment |
| P3-09 | KittyGallery | Kitty party setup photos | Ladies' celebrations |
| P3-10 | KittyEnquiry | Kitty-specific enquiry form | Date availability check |

#### Rooms Page (`app/rooms/page.js`)
| ID | Component | Description | Business Context |
| --- | --- | --- | --- |
| P3-11 | RoomsHero | Luxury room showcase | 44 rooms available |
| P3-12 | RoomTypes | Room category cards | TBD: Need room categorization |
| P3-13 | AmenitiesGrid | Room amenities display | LCD TV, safe, minibar, etc. |
| P3-14 | RoomGallery | Room interior photography | Comfort and luxury focus |
| P3-15 | RoomEnquiry | Accommodation enquiry form | Date range selection |

### PHASE 4 - Supporting Pages
#### Dining Page (`app/dining/page.js`)
| ID | Component | Description |
| --- | --- | --- |
| P4-01 | DiningHero | Fessta Restaurant showcase |
| P4-02 | CuisineCards | Indian, Italian, Oriental, Continental |
| P4-03 | MenuHighlights | Sample dishes and specialties |
| P4-04 | DiningGallery | Food and restaurant ambiance |

#### Other Supporting Pages
- `app/experiences/page.js` - Corporate events, celebrations
- `app/gallery/page.js` - Full photo gallery with categories  
- `app/story/page.js` - Aagaaz meaning and venue story
- `app/contact/page.js` - Map, contact details, enquiry form

### PHASE 5 - Shared UI Components
| Component | File Path | Description |
| --- | --- | --- |
| EnquiryForm | `components/shared/EnquiryForm.jsx` | Reusable enquiry form |
| ImageCard | `components/shared/ImageCard.jsx` | Consistent image cards |
| SectionHeader | `components/shared/SectionHeader.jsx` | Section title + subtitle |
| CallToAction | `components/shared/CallToAction.jsx` | Consistent CTA buttons |
| TestimonialCard | `components/shared/TestimonialCard.jsx` | Review/testimonial display |

### PHASE 6 - Animation Integration (React Bits + Framer Motion)
| Feature | Implementation | Motion Type |
| --- | --- | --- |
| Hero Text Reveals | React Bits WordPullUp | Gentle stagger |
| Scroll Animations | Framer Motion + useInView | Fade-up reveals |
| Image Parallax | Transform on scroll | Subtle background drift |
| Hover States | Scale + shadow transitions | Luxury lift effect |
| Page Transitions | Framer Motion variants | Smooth crossfades |

### Content Strategy
- **Copy Voice:** Plain, warm, human (no em dashes, no buzzwords)
- **Photography:** Golden hour, spacious, people enjoying celebrations
- **CTAs:** Simple, clear actions - "Plan Your Celebration", "Check Availability"
- **Forms:** Single column, generous spacing, clear validation

### Business Data Gaps (For User/Mentor)
1. **Room Categories:** Need breakdown of 44 rooms (Deluxe, Suite, etc.)
2. **Package Details:** Banquet and kitty party package tiers and pricing
3. **Kitchen Timings:** Restaurant hours and service times  
4. **Themed Options:** Specific kitty party themes available
5. **Photography:** High-res photos needed for all sections

### Technical Implementation Notes
- **Fonts:** Fraunces (display) + Inter (body) via next/font
- **Forms:** Web3Forms for enquiries, WhatsApp fallback  
- **Images:** Next.js Image with proper optimization
- **SEO:** Page metadata for banquet/kitty/room searches in Ludhiana
- **Performance:** Lazy loading below fold, image optimization

This architecture creates a luxury hospitality website that puts the three revenue streams (banquet, kitty, rooms) front and center while maintaining the calm, cinematic feeling of the Suryagarh benchmark.

## PHASE 6 - ENQUIRY FORMS AND LEAD CAPTURE (Claude Code)

| ID | Task | Owner | Status | Locked Files | Notes |
| --- | --- | --- | --- | --- | --- |
| P6-01 | Build shared EnquiryForm base component | Claude Code | READY FOR REVIEW | `components/shared/EnquiryForm.jsx` | Luxury form with sophisticated validation, animations, success/error states using frontend-design skill approach |
| P6-02 | Build banquet-specific enquiry form | Claude Code | READY FOR REVIEW | `components/shared/BanquetEnquiry.jsx` | Wedding/event specific fields with full and compact variants |
| P6-03 | Build kitty parties enquiry form | Claude Code | READY FOR REVIEW | `components/shared/KittyEnquiry.jsx` | Kitty party specific fields with theme selection and compact variant |
| P6-04 | Build rooms enquiry form | Claude Code | READY FOR REVIEW | `components/shared/RoomsEnquiry.jsx` | Accommodation specific fields with date validation and compact variant |
| P6-05 | Build general contact enquiry form | Claude Code | READY FOR REVIEW | `components/shared/GeneralEnquiry.jsx` | General contact form with priority levels and quick variant |
| P6-06 | Build contact action buttons (WhatsApp, phone) | Claude Code | READY FOR REVIEW | `components/shared/ContactActions.jsx` | Prominent WhatsApp and phone buttons with multiple layouts - uses placeholder numbers |
| P6-07 | Build "also listed on" booking platforms row | Claude Code | READY FOR REVIEW | `components/shared/BookingPlatforms.jsx` | Links to Booking.com, MakeMyTrip, Goibibo with multiple display variants - uses placeholder URLs |
| P6-08 | Create form validation utilities | Claude Code | READY FOR REVIEW | `lib/formValidation.js` | Comprehensive validation helpers, rules, error messages for all form types |
| P6-09 | Integrate enquiry forms across revenue pages | Claude Code | READY FOR REVIEW | `app/banquet/page.js`, `app/kitty-parties/page.js`, `app/rooms/page.js`, `app/contact/page.js` | Integrated forms into all revenue pages, fixed kitty build blocker, created full rooms page |

### PHASE 6 COMPLETION NOTES

**Forms Built:**
- **EnquiryForm**: Base luxury form component with Framer Motion animations, sophisticated validation, success/error states
- **BanquetEnquiry**: Wedding/event form with 11 fields including event type, guest count, menu preferences, decoration, budget
- **KittyEnquiry**: Kitty party form with 11 fields including theme selection, hall preference, entertainment options
- **RoomsEnquiry**: Accommodation form with 10 fields including check-in/out dates, room preferences, meal plans
- **GeneralEnquiry**: Contact form with 9 fields including enquiry type, priority level, preferred contact method

**Contact Actions:**
- **ContactActions**: WhatsApp and phone buttons with horizontal/vertical layouts, hover effects
- **QuickContactBar**: Centered contact actions for page sections
- **ContactActionsCompact**: Inline contact options

**Booking Platform Links:**
- **BookingPlatforms**: Cards linking to Booking.com, MakeMyTrip, Goibibo with brand colors
- **BookingPlatformsCompact**: Smaller version for tight spaces
- **BookingPlatformsInline**: Text links for subtle integration

**Technical Features:**
- Comprehensive field validation with real-time error checking
- Phone number formatting and date range validation
- Success/error states with custom animations
- Responsive design with luxury aesthetic using Aagaaz design tokens
- Integration with existing design system (gold accents, Fraunces/Inter fonts)
- Placeholder contact details and booking platform URLs for easy replacement

**Integration Completed:**
- Updated banquet page to use shared BanquetEnquiry
- Fixed kitty parties page build blocker and integrated KittyEnquiry 
- Created complete rooms page with RoomsEnquiry integration
- Updated contact page to use GeneralEnquiry
- All forms include WhatsApp/phone buttons and booking platform links as requested

**Ready for Real Data:**
- All forms use clearly marked placeholder contact numbers and booking URLs
- Validation is production-ready
- Form submission endpoints ready for Web3Forms or custom backend integration
