"use client";

import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "BASIC",
      price: "Rp 99rb",
      period: "/ bulan",
      description: "Cocok untuk personal branding pemula",
      features: [
        "1 Halaman Microsite Premium",
        "Custom Subdomain (karyakilat.com/anda)",
        "5 Section Konten (Profil, Layanan, Portofolio, Testimoni, Kontak)",
        "Tombol WhatsApp Terintegrasi",
        "Mobile Responsive Design",
        "Revisi Desain Unlimited (7 hari pertama)",
        "Lifetime Hosting & Maintenance",
      ],
      buttonText: "Pilih Basic",
      href: "https://wa.me/6285124354868?text=Halo%2C%20saya%20mau%20order%20paket%20BASIC",
      isPopular: false,
      disabled: false,
    },
    {
      name: "STANDARD",
      price: "Coming Soon",
      period: "",
      description: "Fitur lebih lengkap untuk bisnis berkembang.",
      features: [],
      buttonText: "Segera Hadir",
      href: "#",
      isPopular: false,
      disabled: true,
    },
    {
      name: "PRO",
      price: "Coming Soon",
      period: "",
      description: "Solusi ultimate untuk profesional.",
      features: [],
      buttonText: "Segera Hadir",
      href: "#",
      isPopular: false,
      disabled: true,
    },
  ];

  return (
    <Section title="Harga" subtitle="Pilih paket yang sesuai dengan kebutuhan Anda.">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 py-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col justify-between rounded-xl border bg-background p-8 shadow-sm transition-all hover:shadow-md",
              plan.isPopular ? "border-primary border-2 relative" : "border-border",
              plan.disabled && "opacity-60 grayscale"
            )}
          >
            {plan.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </span>
            )}
            <div>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline text-3xl font-bold tracking-tight">
                {plan.price}
                <span className="text-sm font-semibold text-muted-foreground ml-1">
                  {plan.period}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {plan.description}
              </p>
              {plan.features.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link
              href={plan.href}
              className={cn(
                buttonVariants({
                  variant: plan.isPopular ? "default" : "outline",
                }),
                "mt-8 w-full",
                plan.disabled && "pointer-events-none opacity-50"
              )}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
