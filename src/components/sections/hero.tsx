"use client";

import { motion } from "framer-motion";
import { Calendar, Shield } from "lucide-react";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { useLeadCapture } from "@/components/lead-capture-context";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";

const ease = [0.16, 1, 0.3, 1] as const;

function HeroPill() {
  return (
    <motion.div
      className="flex w-auto items-center space-x-2 rounded-full bg-primary/10 px-3 py-1.5 ring-1 ring-primary/30 whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <Shield className="w-4 h-4 text-primary" />
      <p className="text-xs font-medium text-primary sm:text-sm tracking-wide">
        Executive Concierge Service
      </p>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-3xl flex-col space-y-6 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-serif"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
        }}
      >
        Your Digital Headquarters.{" "}
        <span className="text-primary">Professionally Managed.</span>
      </motion.h1>
      <motion.p
        className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        White-glove digital infrastructure untuk CEO & komunitas eksklusif mereka.
        Zero hassle. Maximum authority.
      </motion.p>
      <motion.p
        className="mx-auto max-w-2xl text-center text-sm sm:text-base leading-relaxed text-primary font-medium mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease,
        }}
      >
        Website Premium Done-for-You dalam 14 Hari — Anda Fokus Bisnis, Kami Urus Sisanya.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  const { openModal } = useLeadCapture();

  return (
    <>
      <motion.div
        className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <button
          onClick={openModal}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "w-full sm:w-auto text-primary-foreground flex gap-2 gold-glow"
          )}
        >
          <Icons.logo className="h-5 w-5" />
          Request Private Invitation
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
          Book Strategy Call
        </Link>
      </motion.div>
      <motion.p
        className="mt-6 text-sm text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Currently accepting only <span className="text-primary font-medium">3 new partnerships</span> this month.
      </motion.p>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <div className="relative aspect-video w-full max-w-screen-lg mt-16 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl flex items-center justify-center border border-primary/20 overflow-hidden">
        <BorderBeam 
          size={400}
          duration={10}
          colorFrom="#d4af37"
          colorTo="#ffd700"
          borderWidth={2}
        />
        <div className="text-center text-foreground/80">
          <Icons.logo className="w-16 h-16 mx-auto mb-4 text-primary opacity-60" />
          <p className="text-lg font-serif font-medium">Digital Headquarters Preview</p>
          <p className="text-sm opacity-60 mt-1">Bespoke designs for select clients</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  );
}
