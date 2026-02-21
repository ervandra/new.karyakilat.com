# SOP 03: Checklists (Project Excellence)

**Standard Operating Procedure for Karya Kilat Microsite Projects**

---

## 1. Pre-Development Checklist (Phase 1 & 2)
Wajib lengkap sebelum menulis satu baris kode pun.
*   [ ] **Client Profile:** Nama, Umur, Lokasi, Background.
*   [ ] **Business Niche:** Industri, Target Market, Competitor landscape.
*   [ ] **Primary Offer:** Paket/Produk utama yang dijual.
*   [ ] **Trust Bar:** Apa saja stats yang membuktikan kredibilitas? (e.g. "12th Experience", "200+ Clients").
*   [ ] **Persona PRD:** Dokumen PRD tersimpan di `docs/demo-prd/`.
*   [ ] **Assets:** Minimal 1 Foto Profile/Hero High-res, 4-6 Foto Portfolio/Gallery.
*   [ ] **CTA Link:** WhatsApp number, Form link, atau Reservation tool.

## 2. Development Standards Checklist (Phase 3)
*   [ ] **Next.js Structure:** Halaman berada di `src/app/demo/[name]/page.tsx`.
*   [ ] **Layout Integrity:** Tidak merusak navigasi utama (jika ada).
*   [ ] **Framer Motion:** Minimal `initial`, `animate`, `transition` pada Hero & Section headings.
*   [ ] **Tailwind Config:** Gunakan warna hex sesuai SOP 02 (Design Guidelines).
*   [ ] **Icon Consistency:** Gunakan `lucide-react` secara konsisten (jangan campur FontAwesome/Heroicons).
*   [ ] **Responsive Check:** Coba kecilkan layar browser ke 375px (iPhone SE width).

## 3. QA & Quality Review Checklist (Phase 4)
*   [ ] **Legibility:** Teks di atas background/foto terbaca jelas (gunakan dark/light overlay).
*   [ ] **WhatsApp CTA:** Klik tombol "Pesan Sekarang" → cek apakah mengarah ke nomor WA yang benar.
*   [ ] **Copy Review:** Tidak ada Typo, Tone sesuai persona (e.g. tidak terlalu kaku untuk catering).
*   [ ] **Performance:** Gambar sudah ter-optimize (gunakan `next/image` jika aset lokal).
*   [ ] **SEO Meta:** Page title, Description, & OG Image (minimal meta tags dasar).
*   [ ] **Favicon:** Gunakan favicon Karya Kilat atau brand klien.
*   [ ] **External Links:** Cek semua `Link` ke Instagram, LinkedIn, atau Portfolio eksternal.

## 4. Offboarding Checklist (Phase 5)
*   [ ] **Deployment:** Cek URL live (e.g. `karyakilat.com/demo/freelance`).
*   [ ] **Source Code:** Repo bersih dari `node_modules` atau file temp.
*   [ ] **Documentation:** PRD & SOP versi final disimpan di folder `docs/`.
