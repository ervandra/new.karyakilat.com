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
        Your Business Deserves More Than a Linktree
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
      </motion.div>
      <motion.p
        className="mt-6 text-sm text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <span className="text-primary font-medium">Slot tersedia</span> bulan ini.
      </motion.p>
    </>
  );
}

export default function Hero2() {
  return (
    <section id="hero" className="relative min-h-[70vh] overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
      >
        <img 
          src="/images/digital-command-center.jpg" 
          alt="Digital Command Center - Your Premium Digital Headquarters"
          className="w-full h-full object-cover opacity-10"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
      </div>
      
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
