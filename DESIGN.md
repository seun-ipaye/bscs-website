# DESIGN.md — Black Students in Computer Science (BSCS), University of Windsor

Site: uwinbscs.ca
Tagline direction: A community for Black students in computer science at UWindsor — real people, real careers, real community.

---

## 1. Visual Theme & Atmosphere

Dark, editorial, and grounded — a near-black navy canvas that photography and one warm accent color light up against. The site should feel like a credible, established organization (think ColorStack, or UWindsor's own Computer Science Society site) rather than a hackathon flyer or a generic AI-generated SaaS template.

Mood in three words: **alive, credible, unhurried.**

The homepage's job is singular: get the visitor to picture themselves in this community and click through into the Discord. Everything before that CTA should build trust (real photos, real events, real outcomes); everything after it (About, Events, Highlights) can be scrolled into, CSS-society-style, rather than gated behind a splash screen.

Reference points:
- **css.uwindsor.ca** — structure: bold hero with a single primary CTA (their Discord), then scroll into About/Learn-Code-Connect-Enjoy sections, Events, Highlights. Borrow this shape directly.
- **colorstack.org** — real member photography over stock or illustration, testimonial-driven social proof, "this org gets people hired" credibility.
- **seun.ink** — the confidence of a single, deliberate first move rather than a cluttered hero.
- **Airbnb / Linear (discipline only, not their colors)** — one accent color, used consistently, everywhere else achromatic.

---

## 2. Color Palette & Roles

One accent color. Everywhere else is navy, slate, paper, and muted gray. No exceptions, no per-section accent variants.

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0F1420` | Primary page background (dark sections) |
| `--slate` | `#1B2436` | Surface: cards, nav bar, footer, section dividers |
| `--paper` | `#F4F1EA` | Light-section background; primary text color on dark backgrounds |
| `--accent` | `#C97A3D` | The *only* chromatic color — CTA buttons ("Join our Discord" / "Enter"), active nav state, link hover, underline accents, small icon highlights |
| `--muted` | `#9AA3B5` | Secondary text, captions, metadata, timestamps on dark backgrounds |
| `--muted-on-light` | `#6B6558` | Secondary text on paper/light backgrounds |
| `--border` | `rgba(244,241,234,0.08)` | Hairline dividers on dark surfaces — Linear-style, barely visible, structure without noise |

Rule of thumb: if more than ~10% of a given viewport is amber, pull back. Amber marks the one action you want taken on that screen — it should never compete with itself.

---

## 3. Typography Rules

- **Primary typeface:** Inter (or Geist as an alternative) — a clean geometric sans. No serif, no display/script fonts. This is a tech-community site; type should feel engineered, not decorative.
- **Headline weight:** 600–700, with modest negative letter-spacing at large sizes (-0.02em at 48px+) for a tighter, more confident feel — borrowed from Linear/Stripe's discipline, not their color.
- **Body weight:** 400, generous line-height (1.5–1.6) for readability against the dark background.
- **Scale (suggested):**
  - Display / hero H1: 56–72px
  - H2 (section headers): 36–40px
  - H3 (card/subsection titles): 22–24px
  - Body: 16–18px
  - Caption/meta: 13–14px, `--muted`
- Numerals: tabular figures for any stats (member counts, event counts) so they don't jitter when animated/counted up.

---

## 4. Component Stylings

**Buttons**
- Primary (amber fill, `--ink` or white text): used for the single primary action per screen — "Join our Discord," "Become a Member," etc.
- Secondary (outline, 1px `--border`, `--paper` text): everything else.
- Radius: 4–6px. Never pill-shaped, never 16px+.
- No shadow on default state. On hover: slight brightness shift on the fill, not a glow or lift.

**Cards** (events, highlights, member spotlights)
- `--slate` surface on `--ink` background, 1px `--border` outline, 6–8px radius.
- No drop shadow. Separation comes from the surface color change and the hairline border, not elevation effects.
- Photography inside cards is full-bleed to the card edge (no padding around images) — text/metadata sits below or overlaid with a solid (not gradient) scrim if needed for contrast.

**Nav bar**
- `--slate` background, sticky, hairline bottom border.
- Active link: `--accent` underline, 2px, no background pill.

**Forms/inputs**
- Flat, `--slate` fill, 1px `--border`, `--accent` on focus (border color change only — no glow ring).

---

## 5. Layout Principles

- Generous whitespace between sections (96–128px vertical rhythm on desktop) — let photography and content breathe rather than packing the page.
- Max content width ~1200px, centered, with real gutters (24px+ desktop, 16px mobile).
- Grid-based, not free-floating cards at random offsets — precision over "playful" asymmetry.
- Photography is a first-class layout element, not a decorative afterthought: full-bleed hero image or image grid, not small thumbnails boxed into a template.

---

## 6. Depth & Elevation

**No soft shadows, no glow, no blur, no glassmorphism, no gradients — anywhere.** This is the single most important constraint on this file.

Depth is created only by:
1. Surface color contrast (`--ink` vs `--slate` vs `--paper`)
2. Hairline borders (`--border`, 1px, low-opacity)
3. Photography and real contrast between image and flat color

If a design needs "more depth," add a photo or increase surface contrast — never add a shadow or gradient.

---

## 7. Do's and Don'ts

**Do:**
- Use real BSCS photography — event photos, member portraits — as the primary visual language, full-bleed and unfiltered (no heavy color grading/duotone).
- Keep every screen to one clear next action, amber-colored.
- Let sections breathe; whitespace is a feature.
- Borrow structure from css.uwindsor.ca (hero → CTA → scroll into About/Events/Highlights) and credibility cues from colorstack.org (testimonials, real outcomes, partner/sponsor logos if applicable).

**Don't:**
- No purple/indigo accent color, in any shade — it reads as generic AI-tool default at this point, not as BSCS.
- No gradients (backgrounds, buttons, text, mesh, or otherwise).
- No glow, blur, or soft drop-shadows on any element.
- No glassmorphism / frosted-glass panels.
- No default 16–24px "AI card" corner radius — cap at 6–8px.
- No stock photography or illustrated avatars in place of real member photos.
- No more than one accent color per screen, ever.

---

## 8. Responsive Behavior

- Breakpoints: mobile (<640px), tablet (640–1024px), desktop (1024px+).
- Hero CTA stays above the fold on all breakpoints — it's the single most important element on the page.
- Photography grids collapse from multi-column to single-column stacks on mobile, not cropped/squeezed.
- Nav collapses to a simple hamburger/drawer on mobile using `--slate`, not an overlay with blur.
- Touch targets 44px minimum on all interactive elements.

---

## 9. Agent Prompt Guide

Quick reference for prompting an agent to build against this file:

> Build [section] for the BSCS website following DESIGN.md. Dark navy (`#0F1420`) background, `#1B2436` surfaces, `#C97A3D` as the only accent color — use it for the single primary CTA only. Flat design: no gradients, no shadows, no glow, no glassmorphism, max 6-8px border radius. Real photography full-bleed, no stock images. Inter typeface, tight letter-spacing on headlines. Structure inspired by css.uwindsor.ca — bold hero with one CTA, then scroll into content sections.

Color quick-reference for prompts:
- Background: `#0F1420`
- Surface: `#1B2436`
- Light/paper: `#F4F1EA`
- Accent (CTAs only): `#C97A3D`
- Muted text: `#9AA3B5`
