"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Wifi,
  Coffee,
  Star,
  ArrowRight,
  Instagram,
  MessageCircle,
  Leaf,
  Droplets,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Color Tokens ─────────────────────────────────────────────────────────────
// bg: #FAF7F0 (warm cream)
// text: #2C1810 (dark espresso)
// accent1: #6B3E26 (coffee brown)
// accent2: #E8A023 (amber)
// highlight: #7B9E87 (sage green)

// ─── Helpers ──────────────────────────────────────────────────────────────────

function WarmButton({
  children,
  variant = "solid",
  className,
  href = "https://wa.me/6281234567890",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-200 rounded-full",
        variant === "solid"
          ? "bg-[#6B3E26] text-[#FAF7F0] hover:bg-[#5A3220]"
          : "border-2 border-[#6B3E26] text-[#6B3E26] hover:bg-[#6B3E26]/10",
        className
      )}
    >
      {children}
    </Link>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const MENU = [
  {
    cat: "Signature Espresso",
    icon: Flame,
    color: "#6B3E26",
    items: [
      { name: "EJI Latte", desc: "House espresso, steamed oat milk, subtle caramel undertone", price: "38K" },
      { name: "Dark Honey Flat White", desc: "Double ristretto, silky whole milk, raw honey drizzle", price: "42K" },
      { name: "Caramel Fog", desc: "Brown sugar espresso, vanilla cold foam, cinnamon dust", price: "45K" },
    ],
  },
  {
    cat: "Manual Brew",
    icon: Droplets,
    color: "#7B9E87",
    items: [
      { name: "V60 Pour Over", desc: "Toraja single origin, floral + citrus notes, bright & clean", price: "48K" },
      { name: "Chemex", desc: "Gayo Aceh, chocolate + berry, medium roast", price: "52K" },
      { name: "AeroPress Traveler", desc: "Bold concentrate, choose your origin, served warm or cold", price: "45K" },
    ],
  },
  {
    cat: "Non-Coffee",
    icon: Leaf,
    color: "#7B9E87",
    items: [
      { name: "Matcha Oat Latte", desc: "Ceremonial grade matcha, oat milk, lightly sweetened", price: "38K" },
      { name: "Hojicha Milk", desc: "Roasted Japanese green tea, full-fat milk, warm & earthy", price: "35K" },
      { name: "Golden Turmeric Latte", desc: "Turmeric, ginger, coconut milk, black pepper finish", price: "32K" },
    ],
  },
];

const GALLERY_IMGS = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop",
    alt: "EJI Coffee interior",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop",
    alt: "Latte art",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop",
    alt: "Coffee brewing",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop",
    alt: "Cafe workspace",
    className: "col-span-2",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EJICoffeeDemo() {
  return (
    <div className="bg-[#FAF7F0] text-[#2C1810] font-sans">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#2C1810]/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-[#6B3E26]" />
            <span className="font-serif text-xl font-bold text-[#2C1810]">EJI Coffee</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#6B3E26]/70">
            <Link href="#menu" className="hover:text-[#2C1810] transition-colors">Menu</Link>
            <Link href="#vibe" className="hover:text-[#2C1810] transition-colors">The Vibe</Link>
            <Link href="#events" className="hover:text-[#2C1810] transition-colors">Events</Link>
            <Link href="#find-us" className="hover:text-[#2C1810] transition-colors">Find Us</Link>
          </div>
          <WarmButton href="https://wa.me/6281234567890" className="text-xs px-5 py-2.5">
            <MessageCircle className="w-3.5 h-3.5" /> Reserve a Table
          </WarmButton>
        </div>
      </nav>

      {/* ── HERO — Full-bleed atmospheric ── */}
      <section className="relative min-h-screen flex items-center pb-20 overflow-hidden">
        {/* Full-bleed background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark gradient overlay — bottom heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D06]/90 via-[#1A0D06]/40 to-transparent" />

        {/* Hero content — lower-left editorial layout */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8A023]" />
              <span className="text-[#E8A023] text-xs font-semibold uppercase tracking-[0.25em]">
                Specialty Coffee · Gading Serpong
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[1.0]">
              Coffee <br />
              is a<br />
              <span className="text-[#E8A023]">ritual.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Slow down. Smell the beans. Stay a while. EJI Coffee is your third place in Gading Serpong — where every cup tells a story.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <WarmButton
                variant="solid"
                className="bg-[#E8A023] text-[#1A0D06] hover:bg-[#D4921A] rounded-full"
              >
                Explore Menu <ArrowRight className="w-4 h-4" />
              </WarmButton>
              <WarmButton
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 rounded-full"
              >
                <Instagram className="w-4 h-4" /> @ejicoffee
              </WarmButton>
            </div>
          </motion.div>
        </div>

        {/* Bottom floating bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FAF7F0] border-b border-[#2C1810]/10 py-5 px-4 z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "Open Daily", value: "07:00 – 22:00" },
              { icon: MapPin, label: "Location", value: "Gading Serpong, Tangerang" },
              { icon: Wifi, label: "WiFi", value: "Free, Fast & Unlimited" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-[#6B3E26] shrink-0" />
                <div>
                  <div className="text-xs text-[#6B3E26]/60 uppercase tracking-wider">{item.label}</div>
                  <div className="text-sm font-semibold text-[#2C1810]">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT — Ejie's Story ── */}
      <section className="py-24 px-4 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image block */}
          <div className="relative">
            <div
              className="aspect-[4/5] bg-cover bg-center rounded-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop')",
              }}
            />
            {/* Floating review card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#2C1810]/5">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 text-[#E8A023] fill-[#E8A023]" />)}
              </div>
              <div className="text-sm font-semibold text-[#2C1810]">4.9 / 5.0</div>
              <div className="text-xs text-[#6B3E26]/60 mt-0.5">dari 240+ ulasan Google</div>
            </div>
            {/* Decorative leaf */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#7B9E87]/20 rounded-full blur-xl" />
          </div>

          {/* Story text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#6B3E26]" />
              <span className="text-[#6B3E26] text-xs font-semibold uppercase tracking-[0.25em]">
                Our Story
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              A coffee shop born <br />
              <em className="text-[#6B3E26] not-italic">from obsession.</em>
            </h2>
            <p className="text-[#2C1810]/70 leading-relaxed text-lg">
              Ejie spent 8 years managing hotel restaurants before he realized — the best coffee experiences are personal ones. Not scripted. Not rushed. Just you, a great cup, and a space that feels like it was made for you.
            </p>
            <p className="text-[#2C1810]/70 leading-relaxed">
              EJI Coffee opened in late 2023 with one mission: to bring specialty coffee culture to Gading Serpong without the pretentiousness. We source directly from farmers in Toraja, Gayo Aceh, and Flores — so every sip has a story behind it.
            </p>
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#2C1810]/10">
              {[
                { value: "3+", label: "Origins on Menu" },
                { value: "240+", label: "Google Reviews" },
                { value: "2023", label: "Est. Gading Serpong" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl font-bold text-[#6B3E26]">{s.value}</div>
                  <div className="text-xs text-[#2C1810]/50 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-24 px-4 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-px bg-[#6B3E26]" />
              <span className="text-[#6B3E26] text-xs font-semibold uppercase tracking-[0.25em]">What We Serve</span>
              <div className="w-8 h-px bg-[#6B3E26]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">The Menu</h2>
            <p className="text-[#2C1810]/60 max-w-xl mx-auto">
              Crafted daily. Sourced directly from farmers. Every item is made to order — no shortcuts, no syrups from concentrate.
            </p>
          </div>

          <div className="space-y-12">
            {MENU.map((cat, i) => (
              <div key={i}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">{cat.cat}</h3>
                  <div className="flex-1 h-px bg-[#2C1810]/10" />
                </div>
                {/* Items grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {cat.items.map((item, j) => (
                    <motion.div
                      key={j}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-2xl p-6 border border-[#2C1810]/5 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-serif text-lg font-bold text-[#2C1810] group-hover:text-[#6B3E26] transition-colors">
                          {item.name}
                        </h4>
                        <span
                          className="font-mono text-sm font-bold px-2 py-1 rounded-full text-white ml-2 shrink-0"
                          style={{ backgroundColor: cat.color }}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-[#2C1810]/50 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Light bites row */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-[#2C1810]/5">
            <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
              <Coffee className="w-6 h-6 text-[#6B3E26]" /> Light Bites
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Butter Croissant", price: "25K" },
                { name: "Salted Caramel Toast", price: "28K" },
                { name: "Banana Cake Slice", price: "30K" },
                { name: "Granola Bowl", price: "35K" },
              ].map((item, i) => (
                <div key={i} className="text-center py-4 border-r border-[#2C1810]/10 last:border-0">
                  <div className="font-semibold text-[#2C1810]">{item.name}</div>
                  <div className="text-[#6B3E26] font-mono text-sm mt-1">Rp {item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Beans to go */}
          <div className="mt-6 bg-[#6B3E26] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[#E8A023] text-xs uppercase tracking-widest mb-2">Take It Home</div>
              <h3 className="font-serif text-2xl font-bold text-white">Freshly Roasted Beans</h3>
              <p className="text-white/70 text-sm mt-2">
                200g bags, in-house roasted. Toraja, Gayo & Flores. Available on-site or via WhatsApp delivery.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="font-mono text-3xl font-bold text-[#E8A023]">Rp 85K–110K</div>
              <div className="text-white/50 text-sm mt-1">per 200g bag</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIBE / GALLERY ── */}
      <section id="vibe" className="py-24 px-4 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#7B9E87]" />
                <span className="text-[#7B9E87] text-xs font-semibold uppercase tracking-[0.25em]">
                  The Third Place
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                A space that <br />
                <em className="text-[#6B3E26] not-italic">feels like home.</em>
              </h2>
            </div>
            <p className="text-[#2C1810]/60 text-lg leading-relaxed">
              Power outlets at every seat. Playlist curated daily. No rush — stay as long as you need. EJI Coffee is built for people who do their best thinking with a cup in hand.
            </p>
          </div>

          {/* Asymmetric gallery grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
            <div
              className="col-span-1 row-span-2 rounded-2xl bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop')" }}
            />
            <div
              className="col-span-1 row-span-1 rounded-2xl bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop')" }}
            />
            <div
              className="col-span-1 row-span-1 rounded-2xl bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop')" }}
            />
            <div
              className="col-span-2 row-span-1 rounded-2xl bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop')" }}
            />
          </div>

          {/* Features row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Wifi, label: "Free Fast WiFi", sub: "No time limit" },
              { icon: Clock, label: "Open 7 Days", sub: "07:00 – 22:00" },
              { icon: Leaf, label: "Single Origin", sub: "Direct from farmers" },
              { icon: MapPin, label: "Gading Serpong", sub: "Easy parking" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-[#2C1810]/5 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-[#6B3E26]/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#6B3E26]" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#2C1810]">{item.label}</div>
                  <div className="text-xs text-[#2C1810]/50">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section id="events" className="py-24 px-4 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#6B3E26]" />
              <span className="text-[#6B3E26] text-xs font-semibold uppercase tracking-[0.25em]">Community</span>
              <div className="w-8 h-px bg-[#6B3E26]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              More than coffee.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Coffee Cupping Session",
                schedule: "Every 3rd Saturday, 10:00 AM",
                desc: "Join our roaster and learn to taste coffee like a professional. Compare 4 origins, discover your palate.",
                price: "Rp 75K / person",
                tag: "Education",
                color: "#6B3E26",
              },
              {
                title: "Work Mode Wednesday",
                schedule: "Every Wednesday, All Day",
                desc: "Special bundle: any filter coffee + pastry + dedicated quiet corner — reserved for those who need to focus.",
                price: "Rp 65K / bundle",
                tag: "Community",
                color: "#7B9E87",
              },
              {
                title: "Private Corner Booking",
                schedule: "Any day by appointment",
                desc: "Need a space for a small meeting, team session, or intimate celebration? Reserve the corner section — minimum spend applies.",
                price: "Min. Rp 500K",
                tag: "Reservations",
                color: "#E8A023",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#2C1810]/5 hover:shadow-lg transition-shadow"
              >
                <div
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: `${event.color}15`, color: event.color }}
                >
                  {event.tag}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{event.title}</h3>
                <div className="text-xs text-[#2C1810]/50 flex items-center gap-1 mb-4">
                  <Clock className="w-3 h-3" /> {event.schedule}
                </div>
                <p className="text-sm text-[#2C1810]/60 leading-relaxed mb-6">{event.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#2C1810]/10">
                  <span className="font-mono font-bold text-[#6B3E26]">{event.price}</span>
                  <WarmButton
                    variant="outline"
                    className="text-xs px-4 py-2 border-[#6B3E26]/30"
                  >
                    <MessageCircle className="w-3 h-3" /> Book via WA
                  </WarmButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#6B3E26]" />
              <span className="text-[#6B3E26] text-xs font-semibold uppercase tracking-[0.25em]">Regulars Say</span>
              <div className="w-8 h-px bg-[#6B3E26]" />
            </div>
            <h2 className="font-serif text-4xl font-bold">A cup shared is a memory made.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mira S.",
                sub: "Freelance Designer, WFH Reguler",
                quote: "EJI is literally my second office. The V60 Toraja is consistently the best filter I've had in Tangerang. Plus the WiFi never drops.",
                rating: 5,
              },
              {
                name: "Pak Dani",
                sub: "Marketing Manager, BSD",
                quote: "Tempat meeting favorit sama klien. Suasananya profesional tapi santai. Kopinya enak, dan staf-nya ga ganggu walaupun kita duduk 3 jam.",
                rating: 5,
              },
              {
                name: "Anisa & Riko",
                sub: "Reguler Weekend",
                quote: "Kita selalu mampir Sabtu pagi sebelum farmers market. EJI Latte + croissant = combo sempurna. Wajib dicoba cupping session-nya!",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#2C1810]/5 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#E8A023] fill-[#E8A023]" />
                  ))}
                </div>
                <p className="text-[#2C1810]/70 text-sm leading-relaxed mb-6 italic">&quot;{t.quote}&quot;</p>
                <div>
                  <div className="font-serif font-bold text-[#2C1810]">{t.name}</div>
                  <div className="text-xs text-[#6B3E26]/60 mt-0.5">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND US ── */}
      <section id="find-us" className="py-24 px-4 bg-[#2C1810] text-[#FAF7F0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8A023]" />
              <span className="text-[#E8A023] text-xs font-semibold uppercase tracking-[0.25em]">Find Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              Come find <br />
              <em className="text-[#E8A023] not-italic">your cup.</em>
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Ruko Gading Serpong, Blok XY No. 12, Tangerang",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Monday – Sunday: 07:00 – 22:00 WIB",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp / Reservasi",
                  value: "+62 812-3456-7890",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: "@ejicoffee.id",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-[#E8A023]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">{item.label}</div>
                    <div className="text-white font-semibold mt-1">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <WarmButton
              className="bg-[#E8A023] text-[#1A0D06] hover:bg-[#D4921A] rounded-full"
            >
              <MessageCircle className="w-4 h-4" /> Reservasi via WhatsApp
            </WarmButton>
          </div>

          {/* Fake map placeholder */}
          <div className="relative rounded-2xl overflow-hidden h-80 md:h-auto min-h-[400px] bg-[#3D2415] border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FAF7F0] rounded-2xl p-6 shadow-2xl text-center">
                <MapPin className="w-8 h-8 text-[#6B3E26] mx-auto mb-2" />
                <div className="font-serif text-lg font-bold text-[#2C1810]">EJI Coffee</div>
                <div className="text-xs text-[#6B3E26]/70 mt-1">Gading Serpong, Tangerang</div>
                <Link
                  href="#"
                  className="mt-4 block text-xs font-semibold text-[#6B3E26] hover:underline"
                >
                  Open in Google Maps →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1A0D06] py-10 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[#E8A023]" />
              <span className="font-serif text-xl font-bold text-white">EJI Coffee</span>
            </div>
            <div className="text-xs text-white/30 mt-1">Specialty Coffee · Gading Serpong</div>
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#menu" className="hover:text-[#E8A023] transition-colors">Menu</Link>
            <Link href="#events" className="hover:text-[#E8A023] transition-colors">Events</Link>
            <Link href="#find-us" className="hover:text-[#E8A023] transition-colors">Lokasi</Link>
            <Link href="#" className="hover:text-[#E8A023] transition-colors">Instagram</Link>
          </div>
          <div className="text-xs text-white/20 text-center md:text-right">
            <p>© 2026 EJI Coffee. Gading Serpong.</p>
            <p className="mt-1">
              Powered by{" "}
              <a href="https://karyakilat.com" className="text-[#E8A023] hover:underline">
                Karya Kilat
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
