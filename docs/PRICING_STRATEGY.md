# Pricing Strategy & Framing — Karya Kilat
> Drafted by Russel (Virtual CEO) — Feb 19, 2026
> Status: APPROVED FOR IMPLEMENTATION

---

## Strategic Rationale

### The Problem with Current Pricing
Current entry price (Rp 4.95M) sits in **freelancer territory** in the minds of the BSD/Gading Serpong target market. These are business owners doing Rp 500M–50B/year in revenue. Their reference points:

- Premium branding package: Rp 25–80M
- Interior design consultation: Rp 15–50M
- Brand photoshoot session: Rp 5–15M

At Rp 4.95M, the prospect's instinct: *"This is too cheap — there must be a catch."*

**In prestige markets, low price actively destroys trust.**

### The Fix: Price as a Signal of Quality
New pricing must:
1. Clear the "freelancer threshold" (minimum Rp 9M+ entry point)
2. Use dramatic tier gaps to anchor the mid-tier as the "rational choice"
3. Show "future pricing" alongside founding rates to create real urgency
4. Align price with the "Digital Business Manager" positioning — not a website vendor

---

## New Pricing Architecture

### Founding Rate → Future Rate (Post April 2026)

| Tier | Founding Rate | Future Rate | Change |
|------|--------------|-------------|--------|
| **Signature** | Rp 9,750,000 | Rp 15,000,000 | +54% |
| **Sovereign** | Rp 22,500,000 | Rp 35,000,000 | +56% |
| **Authority** | Rp 45,000,000 | Rp 65,000,000 | +44% |

**Custom Web Development:** Starting from Rp 25,000,000 (update from Rp 15,000,000)

### Psychological Reasoning
- **Signature at Rp 9.75M** — "Under Rp 10 million" is a real anchor. Prospect thinks: *"Almost Rp 10M, but not quite — good deal."*
- **Sovereign at Rp 22.5M** — 2.3x Signature. The gap signals a genuine upgrade, not a marginal difference. This is the conversion target tier.
- **Authority at Rp 45M** — The anchor. Makes Sovereign feel like the smart, rational choice. Also sends the signal: *"These people charge serious money — they must be serious."*
- **Tier ratio ~2.3x** between each level — consistent, premium, intentional.

---

## Copy Updates Required

### 1. Pricing Section — Title & Subtitle
```
title: "Invest in Your Digital Authority"
subtitle: "Three levels of Digital Business Management — each engineered for business leaders in BSD & Gading Serpong"
```

### 2. Founding Client Badge (replace current badge)
```
"⚡ Founding Partner Program — Feb–Apr 2026 Only"
```

### 3. Below Badge — Urgency Copy (replace current)
```
"Founding rates are the only rates we'll ever offer at this level.
After the program closes, prices increase permanently. Lock yours in now."
```

### 4. Tier — Signature
- **Name:** Signature (keep)
- **Price:** Rp 9,750,000
- **Period:** `Founding Rate · Regular: Rp 15,000,000`
- **Description (replace):**
  > *Your professional digital front door. Built to convert cold browsers into warm WhatsApp conversations — from day one.*
- **Features (keep existing, add):**
  - "WhatsApp lead capture system"
  - Remove: "Training walkthrough" → replace with "Handover walkthrough + 30-min strategy call"

### 5. Tier — Sovereign
- **Name:** Sovereign (keep)
- **Price:** Rp 22,500,000
- **Period:** `Founding Rate · Regular: Rp 35,000,000`
- **Description (replace):**
  > *Your full digital command center — managed. Multi-page presence with brand strategy, professional copywriting, and CRM. Run your business, not your website.*
- **Features (keep existing)**

### 6. Tier — Authority
- **Name:** Authority (keep)
- **Price:** Rp 45,000,000
- **Period:** `Founding Rate · Regular: Rp 65,000,000`
- **Description (replace):**
  > *A long-term digital partnership. We own your SEO growth, lead generation, and quarterly strategy — so your digital presence compounds in value every single month.*
- **Features (keep existing)**

### 7. CTA Button Text — Authority (fix inconsistency)
```
Change: "Request Invitation"
To: "Apply for Invitation"
```
All three tiers must say: **"Apply for Invitation"**

### 8. Footer Note (below pricing cards — replace)
```
"Founding rates guaranteed until program closes in April 2026.
After that, prices increase permanently. No exceptions."
```

---

## WhatsApp Pre-fill Links — config.tsx

Update all WA link texts to reflect new prices:

```typescript
whatsappSignature: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20SIGNATURE%20(Rp%209.75jt%20Founding%20Rate)%20Digital%20Business%20Manager.%20Bisnis%20saya%3A%20"

whatsappSovereign: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20SOVEREIGN%20(Rp%2022.5jt%20Founding%20Rate)%20Digital%20Business%20Manager.%20Saya%20butuh%20multi-page%20%2B%20CRM%20integration."

whatsappAuthority: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20AUTHORITY%20(Rp%2045jt%20Founding%20Rate)%20Digital%20Business%20Manager.%20Saya%20cari%20partner%20digital%20jangka%20panjang%20dengan%20SLA."
```

Also update `priceRange` in business config:
```typescript
priceRange: "Rp 9.750.000 - Rp 65.000.000+"
```

---

## Custom Banner Update

**File:** `src/components/sections/custom-banner.tsx`

Change:
```
Starting from Rp 15 juta
```
To:
```
Starting from Rp 25,000,000
```

Rationale: Custom pricing must sit visibly above Authority tier (Rp 45M) in perceived complexity — but the "starting from" anchor at Rp 25M gives an accessible entry for prospects who aren't ready for Authority but need something beyond Sovereign.

> Note: Review whether custom-banner should reference that "Custom starts where our managed tiers end" — positions it as the natural upgrade path.

---

## Visual Framing Notes (for developer)

### Show Future Price Visually
Each tier card should display the future price in muted/strikethrough style:

```
Rp 9,750,000          ← primary (gold/accent)
Founding Rate          ← badge
Regular: Rp 15,000,000 ← muted, smaller font, consider strikethrough style
```

This is the "anchoring" effect — seeing the future price next to the founding rate creates immediate perceived value.

### Recommended Period Element (pricing.tsx)
```tsx
<div className="mt-4 flex items-baseline gap-2">
  <span className="text-2xl font-bold tracking-tight text-primary">{plan.price}</span>
  <span className="text-sm text-muted-foreground">Founding Rate</span>
</div>
<p className="text-xs text-muted-foreground mt-1 line-through opacity-60">Regular: {plan.regularPrice}</p>
```

---

## Tier Summary Card (for quick reference in code)

```js
const plans = [
  {
    name: "Signature",
    price: "Rp 9,750,000",
    regularPrice: "Rp 15,000,000",
    period: "Founding Rate",
    description: "Your professional digital front door. Built to convert cold browsers into warm WhatsApp conversations — from day one.",
    // ... features
  },
  {
    name: "Sovereign",
    price: "Rp 22,500,000",
    regularPrice: "Rp 35,000,000",
    period: "Founding Rate",
    description: "Your full digital command center — managed. Multi-page presence with brand strategy, professional copywriting, and CRM. Run your business, not your website.",
    isPopular: true,
    // ... features
  },
  {
    name: "Authority",
    price: "Rp 45,000,000",
    regularPrice: "Rp 65,000,000",
    period: "Founding Rate",
    description: "A long-term digital partnership. We own your SEO growth, lead generation, and quarterly strategy — so your digital presence compounds in value every single month.",
    // ... features
  }
]
```

---

## Scope of Changes Summary

| File | Change |
|------|--------|
| `src/components/sections/pricing.tsx` | New prices, descriptions, regularPrice display, badge copy, footer note, fix Authority CTA |
| `src/lib/config.tsx` | Update priceRange, all 3 WA links with new prices |
| `src/components/sections/custom-banner.tsx` | Update "Rp 15 juta" → "Rp 25,000,000" |

---

## What NOT to Change
- Tier names (Signature, Sovereign, Authority) — these are solid
- Feature lists — still accurate, keep as-is
- "Apply for Invitation" CTA flow — correct
- The overall scarcity messaging ("3 slots per month") — keep it
- WhatsApp as primary lead channel — non-negotiable for this market
