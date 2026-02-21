# SOP 01: Project Lifecycle (Intake to Delivery)

**Standard Operating Procedure for Karya Kilat Microsite Projects**

---

## 1. Fase Pra-Proyek (Intake & Research)
*   **Discovery Call:** Sesi 15-20 menit untuk memahami bisnis klien, masalah utama (gap), dan goals.
*   **Persona Identification:** Tentukan siapa owner-nya dan siapa target market spesifik (e.g. "Ibu-ibu di Gading Serpong", "Founder Tech Startup").
*   **Offer Crafting:** Jangan cuma jual jasa, buat penawaran (e.g. "Nasi Box Rendang Juara", "Starter App 4 Minggu").
*   **Research Industry:** Cari tahu harga pasar, pain points klien, dan apa yang bikin mereka takut/ragu (trust barriers).

## 2. Fase Perencanaan (PRD & Strategy)
*   **Buat PRD (Product Requirements Document):** Wajib ada sebelum coding. Lihat template di `docs/demo-prd/`.
*   **Tentukan Tone & Voice:** Pilih antara *Luxury*, *Tech-forward*, *Warm Editorial*, atau *Homey*.
*   **Sitemap & Content Outline:** Siapkan struktur halaman (Hero, Services, Portfolio, Process, Testimonial, FAQ, CTA).

## 3. Fase Pengembangan (Development)
*   **Asset Preparation:** Siapkan foto resolusi tinggi, ikon (Lucide/React-icons), dan copy yang sudah ter-craft.
*   **Base Framework:** Gunakan Next.js + Tailwind + Framer Motion.
*   **Custom Components:** Gunakan komponen dari `src/components/` (MagicUI, Shadcn/ui) untuk efisiensi.
*   **Mobile-First:** Pastikan responsivitas di layar smartphone adalah prioritas utama (karena 80%+ traffic via WhatsApp/Social Media).

## 4. Fase Review & QA
*   **Internal Review:** Cek terhadap "Checklist QA" (lihat SOP 05).
*   **Client Feedback:** Sesi feedback singkat (maksimal 2 putaran revisi sesuai tier).
*   **Cross-browser Testing:** Cek tampilan di Safari (iPhone), Chrome (Android), dan Desktop.

## 5. Fase Delivery & Offboarding
*   **Final Deployment:** Deploy ke Vercel/domain klien.
*   **Document Handover:** Berikan akses repository, domain, dan aset desain (Figma).
*   **Support Window:** Mulai periode support 30 hari (tergantung paket).
