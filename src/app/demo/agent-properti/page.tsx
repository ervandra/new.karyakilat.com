"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Home, 
  Award, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Key, 
  TrendingUp,
  Search,
  FileCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// --- Components ---

function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-20 md:py-32 px-4 md:px-8 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}

function GoldButton({ children, variant = "solid", className, href = "https://wa.me/6285124354868" }: { children: React.ReactNode; variant?: "solid" | "outline"; className?: string; href?: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-medium transition-all duration-300 rounded-none tracking-wide",
        variant === "solid" 
          ? "bg-[#d4af37] text-black hover:bg-[#c9a84c] shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
          : "border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10",
        className
      )}
    >
      {children}
    </Link>
  );
}

function SectionHeading({ title, subtitle, align = "center" }: { title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={cn("mb-16 space-y-4", align === "center" ? "text-center" : "text-left")}>
      {subtitle && (
        <span className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase">{subtitle}</span>
      )}
      <h2 className="text-3xl md:text-5xl font-serif leading-tight">{title}</h2>
      <div className={cn("h-1 w-24 bg-[#d4af37] mt-6", align === "center" ? "mx-auto" : "")} />
    </div>
  );
}

// --- Content ---

export default function PropertyAgentDemo() {
  return (
    <div className="bg-[#0a0a0a]">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background - Dark luxury gradient + subtle pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#000000]" />
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block border border-[#d4af37]/30 bg-[#d4af37]/5 px-4 py-2 text-[#d4af37] text-xs tracking-widest uppercase font-semibold">
              Senior Property Consultant
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              Sandra <br/> <span className="text-[#d4af37]">Wijaya.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-lg">
              "Rumah Impian Anda, Investasi Terbaik Anda — Saya Pastikan."
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-white/40">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> 12 Tahun Pengalaman</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> 350+ Transaksi</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> Top Agent 2024</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GoldButton>
                <Phone className="w-4 h-4" /> Konsultasi via WhatsApp
              </GoldButton>
              <GoldButton variant="outline" href="#listings">
                Lihat Properti <ArrowRight className="w-4 h-4 ml-2" />
              </GoldButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block h-[600px] w-full"
          >
            {/* Abstract/Silhouette Placeholder for High-End Agent */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/20 to-transparent rounded-t-full border border-[#d4af37]/20 flex items-end justify-center overflow-hidden">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale mix-blend-overlay hover:grayscale-0 transition-all duration-700" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-[#d4af37]/20 rounded-full animate-spin-slow" />
            <div className="absolute top-20 -left-10 w-20 h-20 bg-[#d4af37]/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="border-y border-white/5 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Properti Terjual", value: "350+", icon: Home },
            { label: "Rata-rata Nilai", value: "Rp 850M+", icon: TrendingUp },
            { label: "Rating Klien", value: "4.9/5", icon: Star },
            { label: "Top Agent BSD", value: "3 Tahun", icon: Award },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <stat.icon className="w-6 h-6 text-[#d4af37] mx-auto opacity-80" />
              <div className="text-2xl md:text-3xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Area Expertise */}
      <Section id="areas">
        <SectionHeading title="Spesialis Kawasan Premium" subtitle="Area of Expertise" />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "BSD City", desc: "Pusat bisnis & hunian premium berkembang." },
            { title: "Gading Serpong", desc: "Komunitas eksklusif & fasilitas lengkap." },
            { title: "Alam Sutera", desc: "Hunian modern dengan aksesibilitas tinggi." },
            { title: "Cisauk", desc: "Kawasan sunrise properti 2026." },
          ].map((area, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 border border-white/10 bg-white/5 hover:border-[#d4af37]/50 transition-colors group cursor-default"
            >
              <MapPin className="w-8 h-8 text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif mb-3">{area.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. Featured Listings */}
      <Section id="listings" className="bg-[#0f0f0f]">
        <SectionHeading title="Featured Listings" subtitle="Kurasi Terbaik Minggu Ini" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The Green BSD - Hook",
              price: "Rp 4.2 Miliar",
              specs: "4 KT | 4 KM | LT 240m²",
              tag: "DIJUAL",
              loc: "BSD City, Tangerang Selatan",
              img: "https://images.unsplash.com/photo-1600596542815-e328701102b9?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Cluster Foresta Modern",
              price: "Rp 2.85 Miliar",
              specs: "3 KT | 3 KM | LT 160m²",
              tag: "DIJUAL",
              loc: "Gading Serpong, Tangerang",
              img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Ruko Premium Corner",
              price: "Rp 3.6 Miliar",
              specs: "4 Lantai | Komersial",
              tag: "DIJUAL",
              loc: "Alam Sutera, Tangerang",
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
            }
          ].map((item, i) => (
            <div key={i} className="group bg-[#0a0a0a] border border-white/10 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <span className="absolute top-4 left-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 z-10">
                  {item.tag}
                </span>
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {item.loc}
                </div>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <div className="text-[#d4af37] font-bold text-xl">{item.price}</div>
                <div className="border-t border-white/10 pt-4 text-sm text-white/60">
                  {item.specs}
                </div>
                <button className="w-full py-3 mt-2 border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-widest font-medium">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <GoldButton variant="outline">Lihat Semua Properti</GoldButton>
        </div>
      </Section>

      {/* 5. Process */}
      <Section id="process">
        <SectionHeading title="Cara Saya Bekerja" subtitle="Professional Process" />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Konsultasi", desc: "Ceritakan kebutuhan Anda. Saya dengarkan, bukan mengarahkan.", icon: Phone },
            { step: "02", title: "Kurasi", desc: "Saya saring ratusan opsi, hanya sajikan yang benar-benar cocok.", icon: Search },
            { step: "03", title: "Negosiasi", desc: "Memastikan harga terbaik dan dokumen bersih sebelum tandatangan.", icon: FileCheck },
            { step: "04", title: "Serah Terima", desc: "Setelah kunci di tangan, saya tetap ada untuk after-sales.", icon: Key },
          ].map((item, i) => (
            <div key={i} className="relative p-6 pt-12 border-l border-white/10">
              <div className="absolute -top-3 -left-3 bg-[#0a0a0a] border border-[#d4af37] text-[#d4af37] w-10 h-10 flex items-center justify-center font-serif text-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-serif mb-4 text-white">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Testimonials */}
      <Section className="bg-[#0f0f0f]">
        <SectionHeading title="Kata Klien Saya" subtitle="Trust & Results" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Pak Budi Hartono",
              role: "Direktur PT Sinar Makmur",
              quote: "Sandra membantu kami menemukan ruko di BSD dalam 3 minggu. Proses negosiasi sangat profesional — kami hemat Rp 200 juta dari harga awal."
            },
            {
              name: "Ibu Ratna Dewi",
              role: "Pengusaha Kuliner",
              quote: "Sudah 2 kali beli properti lewat Sandra. Keduanya beres tanpa drama, semua dokumen rapi. Highly recommended untuk yang cari di Gading Serpong."
            },
            {
              name: "Pak Kevin Tanaka",
              role: "CEO Startup",
              quote: "Saya sibuk dan tidak punya waktu riset. Sandra handle segalanya — dari pencarian sampai AJB. Total waktu yang saya investasikan cuma 4 jam."
            }
          ].map((t, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 border border-white/5 relative">
              <div className="text-[#d4af37] text-4xl font-serif absolute top-4 left-4 opacity-20">"</div>
              <p className="text-white/70 italic leading-relaxed mb-6 relative z-10">{t.quote}</p>
              <div>
                <div className="font-serif text-lg text-white">{t.name}</div>
                <div className="text-[#d4af37] text-xs uppercase tracking-wider">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. About Sandra */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full border border-white/10 p-4">
            <div className="w-full h-full bg-[#1a1a1a] relative overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                 alt="Sandra Wijaya"
                 width={800}
                 height={1000}
                 className="object-cover w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-[#d4af37] px-8 py-4">
              <span className="font-serif text-2xl text-[#d4af37]">S.W.</span>
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading title="Kenapa Memilih Sandra?" align="left" />
            <p className="text-white/60 leading-relaxed text-lg">
              "Saya memulai karier properti 12 tahun lalu dengan satu keyakinan sederhana: transaksi properti terbaik lahir dari kepercayaan, bukan tekanan."
            </p>
            <p className="text-white/60 leading-relaxed">
              Spesialis kawasan BSD, Gading Serpong, dan Alam Sutera — saya membangun reputasi bukan dari volume, tapi dari kualitas. Lebih dari 350 klien telah mempercayakan keputusan terpenting mereka kepada saya.
            </p>
            <p className="text-white/60 leading-relaxed">
              Tugas saya adalah mempertemukan kebutuhan unik Anda dengan properti yang tepat — dengan integritas, transparansi, dan hasil nyata.
            </p>
            
            <div className="pt-6 border-t border-white/10 flex gap-8">
              <div>
                <div className="text-white font-serif text-lg">AREBI</div>
                <div className="text-xs text-white/40 uppercase">Certified</div>
              </div>
              <div>
                <div className="text-white font-serif text-lg">REI</div>
                <div className="text-xs text-white/40 uppercase">Member</div>
              </div>
              <div>
                <div className="text-white font-serif text-lg">Top 1%</div>
                <div className="text-xs text-white/40 uppercase">BSD Area</div>
              </div>
            </div>

            <div className="pt-8">
              <GoldButton variant="outline">Mari Diskusi via WhatsApp</GoldButton>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. CTA Final */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#d4af37] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Siap Menemukan <br/> <span className="text-[#d4af37]">Properti Impian</span> Anda?
          </h2>
          <p className="text-xl text-white/60">
            Konsultasi pertama gratis. Tidak ada tekanan, tidak ada komitmen.
          </p>
          <div className="pt-4">
            <GoldButton className="text-lg px-12 py-6">
              Chat Sandra Sekarang
            </GoldButton>
            <p className="text-xs text-white/30 mt-4 tracking-widest uppercase">
              Rata-rata respons: &lt; 1 jam
            </p>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl text-white">Sandra Wijaya.</div>
            <div className="text-sm text-white/40">Senior Property Consultant</div>
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-[#d4af37] transition-colors">WhatsApp</Link>
            <Link href="#" className="hover:text-[#d4af37] transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-[#d4af37] transition-colors">Email</Link>
          </div>
          <div className="text-xs text-white/20 text-center md:text-right">
            © 2026 Sandra Wijaya Property.<br/>
            Harga properti dapat berubah sewaktu-waktu.
          </div>
        </div>
      </footer>
    </div>
  );
}
