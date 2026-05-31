# Aagaaz Design System

A heritage-grade design system for Aagaaz celebration venue, inspired by the Suryagarh quality benchmark while staying fully original.

## Brand Identity

**Meaning:** Aagaaz means "a beginning, a dawn, a commencement" — perfect for a celebrations venue where every booking marks the start of something special.

**Feeling:** Warm, regal, cinematic, grand but welcoming. Every design decision should feel like the building exhaling.

---

## Color System

### Primary Palette
Extracted from the Aagaaz logo and built for luxury hospitality:

```css
/* Primary Brand Colors - Extracted from logo */
--aagaaz-gold: #C9A961;          /* Main gold from logo */
--aagaaz-gold-light: #E8D4A0;    /* Lighter gold for hover */
--aagaaz-gold-dark: #A08840;     /* Darker gold for active states */

/* Base Colors - Cinematic foundation */
--midnight: #1a1a1a;             /* Deep ink for dramatic sections */
--charcoal: #2d2d2d;             /* Secondary dark */
--cream: #faf8f5;                /* Warm ivory for content surfaces */
--pearl: #f5f3f0;                /* Softer cream for backgrounds */
--white: #ffffff;                /* Pure white for contrast */

/* Supporting Colors - Warm palette */
--wine: #722f37;                 /* Deep wine for secondary accents */
--wine-light: #8b3a42;           /* Lighter wine for subtle elements */
--amber: #d4915d;                /* Dawn amber for warm highlights */
```

### Semantic Tokens (Never use hex directly)

```css
/* Backgrounds */
--background: var(--cream);
--background-dark: var(--midnight);
--surface: var(--white);
--surface-subtle: var(--pearl);

/* Text */
--text: var(--charcoal);
--text-light: #666666;
--text-inverse: var(--cream);

/* Brand Accents */
--accent: var(--aagaaz-gold);
--accent-hover: var(--aagaaz-gold-light);
--accent-active: var(--aagaaz-gold-dark);
--accent-foreground: var(--midnight);

/* Secondary */
--secondary: var(--wine);
--secondary-light: var(--wine-light);

/* Borders */
--border: #e5e1dc;
--border-subtle: #f0ede8;
```

---

## Typography System

**Display:** Fraunces (high-contrast serif for elegance)
**Body:** Inter (clean humanist sans for readability)

### Type Scale

```css
/* Display - For heroes and major titles */
--text-display-2xl: clamp(3.5rem, 8vw, 7rem);
--text-display-xl: clamp(2.75rem, 6vw, 4.5rem);
--text-display-lg: clamp(2.25rem, 5vw, 3.75rem);

/* Headings */
--text-4xl: clamp(2rem, 4vw, 2.5rem);
--text-3xl: clamp(1.75rem, 3vw, 2rem);
--text-2xl: clamp(1.5rem, 2.5vw, 1.75rem);
--text-xl: 1.25rem;

/* Body */
--text-lg: 1.125rem;
--text-base: 1rem;
--text-sm: 0.875rem;
```

---

## Spacing System (4px base)

```css
/* Core spacing scale */
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */

/* Semantic spacing */
--section-padding-y: var(--space-24);
--section-padding-x: var(--space-6);
--container-padding: var(--space-6);
```

---

## Motion Language

### Easing & Timing

```css
/* Slow, settled, expensive feeling */
--ease-gentle: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-enter: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-exit: cubic-bezier(0.55, 0.055, 0.675, 0.19);

--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-glacial: 800ms;
```

### Animation Principles
- Respect `prefers-reduced-motion`
- Feel settled, not excited
- Gentle scroll reveals (fade-up)
- Subtle parallax sparingly
- Ken Burns effect on hero images

---

## Layout Guidelines

### Breakpoints
```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

### Container
- Max-width: 1400px (generous for luxury)
- Mobile-first responsive
- Generous breathing room always

---

## Component Patterns

### Heroes
- Full viewport height on key pages
- High-quality photography background
- Centered content with overlay gradients
- Single CTA maximum

### Cards
- 8px border radius for warmth
- Gentle shadows and hover states
- 3:2 landscape, 4:5 portrait ratios

### Forms
- 48px minimum input height
- Single column on mobile
- Clear validation with color + text + icon

### Buttons
- **Primary:** Gold background, dark text
- **Secondary:** Wine outline, wine text
- **Tertiary:** Text-only with gold accent
- 44px minimum touch target

---

## Voice Guidelines

**Plain, warm, human.** No em dashes, no semicolons, no buzzwords.

✗ "Leverage our state-of-the-art facilities"
✓ "Your celebration deserves a beautiful beginning"

---

## Photography Standards

Every image should feel:
- Professional and warm (golden hour lighting)
- Spacious (emphasizing grandeur)
- Human (people enjoying the space)
- Authentic (real moments, not overly posed)

**Specs:**
- Heroes: 1920x1080 minimum
- Cards: 800x533 (3:2 ratio)
- Gallery: 1200x800 minimum

---

This system creates the foundation for a luxury hospitality website that honors the Aagaaz brand while feeling unmistakably premium.