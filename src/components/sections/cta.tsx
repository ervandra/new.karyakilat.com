"use client";

import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useLeadCapture } from "@/components/lead-capture-context";
import { MessageCircle } from "lucide-react";

export default function CtaSection() {
  const { openModal } = useLeadCapture();

  return (
    <Section
      id="cta"
      title="Siap Meningkatkan Personal Branding?"
      subtitle="Jangan tunda lagi, miliki microsite premium sekarang."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <button
          onClick={openModal}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          <Icons.logo className="h-6 w-6" />
          Buat Microsite Sekarang
        </button>
        <Link
          href={siteConfig.links.whatsapp}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full sm:w-auto flex gap-2"
          )}
        >
          <MessageCircle className="h-5 w-5" />
          Hubungi Sales via WhatsApp
        </Link>
      </div>
    </Section>
  );
}
