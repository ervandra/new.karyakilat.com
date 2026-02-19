"use client";

import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Crown, Building2, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Pricing() {
  const plans = [
    {
      name: "Signature",
      price: "Rp 9,750,000",
      regularPrice: "Rp 15,000,000",
      period: "Founding Rate",
      description: "Your professional digital front door. One powerful page — built to convert the moment someone Googles you.",
      features: [
        "Long-form single-page design (Hero, Services, Testimonials, CTA)",
        "Custom domain & hosting configuration",
        "WhatsApp click-to-chat with pre-filled lead message",
        "Mobile-first, tested across devices",
        "Basic on-page SEO (meta tags, sitemap, GSC submission)",
        "30-day post-launch support via WhatsApp",
        "Handover walkthrough — Zoom or recorded Loom",
      ],
      buttonText: "Apply for Invitation",
      href: siteConfig.links.whatsappSignature,
      isPopular: false,
      disabled: false,
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "Sovereign",
      price: "Rp 22,500,000",
      regularPrice: "Rp 35,000,000",
      period: "Founding Rate",
      description: "Your full multi-page digital presence — built with strategy, written for you, and managed so you never have to touch it.",
      features: [
        "4–6 custom pages (Home, About, Services, Portfolio, Contact)",
        "60-min brand strategy session — we extract your story",
        "Professional copywriting — we write all page content for you",
        "Tool integration: we connect your existing booking/CRM (Calendly, HubSpot, etc.) — platform costs are yours",
        "Content update support — send us changes, live in 3 business days (up to 2×/month)",
        "Dedicated point of contact — one person who knows your business",
        "60-day concierge support via WhatsApp",
        "SEO 20-point checklist (on-page + technical)",
      ],
      buttonText: "Apply for Invitation",
      href: siteConfig.links.whatsappSovereign,
      isPopular: true,
      disabled: false,
      icon: <Crown className="w-5 h-5" />,
    },
    {
      name: "Authority",
      price: "Rp 45,000,000",
      regularPrice: "Rp 65,000,000",
      period: "Founding Rate",
      description: "A long-term digital partnership. We become part of your growth strategy — not just your vendor.",
      features: [
        "Everything in Sovereign",
        "Local SEO strategy: Google Business Profile, local keywords, GSC monitoring",
        "Dedicated lead capture pages for campaigns — with WA notification integration",
        "Monthly analytics report: traffic, lead sources, top pages (GA4 + GSC)",
        "4× annual strategy sessions: we review performance and plan your next quarter",
        "Written SLA: critical issues fixed in 24h, updates within 3 business days",
        "Priority direct WhatsApp line — fastest response across all tiers",
      ],
      buttonText: "Apply for Invitation",
      href: siteConfig.links.whatsappAuthority,
      isPopular: false,
      disabled: false,
      icon: <Building2 className="w-5 h-5" />,
    },
  ];

  return (
    <Section
      title="Invest in Your Digital Authority"
      subtitle="Three levels of Digital Business Management — each engineered for business leaders in BSD & Gading Serpong"
    >
      {/* Founding Partner Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Founding Partner Program — Feb–Apr 2026 Only
          </span>
        </div>
      </div>

      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Founding rates are the only rates we&apos;ll ever offer at this level.
        After the program closes, prices increase permanently. Lock yours in now.
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 py-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col justify-between rounded-2xl border bg-card p-8 transition-all hover:border-primary/50",
              plan.isPopular ? "border-primary border-2 relative gold-glow" : "border-border/50",
              plan.disabled && "opacity-60 grayscale"
            )}
          >
            {plan.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                Recommended
              </span>
            )}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-primary">{plan.icon}</div>
                <h3 className="text-lg font-semibold font-serif">{plan.name}</h3>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 line-through opacity-60">
                Regular: {plan.regularPrice}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>
              {plan.features.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link
                href={plan.href}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: plan.isPopular ? "default" : "outline" }),
                  "mt-8 w-full",
                  plan.isPopular ? "gold-glow" : "border-primary/30 hover:bg-primary/10",
                  plan.disabled && "pointer-events-none opacity-50"
                )}
            >
                {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Founding rates guaranteed until program closes in April 2026.
        After that, prices increase permanently. No exceptions.
      </p>
    </Section>
  );
}
