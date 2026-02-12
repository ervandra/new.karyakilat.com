"use client";

import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Code2, Layout, Server, Shield } from "lucide-react";
import Link from "next/link";

const highlights = [
  { icon: Layout, text: "Premium Custom Design" },
  { icon: Code2, text: "5+ Halaman & Fitur Lanjutan" },
  { icon: Server, text: "CMS / Back-Office" },
  { icon: Shield, text: "Maintenance & Support" },
];

export default function CustomBanner() {
  return (
    <Section
      id="custom-web"
      title="Beyond Microsite"
      subtitle="Custom Premium Web Development"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Butuh lebih dari microsite? Website multi-halaman dengan desain premium,
          fitur advanced, dan CMS untuk kelola konten sendiri.
          Solusi lengkap untuk bisnis yang siap scale.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {highlights.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 bg-background/50"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-center text-foreground/80">{text}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Mulai dari <span className="text-primary font-semibold">Rp 15 juta</span> &mdash;
            Custom WordPress atau Headless Next.js
          </p>
          <Link
            href="/custom"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "gap-2 gold-glow"
            )}
          >
            Lihat Paket Custom
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
