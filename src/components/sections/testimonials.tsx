"use client";

import Section from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star, Users, Award, MessageCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    value: "3",
    label: "Klien per bulan",
    description: "Kami sengaja batasi untuk menjaga standar concierge",
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    value: "14",
    label: "Hari delivery",
    description: "Dari konsultasi hingga digital presence Anda live",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    value: "20",
    label: "Menit waktu Anda",
    description: "Total yang kami butuhkan dari Anda. Sisanya kami yang urus",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Founding Partner Program"
      subtitle="Kami baru saja membuka pintu — dan kami memilih dengan selektif"
      className="max-w-8xl"
    >
      <div className="mx-auto max-w-4xl mt-8">
        {/* Honest Framing */}
        <motion.div
          className="text-center mb-12 p-8 rounded-2xl border border-primary/20 bg-primary/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Karya Kilat baru diluncurkan — dan kami sengaja memulai dengan cara yang berbeda.{" "}
            <span className="text-primary font-semibold">
              Founding Partners mendapatkan harga terbaik yang tidak akan kami tawarkan lagi
            </span>{" "}
            setelah program ini berakhir. Sebagai gantinya, kami meminta satu hal: izin untuk menjadikan
            perjalanan digital Anda sebagai kisah sukses pertama kami.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary font-serif mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Social proof placeholder — honest */}
        <motion.div
          className="text-center p-8 rounded-2xl border border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
            ))}
          </div>
          <p className="text-muted-foreground italic mb-6 max-w-xl mx-auto">
            "Kisah sukses pertama sedang dalam proses. Jadilah Founding Partner kami — 
            dan biarkan digital presence Anda menjadi bukti nyata pertama Karya Kilat."
          </p>
          <Link
            href={siteConfig.links.whatsapp}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-primary/30 hover:bg-primary/10"
            )}
          >
            Hubungi Kami di WhatsApp
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
