"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  UtensilsCrossed, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Star,
  Users,
  ChefHat,
  ShoppingBag,
  CalendarCheck
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

// --- Helpers ---

function CoralButton({ children, variant = "solid", className, href = "https://wa.me/6281234567890" }: { children: React.ReactNode; variant?: "solid" | "outline"; className?: string; href?: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-bold transition-all duration-300 rounded-xl tracking-wide",
        variant === "solid" 
          ? "bg-[#D96B4F] text-white hover:bg-[#C25A41] shadow-[0_10px_20px_rgba(217,107,79,0.2)]" 
          : "border-2 border-[#D96B4F] text-[#D96B4F] hover:bg-[#D96B4F]/5",
        className
      )}
    >
      {children}
    </Link>
  );
}

// --- Data ---

const MENU_CATEGORIES = [
  {
    id: "nasi-box",
    label: "Nasi Box",
    desc: "Pilihan praktis untuk meeting, syukuran, atau makan siang kantor.",
    items: [
      { name: "Paket Ayam Geprek", price: "25.000", detail: "Nasi, Ayam Geprek, Sambal, Lalapan, Tahu & Tempe" },
      { name: "Paket Rendang Sapi", price: "45.000", detail: "Nasi, Rendang Sapi Padang, Sayur Nangka, Sambal Hijau" },
      { name: "Paket Ayam Bakar Madu", price: "35.000", detail: "Nasi, Ayam Bakar, Oseng Buncis, Kerupuk, Sambal Terasi" },
      { name: "Nasi Uduk Komplit", price: "30.000", detail: "Nasi Uduk, Ayam Goreng, Telur Balado, Orek Tempe, Sambal" }
    ]
  },
  {
    id: "prasmanan",
    label: "Prasmanan",
    desc: "Layanan lengkap untuk acara pernikahan, arisan, atau gathering.",
    items: [
      { name: "Paket Standard", price: "75.000", detail: "Nasi, 4 Lauk Utama, Sayuran, Kerupuk, Dessert (Buah/Pudding)" },
      { name: "Paket Premium", price: "110.000", detail: "Nasi, 6 Lauk Utama, 2 Sayur, Dessert Lengkap, Minuman Segar" },
      { name: "Paket Arisan", price: "55.000", detail: "Nasi, 3 Lauk Pilihan, Snack, Es Buah (Min. 20 Pax)" }
    ]
  },
  {
    id: "snack-box",
    label: "Snack Box",
    desc: "Kue-kue tradisional dan modern buatan sendiri.",
    items: [
      { name: "Box Hemat (3 Kue)", price: "15.000", detail: "Lemper, Risoles, Sus Buah + Air Mineral" },
      { name: "Box Premium (4 Kue)", price: "22.000", detail: "Pastel, Lapis Legit, Bolu Gulung, Kroket + Air Mineral" }
    ]
  }
];

// --- Sections ---

export default function CateringIbuAyuDemo() {
  const [activeTab, setActiveTab] = useState("nasi-box");

  return (
    <div className="bg-[#FFFBF5] text-[#2D2419] font-sans selection:bg-[#D96B4F]/20">
      
      {/* 1. Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF5]/90 backdrop-blur-md border-b border-[#2D2419]/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#D96B4F] fill-[#D96B4F]" />
            <span className="text-xl md:text-2xl font-serif font-bold text-[#2D2419]">Catering Ibu Ayu</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#2D2419]/70">
            <Link href="#tentang" className="hover:text-[#D96B4F] transition-colors">Cerita Kami</Link>
            <Link href="#menu" className="hover:text-[#D96B4F] transition-colors">Menu & Harga</Link>
            <Link href="#event" className="hover:text-[#D96B4F] transition-colors">Paket Event</Link>
          </div>
          <CoralButton href="https://wa.me/6281234567890" className="px-5 py-2 text-sm rounded-full">
            <MessageCircle className="w-4 h-4" /> Pesan Sekarang
          </CoralButton>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 right-[-5%] w-64 h-64 bg-[#7B9E87]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-[#D96B4F]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#7B9E87]/10 text-[#7B9E87] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              <ChefHat className="w-4 h-4" /> Masakan Rumahan Gading Serpong
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-[#2D2419]">
              Rasa Sayang di <br/> <span className="text-[#D96B4F]">Setiap Masakan.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2419]/70 leading-relaxed max-w-lg">
              Sajian hangat sekelas masakan Ibu untuk momen spesial Anda. Halal, bahan segar setiap hari, dan dimasak dengan sepenuh hati.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CoralButton>
                Lihat Daftar Harga <ArrowRight className="w-4 h-4 ml-2" />
              </CoralButton>
              <div className="flex items-center gap-4 px-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">200+ Pelanggan Puas</div>
                  <div className="text-[#2D2419]/50 text-xs">Rating 4.9/5.0</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-[#F5E6C8] rounded-3xl overflow-hidden shadow-2xl relative z-10 rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000&auto=format&fit=crop" 
                alt="Masakan Ibu Ayu" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#D96B4F]/20 rounded-3xl -rotate-3" />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-6 md:left-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-[#2D2419]/5">
              <div className="w-12 h-12 bg-[#D96B4F] rounded-full flex items-center justify-center text-white">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold">Menu Kustom</div>
                <div className="text-xs text-[#2D2419]/50 uppercase tracking-wider">Sesuai Selera Anda</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats / Why Us */}
      <section id="tentang" className="py-20 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {[
            { label: "Bahan Segar", value: "Tiap Pagi", icon: ShieldCheck, desc: "Belanja bahan baru setiap hari sebelum masak." },
            { label: "Tanpa Pengawet", value: "100% Alami", icon: Heart, desc: "Rasa autentik bumbu rempah asli Indonesia." },
            { label: "Tepat Waktu", value: "Garansi", icon: Clock, desc: "Pengiriman terjadwal untuk kelancaran acara Anda." },
            { label: "Halal & Higienis", value: "Terpercaya", icon: CheckCircle2, desc: "Dapur bersih dan proses masak yang terjaga." },
          ].map((stat, i) => (
            <div key={i} className="bg-white/50 p-6 rounded-2xl border border-white/20 text-center space-y-3">
              <div className="w-10 h-10 bg-[#D96B4F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-[#D96B4F]" />
              </div>
              <div className="text-2xl font-serif font-bold text-[#2D2419]">{stat.value}</div>
              <div className="text-sm font-bold text-[#D96B4F] uppercase tracking-widest">{stat.label}</div>
              <p className="text-xs text-[#2D2419]/60 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Dimasak Langsung <br/> Oleh <span className="text-[#D96B4F]">Ibu Ayu.</span></h2>
            <div className="space-y-6 text-[#2D2419]/70 leading-relaxed text-lg">
              <p>
                Berawal dari hobi memasak untuk keluarga dan tetangga di Gading Serpong, Ibu Ayu kini membawa kehangatan masakan rumah ke setiap acara Anda.
              </p>
              <p>
                "Bagi saya, memasak bukan cuma soal rasa, tapi soal tanggung jawab. Saya ingin setiap orang yang memakan masakan saya merasa sedang berada di rumah sendiri."
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-16 h-px bg-[#D96B4F]" />
                <span className="font-serif italic text-xl text-[#2D2419]">— Ibu Ayu</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-[3/4] bg-slate-200 rounded-3xl overflow-hidden shadow-xl grayscale-[30%] hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
                alt="Ibu Ayu Memasak" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Menu Highlights (Tabs) */}
      <section id="menu" className="py-24 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Pilihan Menu Kami</h2>
            <p className="text-[#2D2419]/60 max-w-xl mx-auto">Klik kategori di bawah untuk melihat detail menu dan harga terupdate.</p>
          </div>

          {/* Tabs Nav */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-bold transition-all border-2",
                  activeTab === cat.id 
                    ? "bg-[#D96B4F] border-[#D96B4F] text-white" 
                    : "bg-transparent border-[#2D2419]/10 text-[#2D2419]/60 hover:border-[#D96B4F]/30"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-8 bg-[#F5EFE6] rounded-3xl">
                <h3 className="text-2xl font-serif font-bold mb-4">{MENU_CATEGORIES.find(c => c.id === activeTab)?.label}</h3>
                <p className="text-sm text-[#2D2419]/60 leading-relaxed">{MENU_CATEGORIES.find(c => c.id === activeTab)?.desc}</p>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[#7B9E87]">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Halal</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#7B9E87]">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Tanpa MSG</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" 
                  alt="Menu Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              {MENU_CATEGORIES.find(c => c.id === activeTab)?.items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white border border-[#2D2419]/5 rounded-2xl hover:border-[#D96B4F]/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-serif font-bold group-hover:text-[#D96B4F] transition-colors">{item.name}</h4>
                    <div className="text-[#D96B4F] font-bold">Rp {item.price}</div>
                  </div>
                  <p className="text-xs text-[#2D2419]/50 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
              <div className="pt-6">
                <CoralButton className="w-full shadow-none">
                  Tanya Menu Kustom via WhatsApp
                </CoralButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Event Section */}
      <section id="event" className="py-24 px-4 bg-[#7B9E87] text-white overflow-hidden relative">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block border border-white/30 bg-white/10 px-4 py-2 text-white text-xs tracking-widest uppercase font-bold rounded-full">
              Special Event Service
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Acara Besar? <br/> Serahkan Pada Kami.</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Mulai dari Arisan Keluarga (20 pax) hingga Syukuran Kantor (200 pax). Kami menyediakan layanan prasmanan lengkap dengan peralatan dan pelayan.
            </p>
            <ul className="space-y-4">
              {["Free Ongkir Gading Serpong & BSD", "Termasuk Peralatan Makan & Meja", "Pramusaji Profesional", "Bisa Custom Menu Sesuai Budget"].map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <button className="bg-white text-[#7B9E87] px-10 py-5 rounded-2xl font-bold hover:bg-[#F5EFE6] transition-colors flex items-center gap-3">
                Minta Penawaran Paket <CalendarCheck className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-2xl bg-white/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl bg-white/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl bg-white/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-2xl bg-white/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How to Order */}
      <section className="py-24 px-4 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold">Cara Pemesanan</h2>
            <div className="h-1 w-20 bg-[#D96B4F] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Pilih Menu", desc: "Pilih dari menu yang ada atau request menu kustom via WA.", icon: ShoppingBag },
              { step: "02", title: "Konfirmasi", desc: "Kami kirim invoice & detail pesanan via WhatsApp.", icon: MessageCircle },
              { step: "03", title: "Pembayaran", desc: "Lakukan pembayaran via Transfer (DP min 50% untuk event).", icon: ShieldCheck },
              { step: "04", title: "Sajian Tiba", desc: "Pesanan diantar tepat waktu ke lokasi Anda.", icon: UtensilsCrossed },
            ].map((s, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#F5EFE6] border-2 border-[#D96B4F] rounded-full flex items-center justify-center mx-auto text-[#D96B4F] font-serif text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="font-serif text-xl font-bold">{s.title}</h3>
                <p className="text-xs text-[#2D2419]/50 leading-relaxed px-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 px-4 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Bu Sari", loc: "BSD City", quote: "Nasi box rendangnya juara! Daging empuk, bumbunya meresap sampai ke dalam. Pengiriman on-time padahal order 100 box." },
              { name: "Mas Kevin", loc: "Gading Serpong", quote: "Catering langganan buat meeting kantor. Menunya variatif dan harganya masuk di budget kantor. Halal dan higienis." },
              { name: "Tante Maya", loc: "Alam Sutera", quote: "Paket arisannya lengkap banget, nggak perlu pusing lagi mikir makanan. Tamu-tamu semua puji masakan Ibu Ayu enak." },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#2D2419]/5 shadow-sm space-y-6 relative">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 text-[#D96B4F] fill-[#D96B4F]" />)}
                </div>
                <p className="italic text-[#2D2419]/70 text-sm leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#2D2419]/5">
                  <div className="w-10 h-10 bg-[#7B9E87]/20 rounded-full flex items-center justify-center text-[#7B9E87]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-[#2D2419]/50">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D96B4F] opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-4xl md:text-7xl font-serif text-[#2D2419] leading-tight">
            Buat Momen Anda <br/> Jadi <span className="text-[#D96B4F]">Lebih Berkesan.</span>
          </h2>
          <p className="text-xl text-[#2D2419]/60 max-w-2xl mx-auto">
            Konsultasikan kebutuhan menu Anda hari ini. Ibu Ayu siap bantu buat hidangan terbaik untuk tamu Anda.
          </p>
          <div className="pt-6">
            <CoralButton className="text-lg px-12 py-6 shadow-2xl">
              Hubungi Ibu Ayu via WhatsApp
            </CoralButton>
            <p className="text-xs text-[#2D2419]/40 mt-6 tracking-widest uppercase font-bold">
              Cepat Respons • Melayani Gading Serpong, BSD, Alam Sutera
            </p>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#2D2419] text-white/50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-white">
              <Heart className="w-6 h-6 text-[#D96B4F] fill-[#D96B4F]" />
              <span className="text-2xl font-serif font-bold">Catering Ibu Ayu</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Menyediakan masakan rumah yang hangat dan lezat untuk setiap momen spesial Anda di Gading Serpong dan sekitarnya.
            </p>
          </div>
          <div className="flex justify-center gap-8 text-sm">
            <Link href="#" className="hover:text-white transition-colors">WhatsApp</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
          </div>
          <div className="text-center md:text-right text-xs space-y-2">
            <p>© 2026 Catering Ibu Ayu. Semua Hak Dilindungi.</p>
            <p>
              Handcrafted by <a href="https://karyakilat.com" className="text-[#D96B4F] hover:underline">Karya Kilat</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
