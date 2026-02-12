"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { useLeadCapture } from "@/components/lead-capture-context";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Code2,
  Server,
  Palette,
  Headphones,
  BarChart3,
  Mail,
  Search,
  Gauge,
  Settings,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Data ─── */

const inclusions = [
  { icon: Palette, text: "UI/UX premium custom design (semua tier)" },
  { icon: Mail, text: "Contact form + newsletter (Mailchimp/Brevo)" },
  { icon: Headphones, text: "Free maintenance 3-6 bulan (sesuai tier)" },
  { icon: Shield, text: "Free support 1 tahun+ (WhatsApp/Email)" },
  { icon: Search, text: "Basic SEO + optimization" },
  { icon: Gauge, text: "Core Web Vitals 90+ (speed/cache optimization)" },
  { icon: Settings, text: "Infra setup: konten WP auto-sync ke frontend" },
];

const wpTiers = [
  {
    name: "Lite",
    price: "Rp 15-25 jt",
    timeline: "2 minggu",
    maintenance: "3 bulan",
    features: [
      "Company profile (5-10 halaman)",
      "Custom theme ringan",
      "Mobile-first responsive",
      "1 revisi desain",
    ],
  },
  {
    name: "Basic",
    price: "Rp 30-45 jt",
    timeline: "3 minggu",
    maintenance: "3 bulan",
    popular: true,
    features: [
      "Semua fitur Lite",
      "Form/booking system",
      "Advanced SEO",
      "Integrasi 1-2 API (WA/Email)",
      "3 revisi desain",
    ],
  },
  {
    name: "Pro",
    price: "Rp 50-70 jt",
    timeline: "4 minggu",
    maintenance: "6 bulan",
    features: [
      "Semua fitur Basic",
      "Advanced custom features",
      "Performance tuning",
      "Unlimited revisi dev",
      "Training & handover",
    ],
  },
];

const headlessTiers = [
  {
    name: "Lite",
    price: "Rp 25-35 jt",
    timeline: "3 minggu",
    maintenance: "3 bulan",
    features: [
      "Headless WP backend",
      "Next.js frontend custom (SSG)",
      "PWA-ready",
      "Vercel instance gratis",
    ],
  },
  {
    name: "Basic",
    price: "Rp 45-60 jt",
    timeline: "4 minggu",
    maintenance: "6 bulan",
    popular: true,
    features: [
      "Semua fitur Lite",
      "Dynamic ISR (real-time content update)",
      "Advanced performance & SEO",
    ],
  },
  {
    name: "Pro",
    price: "Rp 70-90 jt",
    timeline: "5 minggu",
    maintenance: "6 bulan",
    features: [
      "Semua fitur Basic",
      "Custom optimasi (image lazy, etc.)",
      "Handover Vercel setup lengkap",
    ],
  },
];

const comparisonRows = [
  { aspect: "Speed", wp: "Bagus (optimized)", headless: "Elite (SSR/SSG, Lighthouse 100)", pick: "Headless untuk high-traffic" },
  { aspect: "Design", wp: "Tinggi (custom)", headless: "Fleksibel (React)", pick: "Headless lebih modern" },
  { aspect: "Security", wp: "Hardened", headless: "Tinggi (statis API)", pick: "Kedua aman" },
  { aspect: "Ease Update", wp: "Mudah (WP admin)", headless: "WP admin + auto-pull", pick: "WP lebih simple client" },
  { aspect: "Harga", wp: "Lebih terjangkau", headless: "Premium value", pick: "Headless future-proof" },
];

const steps = [
  { step: "1", text: "Diskusikan profil bisnis Anda (UMKM/corporate) & budget range" },
  { step: "2", text: "Pilih opsi + tier, kami buatkan custom proposal" },
  { step: "3", text: "Deposit 40% — start prototype dalam 1 minggu" },
];

/* ─── Components ─── */

function CustomHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative container mx-auto px-4 py-20 md:py-28 max-w-5xl text-center">
        <motion.div
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <Code2 className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary tracking-wide">
            Premium Tech Partner
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold font-serif leading-tight tracking-tight"
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          Custom Premium{" "}
          <span className="text-primary">Web Development</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
        >
          Website custom, ringan, secure — tanpa bloating plugins.
          Modern stack untuk speed & SEO premium. Future-proof + maintenance gratis.
        </motion.p>

        <motion.p
          className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease }}
        >
          Pilih <span className="text-primary font-medium">Custom WordPress</span> (cepat, familiar)
          atau <span className="text-primary font-medium">Headless WP + Next.js</span> (modern, super cepat, premium)
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
        >
          <Link
            href={siteConfig.links.whatsappCustom}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "gap-2 gold-glow"
            )}
          >
            Konsultasi Sekarang
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#pricing-wp"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 border-primary/30 hover:bg-primary/10"
            )}
          >
            Lihat Paket & Harga
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function InclusionsSection() {
  return (
    <Section
      title="Semua Paket Include"
      subtitle="Standard di setiap tier, tanpa biaya tambahan"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {inclusions.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background/50"
          >
            <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground/80">{text}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        <span className="text-primary font-medium">Tidak termasuk:</span> Domain + hosting (estimasi di bawah)
      </p>
    </Section>
  );
}

function TierCard({
  tier,
}: {
  tier: (typeof wpTiers)[number];
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border bg-card p-6 transition-all hover:border-primary/50",
        tier.popular ? "border-primary border-2 relative gold-glow" : "border-border/50"
      )}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
          Recommended
        </span>
      )}
      <h4 className="text-lg font-semibold font-serif">{tier.name}</h4>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight text-primary">
          {tier.price}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
        <span>{tier.timeline}</span>
        <span>Maintenance {tier.maintenance}</span>
      </div>
      <ul className="mt-6 space-y-2 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
            <Check className="h-4 w-4 text-primary flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingWP() {
  return (
    <Section
      id="pricing-wp"
      title="Opsi 1"
      subtitle="Custom WordPress Template"
    >
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
        Upgrade dari WP standard: custom theme khusus, cepat, secure, premium design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {wpTiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
    </Section>
  );
}

function PricingHeadless() {
  return (
    <Section
      id="pricing-headless"
      title="Opsi 2"
      subtitle="Headless WP + Next.js Frontend"
    >
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
        Super fast SSR/SSG, modern React, Vercel deploy. WP sebagai CMS, Next.js sebagai frontend.
        Akun Vercel kami gratiskan dan di-handover.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {headlessTiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
    </Section>
  );
}

function ComparisonSection() {
  return (
    <Section
      title="Perbandingan"
      subtitle="Custom WP vs Headless Next.js (Basic Tier)"
      className="bg-card"
    >
      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-border/50 max-w-4xl mx-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-background">
              <th className="text-left p-4 font-serif font-semibold text-foreground">
                Aspek
              </th>
              <th className="text-left p-4 font-serif font-semibold text-muted-foreground">
                Custom WP
              </th>
              <th className="text-left p-4 font-serif font-semibold text-primary">
                Headless Next.js
              </th>
              <th className="text-left p-4 font-serif font-semibold text-foreground/70 text-sm">
                Rekomendasi
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={row.aspect}
                className={i % 2 === 0 ? "bg-background/50" : "bg-background"}
              >
                <td className="p-4 font-medium text-foreground">{row.aspect}</td>
                <td className="p-4 text-sm text-muted-foreground">{row.wp}</td>
                <td className="p-4 text-sm font-medium text-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {row.headless}
                  </div>
                </td>
                <td className="p-4 text-xs text-muted-foreground">{row.pick}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 max-w-lg mx-auto">
        {comparisonRows.map((row) => (
          <div
            key={row.aspect}
            className="bg-background border border-border/50 rounded-xl p-4"
          >
            <h4 className="font-semibold text-foreground mb-3">{row.aspect}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Custom WP</span>
                <span className="text-foreground/80">{row.wp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary">Headless</span>
                <span className="font-medium">{row.headless}</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{row.pick}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HostingEstimates() {
  return (
    <Section
      title="Estimasi Tambahan"
      subtitle="Domain + Hosting (Tahunan)"
    >
      <div className="overflow-hidden rounded-2xl border border-border/50 max-w-2xl mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-background">
              <th className="text-left p-4 font-serif font-semibold">Item</th>
              <th className="text-left p-4 font-serif font-semibold">Estimasi (IDR)</th>
              <th className="text-left p-4 font-serif font-semibold text-muted-foreground">Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-background/50">
              <td className="p-4 font-medium">Domain (.com/.id)</td>
              <td className="p-4 text-primary">200K - 500K</td>
              <td className="p-4 text-muted-foreground text-xs">Niagahoster / Rumahweb</td>
            </tr>
            <tr className="bg-background">
              <td className="p-4 font-medium">WP Hosting (Opsi 1)</td>
              <td className="p-4 text-primary">1-3 jt</td>
              <td className="p-4 text-muted-foreground text-xs">Shared/VPS (Hostinger/Niaga)</td>
            </tr>
            <tr className="bg-background/50">
              <td className="p-4 font-medium">Vercel (Opsi 2)</td>
              <td className="p-4 text-primary">Gratis - 2-5 jt</td>
              <td className="p-4 text-muted-foreground text-xs">Free tier cukup Lite/Basic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Total setup tahun pertama: ~2-8 jt (tergantung tier)
      </p>
    </Section>
  );
}

function CoreValue() {
  return (
    <Section
      title="Core Value"
      subtitle="Membangun Akses Digital untuk Semua"
      className="bg-card"
    >
      <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Kami ingin membantu pemilik usaha dari segala kalangan mendapatkan akses online,
        identitas digital, kredibilitas, dan sarana marketing yang proper dan premium.
        Semua bisa dibicarakan termasuk negosiasi harga — kami ingin memberikan value terbaik
        untuk segala kebutuhan usaha dan budget Anda.
      </p>
    </Section>
  );
}

function CustomCTA() {
  const { openModal } = useLeadCapture();

  return (
    <Section
      id="custom-cta"
      title="Langkah Selanjutnya"
      subtitle="Mulai Bangun Website Premium Anda"
      className="bg-card rounded-2xl border border-border/50"
    >
      <div className="max-w-2xl mx-auto mb-8">
        <div className="space-y-4">
          {steps.map(({ step, text }) => (
            <div key={step} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {step}
              </span>
              <p className="text-foreground/80 text-sm pt-1.5">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href={siteConfig.links.whatsappCustom}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "gap-2 gold-glow"
          )}
        >
          Konsultasi via WhatsApp
          <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          onClick={openModal}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "gap-2 border-primary/30 hover:bg-primary/10"
          )}
        >
          Isi Form Konsultasi
        </button>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        <span className="text-primary font-semibold">Build fast, scale forever.</span>
      </p>
    </Section>
  );
}

/* ─── Page ─── */

export default function CustomPage() {
  return (
    <main>
      <Header />
      <CustomHero />
      <InclusionsSection />
      <PricingWP />
      <PricingHeadless />
      <ComparisonSection />
      <HostingEstimates />
      <CoreValue />
      <CustomCTA />
      <Footer />
    </main>
  );
}
