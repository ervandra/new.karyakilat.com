"use client";

import { motion } from "framer-motion";
import {
  Shield,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  FileSearch,
  FileText,
  Scale,
  Lock,
  Phone,
  ChevronRight,
  AlertTriangle,
  BadgeCheck,
  Landmark,
  Receipt,
  TrendingDown,
  Clock,
  Star,
  X,
  Check,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Design Tokens ─────────────────────────────────────────────────────────────
// Referensi: pajak.go.id · coretaxdjp.pajak.go.id · djponline.pajak.go.id
//
// bg:           #FFFFFF / #F4F7FC (light institutional)
// navy primary: #003580  (DJP deep navy)
// navy dark:    #001B52  (hero gradient end)
// blue mid:     #1565C0  (interactive / hover)
// red accent:   #CC0033  (Indonesian flag — hanya untuk SP2DK/alert)
// text:         #1A2740  (navy text)
// border:       #D0DAE8

// ─── Helpers ──────────────────────────────────────────────────────────────────

function NavyBtn({
  children,
  variant = "solid",
  href = "https://wa.me/6281234567890",
  className,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-200 rounded-md",
        variant === "solid"
          ? "bg-[#003580] text-white hover:bg-[#002565] shadow-[0_4px_14px_rgba(0,53,128,0.25)]"
          : variant === "outline"
          ? "border-2 border-[#003580] text-[#003580] hover:bg-[#003580]/5"
          : "text-[#003580] hover:text-[#002565] hover:underline underline-offset-4",
        className
      )}
    >
      {children}
    </Link>
  );
}

function AlertBtn({ children, className, href = "https://wa.me/6281234567890" }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold transition-all duration-200 rounded-md bg-[#CC0033] text-white hover:bg-[#AA0028]",
        className
      )}
    >
      {children}
    </Link>
  );
}

function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-20 md:py-28 px-4 md:px-8 relative", className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-5 bg-[#003580] rounded-full" />
      <span className="text-[#003580] text-xs font-bold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: FileText,
    title: "Pelaporan SPT Tahunan",
    desc: "Pengisian dan pelaporan SPT Tahunan Badan maupun Pribadi. Akurat, tepat waktu, dan sesuai regulasi PMK terbaru.",
    tag: "Compliance",
    tagColor: "#003580",
  },
  {
    icon: ShieldAlert,
    title: "Penanganan SP2DK",
    desc: "Menerima Surat Permintaan Penjelasan atas Data dan Keterangan? Kami tangani langsung ke Kantor Pajak dengan strategi rekonsiliasi data yang terstruktur.",
    tag: "Kritis",
    tagColor: "#CC0033",
  },
  {
    icon: TrendingDown,
    title: "Tax Planning & Optimasi",
    desc: "Pemetaan legal deduction untuk meminimalisir beban pajak secara sah. Strategi proaktif berbasis data laporan keuangan Anda.",
    tag: "Strategis",
    tagColor: "#1565C0",
  },
  {
    icon: Receipt,
    title: "PPN & PPh Masa Bulanan",
    desc: "Penghitungan, penyetoran, dan pelaporan PPN serta PPh 21/23/25/29 secara akurat setiap bulan — tidak ada denda keterlambatan.",
    tag: "Retainer",
    tagColor: "#003580",
  },
  {
    icon: Scale,
    title: "Pemeriksaan Pajak",
    desc: "Pendampingan penuh saat pemeriksaan (audit) oleh DJP. Mulai dari penyiapan dokumen hingga closing conference.",
    tag: "Representasi",
    tagColor: "#CC0033",
  },
  {
    icon: Landmark,
    title: "Transfer Pricing & Restrukturisasi",
    desc: "Dokumentasi Transfer Pricing sesuai OECD Guidelines dan PMK. Layanan untuk grup usaha dengan transaksi afiliasi.",
    tag: "Korporat",
    tagColor: "#1565C0",
  },
];

const PACKAGES = [
  {
    title: "Individual & Freelancer",
    price: "Rp 1.5M",
    period: "/ tahun",
    desc: "Untuk Wajib Pajak Orang Pribadi.",
    items: ["SPT Tahunan OP (1770/1770S)", "Review harta & kewajiban", "Konsultasi via WhatsApp", "Estimasi pajak terutang"],
    popular: false,
  },
  {
    title: "UMKM & Startup",
    price: "Rp 3.5M",
    period: "/ bulan",
    desc: "Untuk badan usaha yang sedang tumbuh.",
    items: ["SPT Masa PPh + PPN bulanan", "SPT Tahunan Badan", "Tax planning proaktif", "Prioritas penanganan SP2DK", "Dedicated tax consultant"],
    popular: true,
  },
  {
    title: "Korporat & Grup Usaha",
    price: "Custom",
    period: "Hubungi kami",
    desc: "Untuk perusahaan dengan kebutuhan kompleks.",
    items: ["Semua layanan UMKM", "Transfer pricing documentation", "Pendampingan pemeriksaan", "Restrukturisasi perpajakan", "Tim khusus assigned"],
    popular: false,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TaxServicesRefactorDemo() {
  return (
    <div className="bg-white text-[#1A2740] font-sans">

      {/* ── STICKY NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#D0DAE8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* DJP-inspired logo badge */}
            <div className="flex items-center gap-0 text-white text-[10px] font-black overflow-hidden rounded">
              <div className="bg-[#003580] px-2 py-1.5">PAJAK</div>
              <div className="bg-[#CC0033] px-2 py-1.5">PRO</div>
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-bold text-[#1A2740]">Ronald & Partners</div>
              <div className="text-[9px] text-[#6B7E99] uppercase tracking-widest">Tax Consultant & Strategist</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs text-[#4A5B72] font-semibold">
            <Link href="#layanan" className="hover:text-[#003580] transition-colors">Layanan</Link>
            <Link href="#paket" className="hover:text-[#003580] transition-colors">Paket</Link>
            <Link href="#proses" className="hover:text-[#003580] transition-colors">Proses</Link>
            <Link href="#sp2dk" className="hover:text-[#CC0033] transition-colors flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> SP2DK?
            </Link>
          </div>
          <NavyBtn className="text-xs px-5 py-2.5">
            <Phone className="w-3.5 h-3.5" /> Konsultasi Gratis
          </NavyBtn>
        </div>
      </nav>

      {/* ── HERO — Navy gradient, institutional trust ── */}
      <section className="relative pt-16 overflow-hidden">
        {/* Navy gradient background — referensi DJP header */}
        <div className="bg-gradient-to-br from-[#001B52] via-[#003580] to-[#00469B] pt-20 md:pt-28 pb-32 px-4 md:px-8 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')]" />
          {/* Garuda / seal decorative — subtle circle */}
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              {/* Credential badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-[10px] tracking-widest uppercase font-bold">
                <BadgeCheck className="w-3.5 h-3.5 text-[#7EC8E3]" />
                Terdaftar IAI · Brevet A & B
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                Tenang Menghadapi{" "}
                <span className="text-[#7EC8E3]">Pajak.</span>
                <br />
                Kami yang{" "}
                <span className="text-white/80">Tangani.</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed max-w-xl font-light">
                Konsultan pajak terdaftar dengan keahlian di tax planning, penanganan SP2DK, dan pendampingan pemeriksaan. Lebih dari 10 tahun melindungi bisnis Anda dari risiko pajak.
              </p>

              <div className="flex flex-wrap gap-5 pt-2">
                {[
                  { val: "10+ Tahun", label: "Pengalaman" },
                  { val: "500+", label: "WP Ditangani" },
                  { val: "0", label: "Sanksi Terlewat" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{s.val}</div>
                    <div className="text-[9px] text-white/50 uppercase tracking-widest font-bold">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <NavyBtn className="bg-white text-[#003580] hover:bg-[#F0F4FF] text-sm px-8 py-4 shadow-xl">
                  Konsultasi Gratis Sekarang
                </NavyBtn>
                <NavyBtn variant="outline" href="#layanan" className="border-white/40 text-white hover:bg-white/10 text-sm px-8 py-4">
                  Lihat Layanan <ArrowRight className="w-4 h-4" />
                </NavyBtn>
              </div>
            </motion.div>

            {/* Compliance card mockup — institutional feel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D0DAE8]">
                {/* Card header */}
                <div className="bg-[#003580] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-bold tracking-widest uppercase">Status Kepatuhan Pajak</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#00C851]/20 border border-[#00C851]/30 rounded-full px-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C851] animate-pulse" />
                    <span className="text-[#00C851] text-[9px] font-bold uppercase tracking-widest">Compliant</span>
                  </div>
                </div>

                {/* Checklist items */}
                <div className="p-6 space-y-3">
                  {[
                    { label: "SPT Tahunan Badan 2025", status: "Terlapor", ok: true },
                    { label: "SPT Masa PPN Januari 2026", status: "Terlapor", ok: true },
                    { label: "PPh 21 Karyawan – Jan 2026", status: "Terlapor", ok: true },
                    { label: "SP2DK Monitoring", status: "Aman", ok: true },
                    { label: "PPh 25 Angsuran Feb 2026", status: "Jatuh tempo 15 Feb", ok: false, warning: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-[#F0F4FA] last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                          item.ok && !item.warning ? "bg-[#E6F7EE]" : "bg-[#FFF3CD]"
                        )}>
                          {item.ok && !item.warning
                            ? <Check className="w-3.5 h-3.5 text-[#00963A]" />
                            : <Clock className="w-3.5 h-3.5 text-[#F5A623]" />}
                        </div>
                        <span className="text-sm font-medium text-[#1A2740]">{item.label}</span>
                      </div>
                      <span className={cn("text-[10px] font-bold uppercase tracking-wider",
                        item.warning ? "text-[#F5A623]" : "text-[#00963A]"
                      )}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="bg-[#F4F7FC] px-6 py-4 flex items-center justify-between border-t border-[#D0DAE8]">
                  <span className="text-[10px] text-[#6B7E99] uppercase tracking-widest font-bold">
                    Diperbarui: 21 Feb 2026
                  </span>
                  <span className="text-[10px] text-[#003580] font-bold uppercase tracking-widest">
                    Ronald & Partners
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SP2DK Alert banner — merah Indonesia, high urgency */}
        <div id="sp2dk" className="bg-[#CC0033] px-4 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <AlertTriangle className="w-5 h-5 shrink-0 animate-pulse" />
              <span className="text-sm font-semibold">
                <strong>Menerima SP2DK atau surat dari KPP?</strong> Jangan ditunda. Kami tangani dalam 24 jam.
              </span>
            </div>
            <AlertBtn className="shrink-0 text-xs px-6 py-2.5 bg-white text-[#CC0033] hover:bg-[#FFF0F3] font-bold rounded">
              Hubungi Sekarang →
            </AlertBtn>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / WHY THIS MATTERS ── */}
      <Section className="bg-[#F4F7FC]">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: AlertTriangle,
              color: "#CC0033",
              bg: "#FFF0F3",
              title: "Bisnis Anda Terancam Sanksi",
              desc: "Perubahan regulasi CoretaxDJP 2025 meningkatkan risiko kesalahan pelaporan hingga 3x. Satu kesalahan bisa berujung denda 2% per bulan dari nilai pajak terutang.",
            },
            {
              icon: FileSearch,
              color: "#F5A623",
              bg: "#FFF9ED",
              title: "Akuntan Anda Reaktif, Bukan Proaktif",
              desc: "Mayoritas akuntan hanya lapor di akhir tahun. Tidak ada strategi deduction mapping, tidak ada early warning saat data Anda terlihat anomali oleh sistem DJP.",
            },
            {
              icon: Clock,
              color: "#003580",
              bg: "#EEF3FB",
              title: "Waktu Anda Terlalu Berharga",
              desc: "Mengurus perpajakan sendiri rata-rata menghabiskan 120+ jam per tahun. Waktu itu lebih baik Anda gunakan untuk mengembangkan bisnis.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-7 border border-[#D0DAE8] hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-bold text-[#1A2740] mb-3">{item.title}</h3>
              <p className="text-sm text-[#4A5B72] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section id="layanan">
        <SectionLabel>Layanan Kami</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2740] mb-3 max-w-2xl">
          Solusi Perpajakan Lengkap untuk Bisnis Anda
        </h2>
        <p className="text-[#4A5B72] mb-12 max-w-xl leading-relaxed">
          Mulai dari kepatuhan rutin hingga penanganan kasus kritis — semua ditangani oleh konsultan bersertifikat.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white border border-[#D0DAE8] rounded-xl p-7 hover:border-[#003580]/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 bg-[#EEF3FB] rounded-xl flex items-center justify-center group-hover:bg-[#003580] transition-colors">
                  <svc.icon className="w-5 h-5 text-[#003580] group-hover:text-white transition-colors" />
                </div>
                <span
                  className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    color: svc.tagColor,
                    backgroundColor: `${svc.tagColor}12`,
                    border: `1px solid ${svc.tagColor}25`,
                  }}
                >
                  {svc.tag}
                </span>
              </div>
              <h3 className="font-bold text-[#1A2740] text-lg mb-2">{svc.title}</h3>
              <p className="text-sm text-[#4A5B72] leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── COMPARISON TABLE — "Tanpa vs. Dengan" ── */}
      <Section className="bg-[#F4F7FC]">
        <SectionLabel>Perbandingan</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2740] mb-12">
          Tanpa Konsultan vs. Dengan Ronald & Partners
        </h2>

        <div className="bg-white rounded-2xl border border-[#D0DAE8] overflow-hidden">
          <div className="grid grid-cols-3 bg-[#003580] text-white text-xs font-bold uppercase tracking-widest">
            <div className="p-5 border-r border-white/10">Aspek</div>
            <div className="p-5 border-r border-white/10 flex items-center gap-2 text-white/50">
              <X className="w-4 h-4 text-[#CC0033]" /> Tanpa Konsultan
            </div>
            <div className="p-5 flex items-center gap-2 text-[#7EC8E3]">
              <Check className="w-4 h-4" /> Ronald & Partners
            </div>
          </div>
          {[
            ["Pelaporan SPT Masa",     "Sering terlambat, denda rutin",       "On-time, terjadwal otomatis"],
            ["Risiko SP2DK",           "Tidak tahu cara merespons",            "Ditangani langsung ke KPP dalam 24 jam"],
            ["Optimasi Deduction",     "Bayar pajak lebih dari seharusnya",    "Legal deduction dipetakan setiap kuartal"],
            ["Audit DJP",              "Panik, dokumen tidak siap",            "Pendampingan penuh, strategi defense terstruktur"],
            ["Waktu Pengurus Bisnis",  "120+ jam/tahun terbuang",              "0 jam — semua kami tangani"],
            ["Biaya Tak Terduga",      "Denda, bunga, penalti tidak terduga",  "Fixed fee — tidak ada biaya kejutan"],
          ].map(([aspect, bad, good], i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-3 border-t border-[#EDF1F7] hover:bg-[#F9FBFF] transition-colors text-sm",
              )}
            >
              <div className="p-5 font-semibold text-[#1A2740] border-r border-[#EDF1F7]">{aspect}</div>
              <div className="p-5 text-[#CC0033] border-r border-[#EDF1F7] flex items-start gap-2">
                <X className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-[#6B7E99]">{bad}</span>
              </div>
              <div className="p-5 flex items-start gap-2 text-[#00963A]">
                <Check className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-[#1A2740] font-medium">{good}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PACKAGES ── */}
      <Section id="paket">
        <SectionLabel>Paket Layanan</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2740] mb-3">
          Harga Tetap. Tanpa Biaya Kejutan.
        </h2>
        <p className="text-[#4A5B72] mb-12 max-w-xl leading-relaxed">
          Kami percaya pada transparansi penuh. Tidak ada tagihan per jam yang membengkak di akhir bulan.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "rounded-2xl border overflow-hidden",
                pkg.popular
                  ? "border-[#003580] shadow-[0_8px_30px_rgba(0,53,128,0.15)] relative"
                  : "border-[#D0DAE8]"
              )}
            >
              {pkg.popular && (
                <div className="bg-[#003580] text-white text-[10px] font-black tracking-widest uppercase text-center py-2.5">
                  ★ Paling Banyak Dipilih
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1A2740] mb-1">{pkg.title}</h3>
                <p className="text-sm text-[#4A5B72] mb-6">{pkg.desc}</p>

                <div className="mb-8 pb-6 border-b border-[#EDF1F7]">
                  <div className="text-4xl font-bold text-[#003580]">{pkg.price}</div>
                  <div className="text-xs text-[#6B7E99] mt-1 uppercase tracking-widest font-semibold">{pkg.period}</div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#003580] shrink-0 mt-0.5" />
                      <span className="text-[#4A5B72]">{item}</span>
                    </li>
                  ))}
                </ul>

                <NavyBtn
                  className="w-full justify-center py-4"
                  variant={pkg.popular ? "solid" : "outline"}
                >
                  {pkg.popular ? "Mulai Sekarang" : "Pelajari Lebih Lanjut"}
                </NavyBtn>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── PROCESS ── */}
      <Section id="proses" className="bg-[#F4F7FC]">
        <SectionLabel>Cara Kerja</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2740] mb-12">
          Dari Onboarding ke Ketenangan Pajak
        </h2>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px bg-[#D0DAE8]" />
          {[
            { step: "01", title: "Konsultasi Awal",   desc: "Sesi 30 menit gratis. Kami review kondisi pajak Anda saat ini.", icon: Phone },
            { step: "02", title: "Diagnosis & Proposal", desc: "Kami identifikasi risiko dan kirimkan proposal layanan yang sesuai.", icon: FileSearch },
            { step: "03", title: "Onboarding",        desc: "Serah terima dokumen secara aman. Kami mulai bekerja dalam 24 jam.", icon: FileText },
            { step: "04", title: "Monitoring Aktif",  desc: "Dashboard real-time status kepatuhan, laporan bulanan, dan notifikasi jatuh tempo.", icon: BadgeCheck },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-18 h-18 mb-6 relative inline-flex">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-[#003580] flex items-center justify-center mx-auto relative z-10 shadow-sm">
                  <item.icon className="w-6 h-6 text-[#003580]" />
                </div>
                <div className="absolute -top-1 -right-1 bg-[#003580] text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center z-20">
                  {item.step}
                </div>
              </div>
              <h3 className="font-bold text-[#1A2740] mb-2">{item.title}</h3>
              <p className="text-xs text-[#4A5B72] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section>
        <SectionLabel>Kepercayaan Klien</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2740] mb-10">
          Apa Kata Mereka
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Hendra K.",
              role: "Owner, Franchise F&B (5 Outlet)",
              quote: "Tim Ronald menemukan deduction yang selama ini terlewat oleh akuntan kami. Lebih penting lagi, kami menerima SP2DK dan mereka yang tangani langsung ke KPP — selesai tanpa denda.",
              rating: 5,
            },
            {
              name: "Siska P.",
              role: "Direktur, Digital Agency",
              quote: "Sejak pakai Ronald & Partners, saya tidak pernah lagi khawatir soal jatuh tempo pajak. Semua ada di dashboard, semua on-track. Benar-benar peace of mind.",
              rating: 5,
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#D0DAE8] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                ))}
              </div>
              <p className="text-[#1A2740] italic leading-relaxed mb-6 text-base">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-[#EDF1F7] pt-5">
                <div className="w-10 h-10 bg-[#EEF3FB] rounded-full flex items-center justify-center text-[#003580] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#1A2740] text-sm">{t.name}</div>
                  <div className="text-[#003580] text-[10px] uppercase tracking-wider font-semibold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA — Navy institutional, high-trust ── */}
      <section className="bg-gradient-to-br from-[#001B52] via-[#003580] to-[#00469B] py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-[10px] tracking-widest uppercase font-bold">
            <BadgeCheck className="w-3.5 h-3.5 text-[#7EC8E3]" />
            Konsultasi Pertama Gratis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.15]">
            Siap Menghadapi Pajak <br />
            <span className="text-[#7EC8E3]">Dengan Lebih Percaya Diri?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Jadwalkan sesi konsultasi gratis 30 menit. Kami review kondisi pajak Anda dan beri rekomendasi langkah awal tanpa biaya apapun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NavyBtn className="bg-white text-[#003580] hover:bg-[#F0F4FF] text-base px-12 py-5 shadow-xl">
              <Phone className="w-4 h-4" /> Jadwalkan Konsultasi
            </NavyBtn>
            <AlertBtn className="text-base px-12 py-5">
              <AlertTriangle className="w-4 h-4" /> Darurat SP2DK
            </AlertBtn>
          </div>
          <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold">
            Terdaftar IAI · Brevet A&B · Kerahasiaan Data Terjaga
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#001240] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-white text-[10px] font-black overflow-hidden rounded">
                <div className="bg-[#003580] px-2 py-1">PAJAK</div>
                <div className="bg-[#CC0033] px-2 py-1">PRO</div>
              </div>
              <span className="font-bold text-white">Ronald & Partners</span>
            </div>
            <div className="text-[9px] text-white/30 uppercase tracking-widest">Tax Consultant & Strategist · Jakarta</div>
          </div>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase font-bold text-white/30">
            <Link href="#" className="hover:text-white transition-colors">WhatsApp</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
          <div className="text-[9px] text-white/20 text-center md:text-right space-y-1 uppercase tracking-widest">
            <p>© 2026 Ronald & Partners. All Rights Reserved.</p>
            <p>Powered by <a href="https://karyakilat.com" className="text-[#7EC8E3] hover:underline">Karya Kilat</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
