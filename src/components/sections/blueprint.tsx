"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import { 
  Search, 
  Layout, 
  Paintbrush, 
  Gauge, 
  Rocket, 
  GraduationCap,
  Gift,
  Key,
  Check
} from "lucide-react";

const phases = [
  {
    days: "Day 1-2",
    title: "Discovery",
    description: "Strategic Brief, Competitor Snapshot, Customer Avatar",
    icon: Search,
  },
  {
    days: "Day 3-5",
    title: "Architecture",
    description: "Wireframes, Brand Direction, Copy Framework",
    icon: Layout,
  },
  {
    days: "Day 6-10",
    title: "Creation",
    description: "Design Mockups, Staging Website, QA Report",
    icon: Paintbrush,
  },
  {
    days: "Day 11-12",
    title: "Optimization",
    description: "Speed < 2s, SEO 20-point Checklist, Analytics Dashboard",
    icon: Gauge,
  },
  {
    days: "Day 13",
    title: "Launch",
    description: "Live Website, Launch Kit, QR Code, WA Lead System",
    icon: Rocket,
  },
  {
    days: "Day 14",
    title: "Empowerment",
    description: "Training Video, Full Admin Access, 30-Day Support",
    icon: GraduationCap,
  },
];

const bonuses = [
  "Social media banners (3 sizes)",
  "Email signature design",
  "Google Business Profile setup",
  "Content calendar template (12 weeks)",
];

const ownership = [
  "Domain & Hosting — milik Anda 100%",
  "Design Source Files (Figma) — milik Anda",
  "Analytics Data — akses penuh",
  "Optional: Full Handover Management",
];

const handoverNote = "Kami rekomendasikan untuk di-handle oleh Karya Kilat. Satu pintu, satu management, satu ownership — Anda fokus bisnis, aset digital aman di tangan profesional.";

export default function Blueprint() {
  return (
    <Section
      id="blueprint"
      title="Bukan 'Kucing Dalam Karung'"
      subtitle="Ini Yang Anda Terima — Hari per Hari, Transparan 100%"
      className="bg-card"
    >
      <p className="text-center text-primary font-semibold text-lg mb-12">
        14 Hari. 6 Fase. 45+ Deliverables. Ownership Penuh.
      </p>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <phase.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {phase.days}
                </span>
              </div>
              <h4 className="font-serif font-semibold text-lg text-foreground mb-2">
                {phase.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bonus & Ownership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bonus Card */}
          <motion.div
            className="bg-background border border-primary/30 rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-lg text-foreground">
                  Included Bonus
                </h4>
                <p className="text-xs text-primary font-medium">Value Rp 5jt+</p>
              </div>
            </div>
            <ul className="space-y-3">
              {bonuses.map((bonus, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {bonus}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ownership Card */}
          <motion.div
            className="bg-background border border-primary/30 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Key className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif font-semibold text-lg text-foreground">
                100% Ownership Guarantee
              </h4>
            </div>
            <ul className="space-y-3">
              {ownership.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground border-t border-border/30 pt-4 leading-relaxed">
              {handoverNote}
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
