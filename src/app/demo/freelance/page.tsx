"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Zap,
  Package,
  Server,
  Shield,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Star,
  Github,
  Layers,
  Clock,
  Terminal,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

// ─── Helpers ───────────────────────────────────────────────────────────────────

function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono text-xs px-2 py-1 rounded border", className)}>
      {children}
    </span>
  );
}

function BlueButton({
  children,
  variant = "solid",
  className,
  href = "https://wa.me/6281234567890",
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-lg",
        variant === "solid"
          ? "bg-[#0EA5E9] text-[#0D1117] hover:bg-[#38BDF8] shadow-[0_0_24px_rgba(14,165,233,0.35)]"
          : "border border-[#0EA5E9]/40 text-[#0EA5E9] hover:bg-[#0EA5E9]/10",
        className
      )}
    >
      {children}
    </Link>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────────

const STACK = [
  "Flutter", "Dart", "React Native", "Node.js", "Firebase",
  "PostgreSQL", "REST API", "GraphQL", "AWS", "Play Store",
  "App Store", "Git", "Figma", "Docker", "TypeScript",
];

const APPS = [
  {
    name: "QuickServ",
    category: "F&B Ordering App",
    desc: "Mobile ordering system for 12-outlet restaurant chain. Real-time kitchen display, loyalty points, and cashierless checkout.",
    stack: ["Flutter", "Firebase", "Node.js"],
    rating: "4.8",
    downloads: "10K+",
    color: "#8B5CF6",
  },
  {
    name: "LogiTrack",
    category: "Logistics & Delivery",
    desc: "Driver tracking, POD capture, and route optimization for courier company managing 500+ daily deliveries.",
    stack: ["Flutter", "Google Maps API", "Firebase"],
    rating: "4.6",
    downloads: "5K+",
    color: "#0EA5E9",
  },
  {
    name: "WalletKu",
    category: "Personal Finance",
    desc: "Expense tracker with smart categorization, budget alerts, and Indonesian bank integration via Open API.",
    stack: ["React Native", "PostgreSQL", "AWS"],
    rating: "4.9",
    downloads: "25K+",
    color: "#22C55E",
  },
  {
    name: "KlinikGo",
    category: "Health Tech",
    desc: "Doctor appointment booking, medical record access, and telemedicine for 8-clinic network in Jabodetabek.",
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    rating: "4.7",
    downloads: "8K+",
    color: "#F59E0B",
  },
];

const FAQS = [
  {
    q: "Apakah source code menjadi milik saya setelah project selesai?",
    a: "Ya, 100%. Pada hari terakhir project, seluruh source code, aset desain, dan akses repository diserahkan penuh kepada Anda. Tidak ada lock-in.",
  },
  {
    q: "Bagaimana jika saya tidak mengerti teknis sama sekali?",
    a: "Justru ini yang sering terjadi. Saya terbiasa bekerja dengan owner yang non-teknis — saya yang urus semua keputusan teknis dan laporan dalam bahasa yang mudah dimengerti.",
  },
  {
    q: "Berapa lama proses pengembangan app?",
    a: "Starter App: 4 minggu. Business App: 8 minggu. Full Product MVP: 14 minggu. Timeline ini sudah termasuk revisi dan testing.",
  },
  {
    q: "Apakah bisa custom di luar paket yang ada?",
    a: "Bisa. Semua paket bisa dikustomisasi. Hubungi saya via WhatsApp dan kita diskusi kebutuhan Anda — tanpa biaya konsultasi.",
  },
];

// ─── Sections ──────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-lg overflow-hidden bg-[#161B22]"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
          >
            <span className="font-mono text-sm text-[#E6EDF3]">{faq.q}</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-[#0EA5E9] shrink-0 transition-transform",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-[#8B949E] leading-relaxed border-t border-white/10 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export default function FreelanceMobileDevDemo() {
  return (
    <div className="bg-[#0D1117] text-[#E6EDF3] font-sans min-h-screen">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#0EA5E9]" />
            <span className="font-mono text-sm font-bold">rizky.dev</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#8B949E]">
            <Link href="#services" className="hover:text-[#E6EDF3] transition-colors">Services</Link>
            <Link href="#portfolio" className="hover:text-[#E6EDF3] transition-colors">Portfolio</Link>
            <Link href="#process" className="hover:text-[#E6EDF3] transition-colors">Process</Link>
            <Link href="#faq" className="hover:text-[#E6EDF3] transition-colors">FAQ</Link>
          </div>
          <BlueButton href="https://wa.me/6281234567890" className="text-xs px-4 py-2">
            Hire Me
          </BlueButton>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center pt-20 pb-16 px-4 relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#161B22_1px,transparent_1px),linear-gradient(to_bottom,#161B22_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="font-mono text-xs text-[#8B949E]">Available for new projects — Mar 2026</span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              I Build{" "}
              <span className="text-[#0EA5E9]">Mobile Apps</span>{" "}
              <br className="hidden md:block" />
              That{" "}
              <span className="text-[#8B5CF6]">Actually Work.</span>
            </h1>
            <p className="text-xl text-[#8B949E] max-w-xl leading-relaxed">
              Flutter & React Native developer. 12+ published apps. Enterprise-quality code without the agency price tag or the agency timeline.
            </p>
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <BlueButton className="text-base px-8 py-4">
              <Smartphone className="w-4 h-4" /> Let&apos;s Build Your App
            </BlueButton>
            <BlueButton variant="ghost" href="#portfolio" className="text-base px-8 py-4">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </BlueButton>
          </motion.div>

          {/* Bento stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { label: "Apps Shipped", value: "12+", icon: Smartphone, color: "#0EA5E9" },
              { label: "Happy Clients", value: "20+", icon: Star, color: "#F59E0B" },
              { label: "GitHub Commits", value: "2,400+", icon: Github, color: "#8B5CF6" },
              { label: "Avg App Rating", value: "4.8 ★", icon: Zap, color: "#22C55E" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#161B22] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors group"
              >
                <stat.icon className="w-5 h-5 mb-3" style={{ color: stat.color }} />
                <div className="text-2xl font-bold text-[#E6EDF3] font-mono">{stat.value}</div>
                <div className="text-xs text-[#8B949E] mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STACK MARQUEE ── */}
      <div className="border-y border-white/5 bg-[#161B22] py-4 overflow-hidden">
        <div className="flex gap-4 animate-[marquee_20s_linear_infinite] w-max">
          {[...STACK, ...STACK].map((tech, i) => (
            <Chip key={i} className="border-white/10 bg-[#0D1117] text-[#8B949E] whitespace-nowrap">
              {tech}
            </Chip>
          ))}
        </div>
      </div>

      {/* ── SERVICES (BENTO GRID) ── */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs text-[#0EA5E9] mb-3 tracking-widest uppercase">// What I Build</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Pick your{" "}
              <span className="text-[#8B5CF6]">starting point.</span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large card — Starter */}
            <div className="md:col-span-1 bg-[#161B22] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#0EA5E9]/30 transition-colors group">
              <div>
                <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <Chip className="border-[#0EA5E9]/20 text-[#0EA5E9] mb-4">STARTER</Chip>
                <h3 className="text-2xl font-bold mb-3">Starter App</h3>
                <p className="text-[#8B949E] text-sm leading-relaxed">
                  Company profile + product catalog + booking/contact. Perfect for businesses going mobile for the first time.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-mono text-2xl font-bold text-[#0EA5E9]">Rp 15M</div>
                <div className="text-xs text-[#8B949E] mt-1">4 weeks · iOS + Android</div>
              </div>
            </div>

            {/* Business App — Highlighted */}
            <div className="md:col-span-1 bg-gradient-to-br from-[#1C1040] to-[#161B22] border border-[#8B5CF6]/40 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.15)]">
              <div className="absolute top-4 right-4">
                <Chip className="border-[#8B5CF6]/40 text-[#8B5CF6] bg-[#8B5CF6]/10">POPULAR</Chip>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <Chip className="border-[#8B5CF6]/30 text-[#8B5CF6] mb-4">BUSINESS</Chip>
                <h3 className="text-2xl font-bold mb-3">Business App</h3>
                <p className="text-[#8B949E] text-sm leading-relaxed">
                  Full-featured: admin dashboard, push notifications, analytics, payment gateway, and user management.
                </p>
                <ul className="mt-6 space-y-2">
                  {["Admin Panel Included", "Push Notifications", "Analytics Dashboard", "Payment Integration"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#E6EDF3]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-mono text-2xl font-bold text-[#8B5CF6]">Rp 35M</div>
                <div className="text-xs text-[#8B949E] mt-1">8 weeks · iOS + Android</div>
              </div>
            </div>

            {/* Right column — 2 smaller cards */}
            <div className="md:col-span-1 flex flex-col gap-4">
              {/* Full MVP */}
              <div className="bg-[#161B22] border border-white/10 rounded-2xl p-6 flex-1 hover:border-[#22C55E]/30 transition-colors">
                <div className="w-10 h-10 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mb-4">
                  <Server className="w-5 h-5 text-[#22C55E]" />
                </div>
                <Chip className="border-[#22C55E]/20 text-[#22C55E] mb-3">FULL MVP</Chip>
                <h3 className="text-lg font-bold mb-2">Full Product MVP</h3>
                <p className="text-[#8B949E] text-xs leading-relaxed">
                  Complete product: backend infrastructure, web dashboard, 2 platforms. Investor-ready.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="font-mono text-xl font-bold text-[#22C55E]">Rp 75M</div>
                  <div className="text-xs text-[#8B949E] mt-0.5">14 weeks</div>
                </div>
              </div>

              {/* Maintenance */}
              <div className="bg-[#161B22] border border-white/10 rounded-2xl p-6 hover:border-[#F59E0B]/30 transition-colors">
                <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <Chip className="border-[#F59E0B]/20 text-[#F59E0B] mb-3">RETAINER</Chip>
                <h3 className="text-lg font-bold mb-2">Monthly Maintenance</h3>
                <p className="text-[#8B949E] text-xs leading-relaxed">
                  Ongoing updates, bug fixes, monitoring, and OS compatibility.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="font-mono text-xl font-bold text-[#F59E0B]">Rp 3.5M/bln</div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee row */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Package, label: "100% Source Code Ownership", desc: "All files delivered to you on day 1 of completion." },
              { icon: CheckCircle2, label: "30-Day Post-Launch Support", desc: "Bug fixes and critical patches — free of charge." },
              { icon: Clock, label: "Fixed Timeline, Fixed Price", desc: "No hidden costs. No scope creep without approval." },
            ].map((item, i) => (
              <div key={i} className="bg-[#161B22] border border-white/5 rounded-xl p-5 flex items-start gap-4">
                <item.icon className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#E6EDF3]">{item.label}</div>
                  <div className="text-xs text-[#8B949E] mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 px-4 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs text-[#0EA5E9] mb-3 tracking-widest uppercase">// Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Apps I&apos;ve{" "}
              <span className="text-[#0EA5E9]">shipped.</span>
            </h2>
            <p className="text-[#8B949E] mt-4 max-w-xl">All apps below are live on App Store and/or Google Play.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {APPS.map((app, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-[#161B22] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${app.color}15`, border: `1px solid ${app.color}30` }}
                  >
                    <Smartphone className="w-6 h-6" style={{ color: app.color }} />
                  </div>
                  <div className="flex gap-2">
                    <Chip className="border-white/10 text-[#8B949E]">
                      ★ {app.rating}
                    </Chip>
                    <Chip className="border-white/10 text-[#8B949E]">
                      {app.downloads}
                    </Chip>
                  </div>
                </div>
                <div className="font-mono text-xs mb-1" style={{ color: app.color }}>
                  {app.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{app.name}</h3>
                <p className="text-[#8B949E] text-sm leading-relaxed mb-6">{app.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {app.stack.map((t) => (
                      <Chip key={t} className="border-white/10 text-[#8B949E] text-[10px]">{t}</Chip>
                    ))}
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8B949E] group-hover:text-[#0EA5E9] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 px-4 bg-[#161B22]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-[#0EA5E9] mb-3 tracking-widest uppercase">// How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold">From idea to{" "}
              <span className="text-[#8B5CF6]">live app.</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  desc: "30-minute WhatsApp / Zoom call. You explain your idea, I explain what's realistic. Free, no commitment.",
                  duration: "1 day",
                  color: "#0EA5E9",
                },
                {
                  step: "02",
                  title: "Scope & Proposal",
                  desc: "I draft a detailed scope document: features, timeline, milestones, and fixed price. No surprise costs.",
                  duration: "2-3 days",
                  color: "#8B5CF6",
                },
                {
                  step: "03",
                  title: "Design Mockup",
                  desc: "Figma wireframes and high-fidelity UI design. You approve before a single line of code is written.",
                  duration: "1-2 weeks",
                  color: "#22C55E",
                },
                {
                  step: "04",
                  title: "Development",
                  desc: "Bi-weekly progress demos. Real-time updates via shared Notion/Trello board. You always know what's happening.",
                  duration: "4-12 weeks",
                  color: "#F59E0B",
                },
                {
                  step: "05",
                  title: "Testing & Launch",
                  desc: "End-to-end QA testing, App Store/Play Store submission, and go-live. 30-day support window starts.",
                  duration: "1 week",
                  color: "#0EA5E9",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-8 items-start">
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold shrink-0 bg-[#0D1117] z-10"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.step}
                  </div>
                  <div className="bg-[#0D1117] border border-white/10 rounded-xl p-6 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <Chip className="border-white/10 text-[#8B949E]">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {item.duration}
                      </Chip>
                    </div>
                    <p className="text-[#8B949E] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-[#0EA5E9] mb-3 tracking-widest uppercase">// Client Reviews</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              What clients{" "}
              <span className="text-[#0EA5E9]">say.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Andi Kusuma",
                role: "Owner, QuickServ Restaurant",
                quote: "Rizky delivered the ordering app in 6 weeks — 2 weeks ahead of schedule. The UI is better than what I imagined. Our cashier queues dropped 70%.",
                rating: 5,
              },
              {
                name: "Dewi Santoso",
                role: "CTO, LogiTrack Startup",
                quote: "We needed an MVP fast for our seed funding demo. Rizky built a functional driver tracking app in 8 weeks. Investors were impressed. We closed the round.",
                rating: 5,
              },
              {
                name: "Reza Firmansyah",
                role: "Operations Manager, KlinikGo",
                quote: "We interviewed 5 freelancers. Rizky was the only one who presented a proper scope document and explained tech decisions in plain language. Hired immediately.",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#161B22] border border-white/10 rounded-2xl p-8 hover:border-[#0EA5E9]/30 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#8B949E] text-sm leading-relaxed mb-6 italic">&quot;{t.quote}&quot;</p>
                <div>
                  <div className="font-semibold text-[#E6EDF3]">{t.name}</div>
                  <div className="text-xs text-[#0EA5E9] mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-4 bg-[#161B22]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-[#0EA5E9] mb-3 tracking-widest uppercase">// FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Questions{" "}
              <span className="text-[#8B5CF6]">answered.</span>
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-4 relative overflow-hidden bg-[#0D1117]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#161B22_1px,transparent_1px),linear-gradient(to_bottom,#161B22_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9]/5 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#22C55E] border border-[#22C55E]/20 rounded-full px-4 py-2 bg-[#22C55E]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            Taking projects starting March 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Got an app idea?<br />
            <span className="text-[#0EA5E9]">Let&apos;s ship it.</span>
          </h2>
          <p className="text-[#8B949E] text-lg">
            First call is free. No pitch, no pressure — just a conversation about what you want to build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <BlueButton className="text-base px-10 py-5">
              <Smartphone className="w-5 h-5" /> WhatsApp Rizky Sekarang
            </BlueButton>
          </div>
          <p className="font-mono text-xs text-[#8B949E]">📱 +62 812-3456-7890 · rizky@email.com</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 bg-[#010409] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-mono text-lg font-bold text-[#E6EDF3] flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#0EA5E9]" /> rizky.dev
            </div>
            <div className="text-xs text-[#8B949E] mt-1">Mobile App Developer · Flutter · React Native</div>
          </div>
          <div className="flex gap-6 text-sm text-[#8B949E]">
            <Link href="#" className="hover:text-[#0EA5E9] transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-[#0EA5E9] transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-[#0EA5E9] transition-colors">WhatsApp</Link>
          </div>
          <div className="text-xs text-[#8B949E] text-center md:text-right">
            <p>© 2026 Rizky Pratama. All rights reserved.</p>
            <p className="mt-1">
              Powered by{" "}
              <a href="https://karyakilat.com" className="text-[#0EA5E9] hover:underline">
                Karya Kilat
              </a>
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
