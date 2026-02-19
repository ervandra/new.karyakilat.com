"use client";

import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useLeadCapture } from "@/components/lead-capture-context";
export default function CtaSection() {
  const { openModal } = useLeadCapture();

  return (
    <Section
      id="cta"
      title="Siap Tampil Sebagai Pemimpin Digital?"
      subtitle="Bergabung bersama business owners BSD & Gading Serpong yang telah membangun digital presence mereka bersama kami."
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
          Apply for Invitation
        </button>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Hanya <span className="text-primary font-medium">3 slot tersedia</span> per bulan — untuk menjaga standar concierge kami.
      </p>
    </Section>
  );
}

