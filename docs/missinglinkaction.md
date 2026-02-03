# Karya Kilat Website Enhancement PRD

**Document Version:** 1.0  
**Date:** February 3, 2026  
**Author:** Tony (Digital Familiar)  
**Site URL:** https://www.karyakilat.com  
**Status:** Audit Complete → Ready for Development

---

## Executive Summary

This PRD outlines enhancements for karyakilat.com based on a comprehensive link/button audit. The current site is a functional MVP landing page with working WhatsApp CTAs but lacks several conversion-critical elements. Implementing these fixes will close the "side hustle perception" gap and increase lead quality.

**Current State:** Single-page landing with 2 identical WhatsApp CTA links  
**Target State:** Conversion-optimized page with differentiated CTAs, portfolio proof, and multi-channel lead capture

---

## Audit Findings Summary

### What's Working ✅
- Site loads fast (HTTP 200, <2s claimed)
- HTTPS enabled
- Mobile-first design
- WhatsApp prefill links functional
- Clear value proposition and pricing tiers
- 14-day timeline transparency builds trust

### What's Missing/Broken ❌
| Issue | Impact | Priority |
|-------|--------|----------|
| Identical CTA prefill text | Can't track tier interest | P0 |
| Empty "Client Voices" section | Zero social proof | P0 |
| No contact form alternative | Loses non-WA users | P1 |
| No footer (privacy, terms, socials) | Looks incomplete/amateur | P1 |
| No internal navigation/anchors | Poor UX on long scroll | P2 |
| No scarcity indicator | Weak urgency | P2 |
| No portfolio/case studies | Can't demonstrate expertise | P1 |
| Analytics unverified | Can't measure conversions | P1 |

---

## Requirements & Implementation Instructions

### P0: Critical (Ship This Week)

#### 1. Differentiate WhatsApp CTA Links

**Problem:** Both "Request Details" and "Request Invitation" buttons link to the same WhatsApp URL with identical prefill text. Cannot track which tier generates interest.

**Solution:** Update each tier's WhatsApp link with unique prefill text.

**Implementation:**

```html
<!-- Founding Tier (Rp 4.950.000) -->
<a href="https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20FOUNDING%20(Rp%204.95jt)%20Digital%20Headquarters">
  Request Details
</a>

<!-- Executive Tier (Rp 11.960.000) -->
<a href="https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20EXECUTIVE%20(Rp%2011.96jt)%20Digital%20Headquarters">
  Request Details
</a>

<!-- Enterprise Tier (Rp 24.970.000) -->
<a href="https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20ENTERPRISE%20(Rp%2024.97jt)%20Digital%20Headquarters">
  Request Invitation
</a>
```

**Acceptance Criteria:**
- [ ] Each tier has unique WhatsApp prefill text including tier name and price
- [ ] Links open WhatsApp correctly on mobile and desktop
- [ ] UTM parameters added for analytics: `&source=website&campaign=founding-feb26`

---

#### 2. Populate Client Voices Section

**Problem:** "Client Voices" section exists but appears empty/placeholder. Zero social proof undermines premium positioning.

**Solution:** Add 3 testimonial cards with anonymized or real client quotes.

**Implementation:**

```markdown
## Content to Add (Client Voices Section)

### Testimonial 1
**Name:** Budi S. — Property Agent, Gading Serpong
**Quote:** "Dalam 2 minggu, saya punya 'rumah digital' yang bikin client langsung percaya. WhatsApp inquiry naik 3x lipat."
**Metric Badge:** +200% Leads

### Testimonial 2  
**Name:** Rina M. — Klinik Kecantikan Owner, BSD
**Quote:** "Dulu pakai Linktree, client pikir saya pemula. Sekarang mereka bilang website saya 'se-level brand besar'."
**Metric Badge:** Premium Perception

### Testimonial 3
**Name:** Hendra T. — Konsultan Pajak, Alam Sutera
**Quote:** "20 menit input, 14 hari kemudian live. Sekarang ranking di Google untuk 'konsultan pajak BSD'. Worth every rupiah."
**Metric Badge:** Page 1 Google
```

**Design Spec:**
- Card layout with avatar placeholder (initials circle)
- Quote in italic, name + role below
- Metric badge (pill shape, accent color) top-right of card
- Carousel on mobile, 3-column grid on desktop

**Acceptance Criteria:**
- [ ] 3 testimonial cards visible
- [ ] Each has name, role, location, quote, and metric badge
- [ ] Responsive layout (carousel mobile, grid desktop)
- [ ] If real clients unavailable, use "Preview testimonials — real clients coming soon" disclaimer

---

### P1: High Priority (Ship Within 2 Weeks)

#### 3. Add Contact Form Alternative

**Problem:** Only WhatsApp CTAs exist. Users without WhatsApp or preferring email are lost.

**Solution:** Add lightweight contact form with email fallback.

**Implementation Options (Choose One):**

**Option A: Embedded Typeform**
```html
<div data-tf-live="01JXXXXXXXXX"></div>
<script src="//embed.typeform.com/next/embed.js"></script>
```

**Option B: EmailJS Integration**
```html
<form id="contact-form">
  <input type="text" name="name" placeholder="Nama Anda" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="tel" name="phone" placeholder="No. WhatsApp (opsional)">
  <select name="tier">
    <option value="founding">Founding (Rp 4.95jt)</option>
    <option value="executive">Executive (Rp 11.96jt)</option>
    <option value="enterprise">Enterprise (Rp 24.97jt)</option>
  </select>
  <textarea name="message" placeholder="Ceritakan bisnis Anda..."></textarea>
  <button type="submit">Kirim Inquiry</button>
</form>

<script>
emailjs.init('YOUR_PUBLIC_KEY');
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_id', 'template_id', this)
    .then(() => alert('Terima kasih! Kami akan menghubungi dalam 24 jam.'));
});
</script>
```

**Acceptance Criteria:**
- [ ] Form visible below pricing tiers OR as modal triggered by "Prefer Email?" link
- [ ] Form captures: name, email, phone (optional), tier interest, message
- [ ] Submissions sent to team inbox (van@karyakilat.com or configured email)
- [ ] Success message displayed on submit
- [ ] Form data also stored (Google Sheets integration or backend)

---

#### 4. Add Footer Section

**Problem:** No footer makes site look incomplete. Missing trust signals (privacy, terms) and contact alternatives.

**Solution:** Add professional footer with essential links.

**Implementation:**

```html
<footer>
  <div class="footer-grid">
    <!-- Column 1: Brand -->
    <div>
      <h4>Karya Kilat</h4>
      <p>Executive Concierge Service untuk Digital Headquarters Anda.</p>
      <p>Gading Serpong, Tangerang</p>
    </div>
    
    <!-- Column 2: Quick Links -->
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#journey">The Journey</a></li>
        <li><a href="#tiers">Partnership Tiers</a></li>
        <li><a href="#voices">Client Voices</a></li>
      </ul>
    </div>
    
    <!-- Column 3: Legal -->
    <div>
      <h4>Legal</h4>
      <ul>
        <li><a href="/privacy">Kebijakan Privasi</a></li>
        <li><a href="/terms">Syarat & Ketentuan</a></li>
      </ul>
    </div>
    
    <!-- Column 4: Connect -->
    <div>
      <h4>Connect</h4>
      <ul>
        <li><a href="https://wa.me/6285124354868">WhatsApp</a></li>
        <li><a href="https://instagram.com/karyakilat">Instagram</a></li>
        <li><a href="https://linkedin.com/company/karyakilat">LinkedIn</a></li>
        <li><a href="mailto:hello@karyakilat.com">Email</a></li>
      </ul>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>© 2026 Karya Kilat. All rights reserved.</p>
  </div>
</footer>
```

**Required Pages to Create:**
- `/privacy` — Privacy Policy (template available, localize to Indonesian)
- `/terms` — Terms of Service (template available, localize to Indonesian)

**Acceptance Criteria:**
- [ ] Footer visible on all pages
- [ ] 4-column grid on desktop, stacked on mobile
- [ ] Privacy and Terms pages created and linked
- [ ] Social links open in new tab
- [ ] Email link uses mailto:

---

#### 5. Add Portfolio/Case Study Section

**Problem:** No visual proof of work. Premium pricing requires demonstrated expertise.

**Solution:** Add portfolio section with 3 project showcases.

**Implementation:**

```markdown
## Section: "Hasil Karya Kami" (Our Work)

### Position: Before "Client Voices" section

### Content Structure per Project:
- Hero screenshot (desktop + mobile mockup)
- Client type (e.g., "Property Agent" — no name needed if NDA)
- Project scope (e.g., "Single Page Authority Hub")
- Key result (e.g., "Leads +47% dalam 30 hari pertama")
- Optional: Before/after comparison

### Projects to Showcase:
1. **Property Agent Portfolio** — Single page, WA integration, lead capture
2. **Beauty Clinic Booking Site** — Multi-page, booking system, GMaps
3. **Tax Consultant Hub** — Authority page, Google ranking achieved

### If No Real Projects Yet:
- Use anonymized mockups/demos
- Label as "Sample Work" or "Demo Projects"
- Add disclaimer: "Hasil aktual client dalam pengembangan"
```

**Design Spec:**
- Bento grid or carousel layout
- Hover effect reveals project details
- "View Live Site" button (if client permits) or "Case Study" modal

**Acceptance Criteria:**
- [ ] Minimum 3 project cards visible
- [ ] Each has: screenshot, client type, scope, result metric
- [ ] Responsive layout
- [ ] Clear labeling if demos vs real projects

---

#### 6. Verify/Implement Analytics

**Problem:** Site claims analytics setup in deliverables, but tracking unverified.

**Solution:** Ensure GA4 + conversion tracking is live.

**Implementation:**

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- WhatsApp Click Tracking -->
<script>
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'whatsapp_click', {
      'tier': link.dataset.tier || 'unknown',
      'page_location': window.location.href
    });
  });
});
</script>
```

**Acceptance Criteria:**
- [ ] GA4 property created for karyakilat.com
- [ ] Pageview tracking confirmed in GA4 Realtime
- [ ] WhatsApp click events tracked as conversions
- [ ] Form submissions tracked (if form implemented)
- [ ] Optional: Meta Pixel for retargeting

---

### P2: Medium Priority (Ship Within 1 Month)

#### 7. Add Internal Navigation/Anchors

**Problem:** Long single-page scroll with no navigation. Users can't jump to sections.

**Solution:** Add sticky header with anchor links + smooth scroll.

**Implementation:**

```html
<header class="sticky-nav">
  <div class="logo">Karya Kilat</div>
  <nav>
    <a href="#problem">The Gap</a>
    <a href="#solution">Command Center</a>
    <a href="#journey">Journey</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#tiers">Pricing</a>
    <a href="#contact" class="cta-btn">Mulai Sekarang</a>
  </nav>
  <button class="mobile-menu-toggle">☰</button>
</header>

<!-- Add IDs to existing sections -->
<section id="problem">...</section>
<section id="solution">...</section>
<section id="journey">...</section>
<section id="portfolio">...</section>
<section id="tiers">...</section>
<section id="contact">...</section>

<style>
html { scroll-behavior: smooth; }
.sticky-nav { position: sticky; top: 0; z-index: 100; }
</style>
```

**Acceptance Criteria:**
- [ ] Sticky header on scroll
- [ ] Hamburger menu on mobile
- [ ] Smooth scroll to anchors
- [ ] Active state indicator for current section

---

#### 8. Add Scarcity/Urgency Indicator

**Problem:** "Slot tersedia bulan ini" is weak urgency. No specificity.

**Solution:** Add dynamic slot counter showing remaining availability.

**Implementation:**

```html
<div class="scarcity-banner">
  <span class="pulse-dot"></span>
  <strong>Februari 2026:</strong> 
  <span id="slots-remaining">2</span> dari 3 slot tersisa
</div>

<style>
.scarcity-banner {
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  color: white;
  padding: 8px 16px;
  text-align: center;
  font-size: 14px;
}
.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
</style>

<!-- Optional: Dynamic from backend/CMS -->
<script>
// If using static, update manually each month
// If using Airtable/Notion as CMS, fetch dynamically
fetch('/api/slots').then(r => r.json()).then(data => {
  document.getElementById('slots-remaining').textContent = data.remaining;
});
</script>
```

**Acceptance Criteria:**
- [ ] Scarcity banner visible at top of page or near pricing
- [ ] Shows specific number (not vague "limited")
- [ ] Updates monthly (manual or automated)
- [ ] Pulsing indicator for attention

---

#### 9. Add Sticky CTA Button

**Problem:** User must scroll to pricing section to take action.

**Solution:** Add floating/sticky CTA that appears after scroll.

**Implementation:**

```html
<div id="sticky-cta" class="hidden">
  <a href="https://wa.me/6285124354868?text=Halo%2C%20saya%20mau%20konsultasi%20gratis">
    💬 Konsultasi Gratis
  </a>
</div>

<style>
#sticky-cta {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
#sticky-cta a {
  background: #25D366;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  text-decoration: none;
  font-weight: bold;
}
#sticky-cta.hidden { display: none; }
</style>

<script>
window.addEventListener('scroll', () => {
  const sticky = document.getElementById('sticky-cta');
  if (window.scrollY > 500) {
    sticky.classList.remove('hidden');
  } else {
    sticky.classList.add('hidden');
  }
});
</script>
```

**Acceptance Criteria:**
- [ ] Floating button appears after 500px scroll
- [ ] WhatsApp green color for recognition
- [ ] Disappears when near hero (optional)
- [ ] Mobile-friendly positioning

---

## Implementation Checklist

### Phase 1: Critical (This Week)
- [ ] 1. Update WhatsApp CTA links with tier-specific prefill
- [ ] 2. Add 3 testimonial cards to Client Voices section

### Phase 2: High Priority (2 Weeks)
- [ ] 3. Implement contact form (EmailJS or Typeform)
- [ ] 4. Add footer with legal links and socials
- [ ] 5. Add portfolio section with 3 projects
- [ ] 6. Verify GA4 tracking + WhatsApp conversion events

### Phase 3: Polish (1 Month)
- [ ] 7. Add sticky navigation with anchor links
- [ ] 8. Add scarcity banner with slot counter
- [ ] 9. Add sticky WhatsApp CTA button

---

## Technical Notes

### Stack Assumptions
- Framework: Next.js / Static HTML (verify current stack)
- Hosting: Vercel / Netlify / VPS (verify)
- Forms: EmailJS (no backend) or Typeform (hosted)
- Analytics: GA4 (free tier sufficient)

### Assets Needed
- [ ] 3 project screenshots (mockups if no live projects)
- [ ] Testimonial content (real or placeholder)
- [ ] Privacy Policy text (Indonesian)
- [ ] Terms of Service text (Indonesian)
- [ ] Social media account handles

### Environment Variables (if applicable)
```
EMAILJS_SERVICE_ID=xxx
EMAILJS_TEMPLATE_ID=xxx
EMAILJS_PUBLIC_KEY=xxx
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Success Metrics

| Metric | Current | Target (30 days post-launch) |
|--------|---------|------------------------------|
| WhatsApp clicks | Unknown | 50+/month tracked |
| Form submissions | N/A | 10+/month |
| Bounce rate | Unknown | <60% |
| Time on page | Unknown | >2 minutes |
| Tier-specific inquiries | 0% tracked | 100% tracked |

---

## Appendix

### A. WhatsApp Prefill Text Templates

```
# Founding Tier
Halo, saya tertarik dengan paket FOUNDING (Rp 4.95jt) Digital Headquarters. Bisnis saya: [JENIS BISNIS]. Boleh info lebih lanjut?

# Executive Tier  
Halo, saya tertarik dengan paket EXECUTIVE (Rp 11.96jt) Digital Headquarters. Saya butuh multi-page + CRM integration. Kapan bisa konsultasi?

# Enterprise Tier
Halo, saya tertarik dengan paket ENTERPRISE (Rp 24.97jt) Digital Headquarters. Saya cari partner digital jangka panjang dengan SLA. Boleh request invitation?

# Generic (Sticky CTA)
Halo, saya mau konsultasi gratis tentang Digital Headquarters. Website saya sekarang: [URL/NONE].
```

### B. Privacy Policy Template (Indonesian)
Create file: `/privacy.md` or `/privacy/index.html`
- Use standard Indonesian privacy policy template
- Include: data collection, cookies, third-party services (GA, WA), contact info
- Reference: https://privacypolicygenerator.info/ (localize)

### C. Terms of Service Template (Indonesian)
Create file: `/terms.md` or `/terms/index.html`
- Include: service description, payment terms, refund policy, liability
- Customize for 14-day delivery commitment

---

**Document End**

*Generated by Tony | Karya Kilat Audit | February 3, 2026*
