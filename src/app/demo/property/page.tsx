"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  TrendingUp,
  Search,
  FileCheck,
  Key,
  Camera,
  Phone,
  ChevronRight,
  Bed,
  Bath,
  Maximize2,
  Star,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef } from "react";

// ─── Design Tokens (SOP 02 / Luxury Archetype) ────────────────────────────────
// bg:      #0B132B (navy)  |  surface: #0F1B3A
// accent:  #D4AF37 (gold)  |  text:    white / slate-400
// corners: rounded-none (sharp) — Luxury

// ─── Helpers ──────────────────────────────────────────────────────────────────

function GoldBtn({
  children,
  variant = "solid",
  href = "https://wa.me/6281234567890",
  className,
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center gap-2 px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300",
        variant === "solid"
          ? "bg-[#D4AF37] text-[#0B132B] hover:bg-[#C9A02B]"
          : "border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37]/10",
        className
      )}
    >
      {children}
    </Link>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const LISTINGS = [
  {
    id: "L001",
    label: "Featured",
    title: "The Mansuri Estate",
    sub: "Private Compound · The Green, BSD City",
    price: "Rp 18.5 Miliar",
    bed: 6, bath: 7, land: "650",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&auto=format&fit=crop&q=90",
    tag: "Off-Market Exclusive",
  },
  {
    id: "L002",
    label: "",
    title: "Foresta Signature",
    sub: "Cluster Hook · Gading Serpong",
    price: "Rp 6.8 Miliar",
    bed: 4, bath: 4, land: "280",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&auto=format&fit=crop&q=80",
    tag: "For Sale",
  },
  {
    id: "L003",
    label: "",
    title: "Alam Sutera Commercial",
    sub: "Ruko Premium · Alam Sutera",
    price: "Rp 9.2 Miliar",
    bed: 0, bath: 0, land: "220",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=80",
    tag: "Commercial",
  },
  {
    id: "L004",
    label: "",
    title: "The Zephyr Residences",
    sub: "Garden View · BSD Timur",
    price: "Rp 4.2 Miliar",
    bed: 3, bath: 3, land: "180",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&auto=format&fit=crop&q=80",
    tag: "For Sale",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PropertyExpertDemo() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-[#060D1F] text-white font-sans overflow-x-hidden">

      {/* ── STICKY NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[#060D1F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#D4AF37] flex items-center justify-center text-[#060D1F] text-[10px] font-black">SW</div>
          <span className="font-serif text-lg tracking-wide text-white">Sandra Wijaya.</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-widest text-white/40 font-bold">
          <Link href="#listings" className="hover:text-[#D4AF37] transition-colors">Listings</Link>
          <Link href="#about" className="hover:text-[#D4AF37] transition-colors">About</Link>
          <Link href="#process" className="hover:text-[#D4AF37] transition-colors">Process</Link>
        </div>
        <GoldBtn className="text-[10px] px-6 py-3">
          <Phone className="w-3 h-3" /> Private Inquiry
        </GoldBtn>
      </nav>

      {/* ── HERO — Full-bleed Parallax Property Photo ── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
        {/* Parallax photo */}
        <motion.div
          style={{ y: heroImgY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&auto=format&fit=crop&q=90"
            alt="Luxury Property BSD"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Multi-layer dark overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F] via-[#060D1F]/40 to-[#060D1F]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D1F]/60 via-transparent to-transparent" />

        {/* Hero content — bottom-left editorial */}
        <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-28 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 max-w-3xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-bold">
                Elite Property Consultant · BSD & Gading Serpong
              </span>
            </div>

            <h1 className="text-6xl md:text-9xl font-serif leading-[0.95] text-white">
              The Art of <br />
              <em className="not-italic text-[#D4AF37]">Luxury Living.</em>
            </h1>

            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
              Representing BSD and Gading Serpong&apos;s most distinguished properties — where precision meets legacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GoldBtn className="text-xs px-10 py-5">
                Consult With Sandra
              </GoldBtn>
              <GoldBtn variant="ghost" href="#listings" className="text-xs px-10 py-5">
                Explore Listings <ArrowRight className="w-3 h-3" />
              </GoldBtn>
            </div>
          </motion.div>
        </div>

        {/* Stats strip — floats above hero bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative z-10 bg-[#060D1F]/80 backdrop-blur border-t border-white/5 px-6 md:px-16"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 py-6">
            {[
              { value: "Rp 4.2T+", label: "Portfolio Sold" },
              { value: "350+",     label: "Transactions" },
              { value: "12 Yrs",   label: "Industry Tenure" },
              { value: "Top 1%",   label: "BSD Market Share" },
            ].map((s, i) => (
              <div key={i} className="px-6 text-center first:pl-0 last:pr-0">
                <div className="font-serif text-2xl md:text-3xl text-[#D4AF37]">{s.value}</div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-bold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED LISTING — Hero Listing Card ── */}
      <section id="listings" className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-6 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-bold">Curated Portfolio</span>
          </div>

          {/* Big featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group overflow-hidden mb-6"
          >
            <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
              <img
                src={LISTINGS[0].img}
                alt={LISTINGS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F]/90 via-[#060D1F]/20 to-transparent" />
            </div>

            {/* Tag */}
            <div className="absolute top-8 left-8 bg-[#D4AF37] text-[#060D1F] text-[9px] tracking-[0.25em] uppercase font-black px-4 py-2">
              {LISTINGS[0].tag}
            </div>

            {/* Bottom info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row items-end justify-between gap-6">
              <div>
                <div className="text-white/50 text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 mb-3">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" /> {LISTINGS[0].sub}
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-2">{LISTINGS[0].title}</h2>
                <div className="flex gap-6 text-white/40 text-xs mt-4">
                  <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {LISTINGS[0].bed} BR</span>
                  <span className="flex items-center gap-1"><Bath className="w-3 h-3" /> {LISTINGS[0].bath} BA</span>
                  <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" /> {LISTINGS[0].land}m² LT</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[#D4AF37] font-serif text-4xl md:text-5xl font-bold">{LISTINGS[0].price}</div>
                <button className="mt-4 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[#D4AF37] hover:text-[#060D1F] transition-all font-bold block">
                  Request Private Viewing
                </button>
              </div>
            </div>
          </motion.div>

          {/* 3-col listing grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {LISTINGS.slice(1).map((listing, i) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden bg-[#0F1B3A] border border-white/5 hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={listing.img}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F]/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#060D1F] text-[8px] font-black px-3 py-1 tracking-widest uppercase">
                    {listing.tag}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-white/30 text-[9px] tracking-widest uppercase flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-[#D4AF37]" /> {listing.sub}
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-[#D4AF37] transition-colors">{listing.title}</h3>
                  <div className="text-[#D4AF37] font-bold text-lg">{listing.price}</div>
                  {listing.bed > 0 && (
                    <div className="flex gap-4 text-white/30 text-[10px] pt-1">
                      <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {listing.bed} BR</span>
                      <span className="flex items-center gap-1"><Bath className="w-3 h-3" /> {listing.bath} BA</span>
                      <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" /> {listing.land}m²</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <GoldBtn variant="ghost">View Full Portfolio <ChevronRight className="w-3 h-3" /></GoldBtn>
          </div>
        </div>
      </section>

      {/* ── ABOUT SANDRA — Asymmetric editorial ── */}
      <section id="about" className="py-20 md:py-32 bg-[#0A1428] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-0 items-stretch">
          {/* Photo */}
          <div className="relative overflow-hidden min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=80"
              alt="Sandra Wijaya"
              className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]" />
          </div>

          {/* Bio */}
          <div className="bg-[#0F1B3A] p-12 md:p-16 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-6 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-bold">About the Consultant</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-[1.0]">
                Sandra <span className="text-[#D4AF37]">Wijaya.</span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                With over 12 years commanding the premium property market across BSD and Gading Serpong, Sandra has closed over 350 transactions — building a reputation not on volume, but on precision.
              </p>
              <p className="text-white/50 font-light leading-relaxed">
                &quot;My role is not to sell a house. It is to protect your most significant investment.&quot; Every transaction begins with deep legal due diligence and ends with white-glove delivery — no exceptions.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                {[
                  { icon: ShieldCheck, label: "Legal Due Diligence", desc: "Full SHM/HGB audit before every deal." },
                  { icon: Camera,      label: "Cinematic Production", desc: "Drone, 4K, and virtual tour standard." },
                  { icon: TrendingUp,  label: "Asset ROI Analysis",   desc: "Investment returns modeled over 10 years." },
                  { icon: Award,       label: "AREBI Certified",      desc: "Top Agent BSD — 3 consecutive years." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0" />
                    <div>
                      <div className="text-white text-xs font-bold mb-1">{item.label}</div>
                      <div className="text-white/30 text-[10px] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <GoldBtn className="w-full justify-center py-5">
                <Phone className="w-3 h-3" /> Consult Sandra via WhatsApp
              </GoldBtn>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-6 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-bold">The Concierge Process</span>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { step: "01", title: "Private Intake",   desc: "30-min discovery call. We define your goals, timeline, and non-negotiables.", icon: Search },
              { step: "02", title: "Curation",         desc: "24-point shortlisting. Every property is pre-audited before we present it.", icon: FileCheck },
              { step: "03", title: "Verification",     desc: "Full SHM/HGB audit, structural assessment, and encumbrance clearance.", icon: ShieldCheck },
              { step: "04", title: "Handover",         desc: "Key delivery + aftersales dossier. We stay available post-transaction.", icon: Key },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 md:p-10 border-l border-white/5 first:border-0 hover:bg-[#0F1B3A] transition-colors group"
              >
                <div className="font-mono text-[#D4AF37] text-[10px] tracking-[0.3em] mb-8">{item.step}</div>
                <item.icon className="w-6 h-6 text-white/20 mb-6 group-hover:text-[#D4AF37] transition-colors" />
                <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
                <p className="text-white/30 text-xs leading-relaxed uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0A1428]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}
          </div>
          <p className="font-serif text-3xl md:text-5xl text-white leading-[1.2] italic">
            &quot;Sandra saved us from purchasing a property with a lien we had no idea about. Her legal diligence alone saved us more than her commission. There is simply no one else I would trust.&quot;
          </p>
          <div className="pt-4">
            <div className="font-serif text-xl text-white">Budi & Ratna Setiawan</div>
            <div className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-bold mt-2">Directors · PT Graha Makmur · BSD City</div>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED CTA ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* BG photo */}
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=80"
          alt="CTA background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-[#060D1F]/75" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8 px-4"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-bold">Private Consultation</span>
            <div className="w-10 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-5xl md:text-8xl text-white leading-[1.0]">
            Find Your <br /><em className="text-[#D4AF37] not-italic">Legacy Point.</em>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Sandra accepts a limited number of new clients per quarter. Contact us for a private assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <GoldBtn className="text-xs px-14 py-6">
              Initiate Private Inquiry
            </GoldBtn>
          </div>
          <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase font-bold">
            Response within 2 hours · Fully Confidential
          </p>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#030812] py-14 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 bg-[#D4AF37] flex items-center justify-center text-[#060D1F] text-[8px] font-black">SW</div>
              <span className="font-serif text-xl text-white">Sandra Wijaya.</span>
            </div>
            <div className="text-[9px] text-[#D4AF37] tracking-[0.3em] uppercase font-bold ml-9">
              Senior Luxury Property Consultant
            </div>
          </div>
          <div className="flex gap-8 text-[9px] tracking-widest uppercase font-bold text-white/20">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">WhatsApp</Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">AREBI</Link>
          </div>
          <div className="text-[8px] text-white/10 tracking-widest uppercase text-right space-y-1">
            <p>© 2026 Sandra Wijaya. All Rights Reserved.</p>
            <p className="text-[#D4AF37]/40">
              Powered by <a href="https://karyakilat.com" className="hover:text-[#D4AF37] transition-colors">Karya Kilat</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
