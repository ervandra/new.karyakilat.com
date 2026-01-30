"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { useLeadCapture } from "@/components/lead-capture-context";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

function HeroPill() {
  return (
    <motion.div
      className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
        ⚡ Solusi Kilat
      </div>
      <p className="text-xs font-medium text-primary sm:text-sm">
        Microsite Premium & Terjangkau
      </p>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-5xl font-bold leading-tight tracking-tighter text-foreground sm:text-6xl md:text-7xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
        }}
      >
        Bangun <span className="text-primary">Aset Digital</span> Anda dalam 24 Jam
      </motion.h1>
      <motion.p
        className="mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Transformasi profesional Anda dari sekadar kontak menjadi sistem otoritas digital. 1 Link. 100% Kredibilitas.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  const { openModal } = useLeadCapture();

  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
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
          Konsultasi Gratis
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Proses cepat 1x24 jam. Revisi sampai puas.
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
      <div className="relative aspect-video w-full max-w-screen-lg mt-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg border">
        <div className="text-center text-white">
          <PlayCircle className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <p className="text-lg font-semibold">Lihat Demo Microsite</p>
          <p className="text-sm opacity-80">(Video akan segera hadir)</p>
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

