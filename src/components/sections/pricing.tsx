"use client";

import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Crown, Building2, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { useLeadCapture } from "@/components/lead-capture-context";

export default function Pricing() {
  const { openModal } = useLeadCapture();

  const plans = [
    {
      name: "Professional",
      price: "Rp 4.950.000",
      period: "(Start From)",
      description: "Single Page Authority Hub. 25+ Deliverables.",
      features: [
        "Bespoke single-page design",
        "Custom domain setup",
        "WhatsApp integration",
        "Mobile-first optimization",
        "30-day priority support",
        "Training walkthrough",
        "SEO basics included",
      ],
      buttonText: "Request Details",
      href: siteConfig.links.whatsapp,
      isPopular: false,
      disabled: false,
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "Executive",
      price: "Rp 11.960.000",
      period: "(Beta)",
      description: "Multi-page Command Center. 40+ Deliverables. 60-Day Support.",
      features: [
        "Multi-page command center",
        "Brand strategy session",
        "Professional copywriting",
        "Advanced integrations (CRM, booking)",
        "60-day concierge support",
        "Monthly content updates",
        "Dedicated account manager",
        "SEO 20-point checklist",
      ],
      buttonText: "Book Consultation",
      href: "#",
      isPopular: true,
      disabled: false,
      icon: <Crown className="w-5 h-5" />,
    },
    {
      name: "Authority",
      price: "Rp 24.970.000",
      period: "(Beta)",
      description: "Complete Digital Ecosystem. Quarterly Strategy Reviews.",
      features: [
        "Everything in Executive",
        "SEO & local search dominance",
        "Lead generation systems",
        "Performance analytics",
        "Quarterly strategic reviews",
        "SLA guarantee",
        "Priority WhatsApp support",
      ],
      buttonText: "Request Invitation",
      href: siteConfig.links.whatsapp,
      isPopular: false,
      disabled: false,
      icon: <Building2 className="w-5 h-5" />,
    },
  ];

  return (
    <Section 
      title="Partnership Tiers" 
      subtitle="Investment levels designed for serious business owners"
    >
      {/* Founding Client Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Founding Client Program (Feb-Mar 2026)
          </span>
        </div>
      </div>

      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Beta pricing untuk founding clients. Harga akan naik setelah program berakhir.
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
            {plan.isPopular ? (
              <button
                onClick={openModal}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-8 w-full gold-glow",
                  plan.disabled && "pointer-events-none opacity-50"
                )}
              >
                {plan.buttonText}
              </button>
            ) : (
              <Link
                href={plan.href}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-8 w-full border-primary/30 hover:bg-primary/10",
                  plan.disabled && "pointer-events-none opacity-50"
                )}
              >
                {plan.buttonText}
              </Link>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Currently accepting only <span className="text-primary font-medium">5 clients per quarter</span> to maintain concierge quality.
      </p>
    </Section>
  );
}
