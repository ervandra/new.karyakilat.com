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
  { icon: Palette, text: "Premium custom UI/UX design (all tiers)" },
  { icon: Mail, text: "Contact form + newsletter integration (Mailchimp/Brevo)" },
  { icon: Headphones, text: "Free maintenance 3–6 months (by tier)" },
  { icon: Shield, text: "Free support 1 year+ (WhatsApp/Email)" },
  { icon: Search, text: "Basic SEO + performance optimization" },
  { icon: Gauge, text: "Core Web Vitals 90+ (speed & cache tuning)" },
  { icon: Settings, text: "Infra setup: WP content auto-syncs to frontend" },
];

const wpTiers = [
  {
    name: "Catalyst",
    price: "Rp 35,000,000",
    timeline: "2–3 weeks",
    maintenance: "3 months",
    description: "Company profile platform. 5–10 custom pages, WP CMS admin, mobile-first, and built to make your team self-sufficient.",
    features: [
      "Company profile (5–10 pages)",
      "Lightweight custom theme",
      "Mobile-first responsive",
      "1 design revision",
    ],
  },
  {
    name: "Architect",
    price: "Rp 65,000,000",
    timeline: "3–4 weeks",
    maintenance: "6 months",
    popular: true,
    description: "Multi-feature command platform. Booking, forms, advanced integrations, and CMS your team can own — no developer dependency after handover.",
    features: [
      "Everything in Catalyst",
      "Form & booking system",
      "Advanced SEO",
      "1–2 API integrations (WA/Email)",
      "3 design revisions",
    ],
  },
  {
    name: "Sovereign",
    price: "Rp 115,000,000",
    timeline: "4–5 weeks",
    maintenance: "6 months+",
    description: "Enterprise-grade WordPress. Complex custom features, performance hardening, unlimited revision cycles, and a dedicated 6-month support line.",
    features: [
      "Everything in Architect",
      "Advanced custom features",
      "Performance tuning",
      "Unlimited dev revisions",
      "Training & full handover",
    ],
  },
];

const headlessTiers = [
  {
    name: "Catalyst",
    price: "Rp 55,000,000",
    timeline: "3 weeks",
    maintenance: "3 months",
    description: "Modern SSG architecture. WP backend your team knows, Next.js frontend your clients experience at elite speed.",
    features: [
      "Headless WP backend",
      "Custom Next.js frontend (SSG)",
      "PWA-ready",
      "Vercel hosting included",
    ],
  },
  {
    name: "Architect",
    price: "Rp 95,000,000",
    timeline: "4 weeks",
    maintenance: "6 months",
    popular: true,
    description: "Dynamic ISR with real-time content. Full WP admin + Next.js frontend with advanced SEO infrastructure and performance tuning.",
    features: [
      "Everything in Catalyst",
      "Dynamic ISR (real-time content updates)",
      "Advanced performance & SEO",
    ],
  },
  {
    name: "Sovereign",
    price: "Rp 175,000,000",
    timeline: "5–6 weeks",
    maintenance: "6 months+",
    description: "Your flagship digital platform. Custom optimizations, full Vercel setup, elite Lighthouse scores, and a handover that makes your team fully independent.",
    features: [
      "Everything in Architect",
      "Custom optimizations (image lazy-load, etc.)",
      "Full Vercel setup & handover",
    ],
  },
];

const comparisonRows = [
  { aspect: "Speed", wp: "Great (optimized)", headless: "Elite (SSR/SSG, Lighthouse 100)", pick: "Headless for high-traffic sites" },
  { aspect: "Design", wp: "High (fully custom)", headless: "Flexible (React)", pick: "Headless feels more modern" },
  { aspect: "Security", wp: "Hardened", headless: "High (static API)", pick: "Both are secure" },
  { aspect: "Easy Updates", wp: "Easy (WP admin)", headless: "WP admin + auto-sync", pick: "WP is simpler for clients" },
  { aspect: "Price", wp: "More affordable", headless: "Premium value", pick: "Headless is more future-proof" },
];

const steps = [
  { step: "1", text: "Tell us about your business and budget — no pressure, no forms" },
  { step: "2", text: "Pick your option and tier; we'll send you a detailed proposal" },
  { step: "3", text: "40% deposit to kick off — prototype ready within 1 week" },
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
            Bespoke Digital Engineering
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
          Beyond a microsite, we engineer full-scale digital platforms — custom-built, future-proof, and backed by professional maintenance. When your business needs infrastructure, not just presence.
        </motion.p>

        <motion.p
          className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease }}
        >
          Two tracks: <span className="text-primary font-medium">Custom WordPress</span> for ease and familiarity. <span className="text-primary font-medium">Headless Next.js + WP</span> for elite performance and modern architecture. Both built to last.
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
            Talk to Us Now
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#pricing-wp"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 border-primary/30 hover:bg-primary/10"
            )}
          >
            See Packages & Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function InclusionsSection() {
  return (
    <Section
      title="Everything Included"
      subtitle="Standard across every tier — no hidden fees, ever"
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
        Domain &amp; hosting setup: we recommend and configure — you own it. Costs vary by scale.
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
        <span>Delivered in {tier.timeline}</span>
        <span>Maintenance {tier.maintenance}</span>
      </div>
      {tier.description && (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {tier.description}
        </p>
      )}
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
      title="Option 1"
      subtitle="Custom WordPress"
    >
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
        Professional-grade WordPress — purpose-built, not templated. Every installation is architected from scratch for your business logic.
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
      title="Option 2"
      subtitle="Headless WP + Next.js Frontend"
    >
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
        The engineering choice for businesses that demand elite performance. WordPress handles your content; Next.js delivers it at Lighthouse 100 speed.
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
      title="Side-by-Side Comparison"
      subtitle="Custom WP vs Headless Next.js (Basic Tier)"
      className="bg-card"
    >
      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-border/50 max-w-4xl mx-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-background">
              <th className="text-left p-4 font-serif font-semibold text-foreground">
                Aspect
              </th>
              <th className="text-left p-4 font-serif font-semibold text-muted-foreground">
                Custom WP
              </th>
              <th className="text-left p-4 font-serif font-semibold text-primary">
                Headless Next.js
              </th>
              <th className="text-left p-4 font-serif font-semibold text-foreground/70 text-sm">
                Our Pick
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
      title="Estimated Add-Ons"
      subtitle="Domain + Hosting (Yearly)"
    >
      <div className="overflow-hidden rounded-2xl border border-border/50 max-w-2xl mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-background">
              <th className="text-left p-4 font-serif font-semibold">Item</th>
              <th className="text-left p-4 font-serif font-semibold">Estimate (IDR)</th>
              <th className="text-left p-4 font-serif font-semibold text-muted-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-background/50">
              <td className="p-4 font-medium">Domain (.com/.id)</td>
              <td className="p-4 text-primary">200K - 500K</td>
              <td className="p-4 text-muted-foreground text-xs">Niagahoster / Rumahweb</td>
            </tr>
            <tr className="bg-background">
              <td className="p-4 font-medium">WP Hosting (Option 1)</td>
              <td className="p-4 text-primary">1-3 jt</td>
              <td className="p-4 text-muted-foreground text-xs">Shared/VPS (Hostinger/Niaga)</td>
            </tr>
            <tr className="bg-background/50">
              <td className="p-4 font-medium">Vercel (Option 2)</td>
              <td className="p-4 text-primary">Free – 2-5 jt</td>
              <td className="p-4 text-muted-foreground text-xs">Free tier covers Lite & Basic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Total first-year setup: ~2–8 jt (depends on tier)
      </p>
    </Section>
  );
}

function CoreValue() {
  return (
    <Section
      title="Why Karya Kilat for Custom Development?"
      subtitle="Precision engineering. No agency bloat."
      className="bg-card"
    >
      <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Custom web development shouldn&apos;t take 6 months and feel like a black box.
        We run tight, transparent builds — weekly check-ins, staging previews at each phase,
        and a handover that actually makes sense. 15+ years of engineering. Zero tolerance for tech debt.
      </p>
    </Section>
  );
}

function CustomCTA() {
  const { openModal } = useLeadCapture();

  return (
    <Section
      id="custom-cta"
      title="Ready to Get Started?"
      subtitle="Tell us your vision. We'll tell you the right track and timeline."
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
          Chat Us on WhatsApp
          <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          onClick={openModal}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "gap-2 border-primary/30 hover:bg-primary/10"
          )}
        >
          Fill Out Inquiry Form
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
      <CoreValue />
      <CustomCTA />
      <Footer />
    </main>
  );
}
