# Custom Web Development — Pricing Strategy & Framing
> Drafted by Russel (Virtual CEO) — Feb 19, 2026
> Status: APPROVED FOR IMPLEMENTATION
> File: `src/app/custom/page.tsx`

---

## Strategic Context

### Who Is This Page For?
The /custom page serves clients who have **outgrown a microsite** — established businesses needing:
- Multi-page with CMS (team can update content)
- Complex features (booking, e-commerce, member portal)
- Platform-level infrastructure (multiple integrations, API-heavy)
- Full WP admin + custom frontend

These are clients doing Rp 2B–50B+/year in revenue. Budget for tech investment: Rp 50–200M is realistic and expected.

### Why Current Pricing Fails
1. **Range pricing** destroys trust in premium markets. "Rp 15–25 jt" says: *"We don't know what we're worth."* Fixed prices say: *"We know exactly what we deliver."*
2. **Inconsistent ladder**: With Authority microsite at Rp 45M (new), having Custom WP Lite at Rp 15–25M makes no sense — clients question why the "basic custom" is cheaper than the "premium managed" service.
3. **Tier names are generic**: "Lite / Basic / Pro" — same as every Hostinger plan. Kills premium perception.
4. **"jt" formatting** (Indonesian slang) scattered throughout — inconsistent with English-first positioning.
5. **Hosting Estimates section**: Showing Rp 1–3M/year hosting cost destroys the "premium partner" framing. It makes clients think: *"If hosting is Rp 2M, why am I paying Rp 30M for this?"*

---

## New Custom Pricing Architecture

### Positioning Statement (for developer context)
Custom Web is positioned as:
> *"For businesses where a managed microsite is the floor — not the ceiling. When your operations need a real platform, not just a presence."*

### Option 1: Custom WordPress — New Tiers

| Tier | Old Name | New Name | Old Price | New Price | Timeline | Maintenance |
|------|----------|----------|-----------|-----------|----------|-------------|
| Entry | Lite | **Catalyst** | Rp 15–25 jt | **Rp 35,000,000** | 2–3 weeks | 3 months |
| Mid | Basic | **Architect** | Rp 30–45 jt | **Rp 65,000,000** | 3–4 weeks | 6 months |
| Top | Pro | **Sovereign** | Rp 50–70 jt | **Rp 115,000,000** | 4–5 weeks | 6 months + |

> **Note:** "Sovereign" at the top of WP mirrors the naming language of the main site tiers — signals the quality equivalence.

### Option 2: Headless WP + Next.js — New Tiers

| Tier | Old Name | New Name | Old Price | New Price | Timeline | Maintenance |
|------|----------|----------|-----------|-----------|----------|-------------|
| Entry | Lite | **Catalyst** | Rp 25–35 jt | **Rp 55,000,000** | 3 weeks | 3 months |
| Mid | Basic | **Architect** | Rp 45–60 jt | **Rp 95,000,000** | 4 weeks | 6 months |
| Top | Pro | **Sovereign** | Rp 70–90 jt | **Rp 175,000,000** | 5–6 weeks | 6 months + |

### Cross-Service Ladder (Full Picture)

This is how the complete Karya Kilat pricing ladder should read in a prospect's mind:

```
Managed Microsite — Signature:     Rp  9,750,000   (entry presence)
Managed Microsite — Sovereign:     Rp 22,500,000   (full managed command center)
Managed Microsite — Authority:     Rp 45,000,000   (ongoing digital partnership)
──────────────────────────────────────────────────
Custom WP — Catalyst:              Rp  35,000,000   (platform entry, client-managed)
Custom WP — Architect:             Rp  65,000,000   (multi-feature, full custom)
Custom WP — Sovereign:             Rp 115,000,000   (enterprise-grade WP)
──────────────────────────────────────────────────
Headless Next.js — Catalyst:       Rp  55,000,000   (modern SSG, WP backend)
Headless Next.js — Architect:      Rp  95,000,000   (ISR, advanced SEO, full stack)
Headless Next.js — Sovereign:      Rp 175,000,000   (elite platform, Vercel-grade)
```

The ladder is logical. Each step up has a clear reason to exist.

---

## Copy Updates Required

### 1. Hero Section — Hero Pill Badge
```
Change: "Premium Tech Partner"
To: "Bespoke Digital Engineering"
```

### 2. Hero Section — Headline (keep existing, good)
```
Custom Premium Web Development  ← keep
```

### 3. Hero Section — Subheadline (replace)
```
Old: "A fast, secure, fully custom website — no bloated plugins, no compromises..."
New: "Beyond a microsite, we engineer full-scale digital platforms — custom-built, future-proof, and backed by professional maintenance. When your business needs infrastructure, not just presence."
```

### 4. Hero — Supporting Line (replace)
```
Old: "Choose Custom WordPress (fast, familiar, easy to manage) or Headless WP + Next.js (ultra-fast, modern, premium)"
New: "Two tracks: Custom WordPress for ease and familiarity. Headless Next.js + WP for elite performance and modern architecture. Both built to last."
```

### 5. PricingWP Section — Subtitle
```
Old: "A step above standard WordPress: fully custom theme, fast, secure, and built to impress."
New: "Professional-grade WordPress — purpose-built, not templated. Every installation is architected from scratch for your business logic."
```

### 6. PricingHeadless Section — Subtitle
```
Old: "Ultra-fast SSR/SSG, modern React, deployed on Vercel..."
New: "The engineering choice for businesses that demand elite performance. WordPress handles your content; Next.js delivers it at Lighthouse 100 speed."
```

### 7. Tier — Catalyst (both WP and Headless)
**WP Catalyst description (add to tier data):**
> *Company profile platform. 5–10 custom pages, WP CMS admin, mobile-first, and built to make your team self-sufficient.*

**Headless Catalyst description:**
> *Modern SSG architecture. WP backend your team knows, Next.js frontend your clients experience at elite speed.*

### 8. Tier — Architect (both WP and Headless)
**WP Architect description:**
> *Multi-feature command platform. Booking, forms, advanced integrations, and CMS your team can own — no developer dependency after handover.*

**Headless Architect description:**
> *Dynamic ISR with real-time content. Full WP admin + Next.js frontend with advanced SEO infrastructure and performance tuning.*

### 9. Tier — Sovereign (both WP and Headless)
**WP Sovereign description:**
> *Enterprise-grade WordPress. Complex custom features, performance hardening, unlimited revision cycles, and a dedicated 6-month support line.*

**Headless Sovereign description:**
> *Your flagship digital platform. Custom optimizations, full Vercel setup, elite Lighthouse scores, and a handover that makes your team fully independent.*

### 10. CoreValue Section (replace entire copy)
```
title: "Why Karya Kilat for Custom Development?"
subtitle: "Precision engineering. No agency bloat."

Copy:
"Custom web development shouldn't take 6 months and feel like a black box.
We run tight, transparent builds — weekly check-ins, staging previews at each phase,
and a handover that actually makes sense. 15+ years of engineering. Zero tolerance for tech debt."
```

---

## Section: Remove / Replace HostingEstimates

**Remove the `HostingEstimates` section entirely** from the page and from the component imports.

**Rationale:** Showing Rp 1–3M/year hosting costs in the context of a Rp 35–175M project destroys premium perception. It prompts clients to think about running costs, not value. If they ask about hosting, we handle it in the WhatsApp conversation.

**Replace with:** A simple one-line note in the `InclusionsSection`:
```
"Domain & hosting setup: we recommend and configure — you own it. Costs vary by scale."
```

Remove: `<HostingEstimates />` from `CustomPage()` render.

---

## Pricing Display Format — Fix "jt" → Proper Format

All price strings must use `Rp X,000,000` format. No "jt", no "juta". This applies to:

**wpTiers data:**
```js
// Catalyst
price: "Rp 35,000,000"

// Architect
price: "Rp 65,000,000"

// Sovereign
price: "Rp 115,000,000"
```

**headlessTiers data:**
```js
// Catalyst
price: "Rp 55,000,000"

// Architect
price: "Rp 95,000,000"

// Sovereign
price: "Rp 175,000,000"
```

---

## Tier Card — Visual Update (pricing.tsx TierCard component)

Add a `description` field to the tier data structure and render it below the price in the `TierCard` component:

```tsx
// Add to tier data type:
description?: string;

// Render in TierCard, below price block:
{tier.description && (
  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
    {tier.description}
  </p>
)}
```

---

## config.tsx — Update whatsappCustom Link

```typescript
// Old:
whatsappCustom: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Custom%20Premium%20Web%20Development%20Karya%20Kilat.%20Bisnis%20saya%3A%20"

// New (update price reference):
whatsappCustom: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20Custom%20Web%20Development%20dari%20Karya%20Kilat%20(mulai%20Rp%2035jt).%20Bisnis%20saya%3A%20"
```

---

## CTA Section — Update Subtitle

```
Old: "Build Your Premium Website Today"
New: "Tell us your vision. We'll tell you the right track and timeline."
```

---

## Custom Banner (Homepage) — Update Starting Price

In `src/components/sections/custom-banner.tsx`:

```
Old: Starting from <span>Rp 15 juta</span>
New: Starting from <span>Rp 35,000,000</span>
```

---

## What NOT to Change
- Overall two-option structure (WP vs Headless) — keep it, it's a useful differentiator
- ComparisonSection (WP vs Headless table) — solid, keep as-is
- InclusionsSection structure — keep, just add hosting note tweak
- Steps in CustomCTA (3-step process) — keep
- Hero CTAs ("Talk to Us Now" + "See Packages") — keep
- Tech stack choice (WP + Headless Next.js) — this is the actual tech expertise, keep accurate

---

## Summary of All Changes

| File | What Changes |
|------|-------------|
| `src/app/custom/page.tsx` | Tier names, all prices (fixed format), descriptions, hero copy, CoreValue copy, CTA subtitle, remove HostingEstimates import + render, add description field to TierCard |
| `src/lib/config.tsx` | Update `whatsappCustom` link |
| `src/components/sections/custom-banner.tsx` | "Rp 15 juta" → "Rp 35,000,000" |
