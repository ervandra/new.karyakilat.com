"use client";

import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useLeadCapture } from "@/components/lead-capture-context";
import { Calendar } from "lucide-react";

export default function CtaSection() {
  const { openModal } = useLeadCapture();

  return (
    <Section
      id="cta"
      title="Ready to Close the Reputation Gap?"
      subtitle="Join BSD & Gading Serpong leaders who've elevated their digital presence."
      className="bg-card rounded-2xl py-16 border border-border/50"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <button
          onClick={openModal}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "w-full sm:w-auto text-primary-foreground flex gap-2 gold-glow"
          )}
        >
          <Icons.logo className="h-5 w-5" />
          Mulai Konsultasi
        </button>
        <Link
          href={siteConfig.links.whatsapp}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "w-full sm:w-auto flex gap-2 border-primary/30 hover:bg-primary/10"
          )}
        >
          <Calendar className="h-5 w-5" />
          Jadwalkan Konsultasi
        </Link>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        <span className="text-primary font-medium">Slot tersedia</span> bulan ini
      </p>
    </Section>
  );
}

