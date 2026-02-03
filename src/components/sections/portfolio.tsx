"use client";

import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { Globe, Sparkles, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Property Agent Portfolio",
    clientType: "Premium Property Agent",
    location: "Gading Serpong",
    scope: "Single Page Authority Hub",
    result: "+47% Leads dalam 30 hari",
    resultIcon: <TrendingUp className="w-4 h-4" />,
    description:
      "Website profesional dengan WhatsApp integration dan lead capture untuk agen properti premium.",
    features: ["WhatsApp Direct", "Lead Form", "Property Gallery", "Mobile-First"],
    isDemo: true,
  },
  {
    title: "Beauty Clinic Booking",
    clientType: "Klinik Kecantikan",
    location: "BSD City",
    scope: "Multi-page + Booking System",
    result: "Premium Brand Perception",
    resultIcon: <Sparkles className="w-4 h-4" />,
    description:
      "Command center lengkap dengan sistem booking online dan integrasi Google Maps.",
    features: ["Online Booking", "Treatment Menu", "Google Maps", "Before/After Gallery"],
    isDemo: true,
  },
  {
    title: "Tax Consultant Hub",
    clientType: "Konsultan Pajak",
    location: "Alam Sutera",
    scope: "Authority Page + SEO",
    result: "Page 1 Google",
    resultIcon: <Globe className="w-4 h-4" />,
    description:
      "Website authority dengan SEO optimization yang berhasil ranking di halaman pertama Google.",
    features: ["SEO Optimized", "Service Pages", "FAQ Section", "Contact Forms"],
    isDemo: true,
  },
];

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Hasil Karya Kami"
      subtitle="Sample projects yang menunjukkan standar kualitas Digital Headquarters"
    >
      <p className="text-center text-sm text-muted-foreground mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <Sparkles className="w-3 h-3 text-primary" />
          Demo Projects - Real client portfolio coming soon
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "group relative rounded-2xl border border-border/50 bg-card overflow-hidden",
              "transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            )}
          >
            {/* Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Preview Image</p>
              </div>
              {/* Result Badge */}
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                  {project.resultIcon}
                  {project.result}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full border border-primary/30 text-foreground/80">
                  {project.clientType}
                </span>
                {project.isDemo && (
                  <span className="text-xs px-2 py-0.5 rounded-full border border-muted-foreground/30 text-muted-foreground">
                    Demo
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold font-serif text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {project.location} &bull; {project.scope}
              </p>

              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
