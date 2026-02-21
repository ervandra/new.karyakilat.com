# SOP 02: Design Guidelines (Visual Standards)

**Standard Operating Procedure for Karya Kilat Microsite Projects**

---

## 1. Visual Archetypes (Tone & Niche)
*   **Archetype A: Luxury / Premium (e.g. Agent Properti, Tax Services)**
    *   **Palette:** Dark Navy (#0B132B), Gold (#d4af37), Dark Grey (#1C2541), White (#FFFFFF).
    *   **Fonts:** Serif for headings (Playfair Display feel) + Sans-serif for body (Inter/Geist).
    *   **Vibe:** Sophisticated, trustworthy, high-status.
    *   **Layout:** Split-column hero, ample whitespace, sharp borders.

*   **Archetype B: Tech-Forward (e.g. Freelance Mobile Dev, SaaS)**
    *   **Palette:** GitHub Dark (#0D1117), Electric Blue (#0EA5E9), Purple (#8B5CF6), Cyan (#22D3EE).
    *   **Fonts:** Sans-serif headings + Monospace for tech accents/code.
    *   **Vibe:** Efficient, cutting-edge, builder-driven.
    *   **Layout:** Bento grids, terminal-style UIs, horizontal scrolls.

*   **Archetype C: Warm Editorial / Lifestyle (e.g. EJI Coffee, Artisan Bakery)**
    *   **Palette:** Warm Cream (#FAF7F0), Coffee Brown (#6B3E26), Amber (#E8A023), Sage Green (#7B9E87).
    *   **Fonts:** Serif headings (warm/inviting) + clean Sans body.
    *   **Vibe:** Atmospheric, sensory, community-focused.
    *   **Layout:** Full-bleed hero images, asymmetric card grids, magazine editorial feel.

*   **Archetype D: Homey / Approachable (e.g. Catering Ibu Ayu, Local Service)**
    *   **Palette:** Soft Coral (#D96B4F), Sage Green (#7B9E87), Warm White (#FFFBF5).
    *   **Fonts:** Personal serif/handwritten accent fonts + rounded/readable sans body.
    *   **Vibe:** Trustworthy, personal, family-oriented.
    *   **Layout:** Personal story-driven, food-forward photography, asymmetric rounded cards.

## 2. Component Standards
*   **Buttons:** Radius 0 (Luxury), Radius 8-12 (Tech), Radius Full (Editorial/Homey). Wajib ada hover state & transition.
*   **Sections:** Jarak antar section minimal `py-20` (Desktop) atau `py-12` (Mobile).
*   **Cards:** Gunakan `motion.div` untuk subtle entry animations (0.5s duration).
*   **Ikon:** Gunakan `lucide-react`. Ukuran standar `w-4 h-4` (button) atau `w-12 h-12` (features).

## 3. Image Strategy
*   **Quality:** Gunakan High-Res (Unsplash/Pexels) dengan overlay gelap/terang agar teks terbaca (legibility).
*   **Shadows:** Gunakan shadow halus (`shadow-sm`, `shadow-md`) daripada border tebal.
*   **Grayscale:** Gunakan grayscale 10-30% pada foto untuk menyatukan tone dengan background (opsional).
