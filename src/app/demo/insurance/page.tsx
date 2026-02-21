"use client";

import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Crown, 
  Globe, 
  Trees, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Star,
  Coffee,
  Navigation,
  FileSearch,
  Users,
  Briefcase,
  Heart,
  Stethoscope,
  Clock,
  Instagram,
  MessageCircle,
  Leaf
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Components (SOP 02 / 03) ---

function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-20 md:py-32 px-4 md:px-8 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}

function WarmButton({ children, variant = "solid", className, href = "https://wa.me/6281234567890" }: { children: React.ReactNode; variant?: "solid" | "outline"; className?: string; href?: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-bold transition-all duration-300 rounded-full tracking-wide",
        variant === "solid" 
          ? "bg-[#7B9E87] text-white hover:bg-[#6A8B76] shadow-[0_10px_20px_rgba(123,158,135,0.2)]" 
          : "border-2 border-[#7B9E87] text-[#7B9E87] hover:bg-[#7B9E87]/5",
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
        <span className="text-[#E8A023] text-xs font-bold tracking-[0.3em] uppercase block">{subtitle}</span>
      )}
      <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-[#2C1810] max-w-3xl mx-auto md:mx-0">{title}</h2>
      <div className={cn("h-1 w-20 bg-[#7B9E87] mt-8", align === "center" ? "mx-auto" : "")} />
    </div>
  );
}

// --- Content ---

export default function InsuranceLegacyDemo() {
  return (
    <div className="bg-[#FAF7F0] text-[#2C1810] font-sans selection:bg-[#7B9E87]/20">
      
      {/* 1. Hero Section (Editorial Full Screen) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        {/* Subtle texture background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-px bg-[#7B9E87]" />
              <span className="text-[#7B9E87] text-xs font-bold tracking-[0.3em] uppercase">Private Advisor · Family Wealth Protection</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.0] text-[#2C1810]">
              Protect What <br/> <span className="italic text-[#7B9E87]">Actually Matters.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#2C1810]/60 font-light leading-relaxed max-w-lg">
              Sophisticated protection for the next generation. Because your legacy is built on the choices you make today.
            </p>
            
            <div className="flex flex-wrap gap-10 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-serif text-[#2C1810]">500+</div>
                <div className="text-[10px] tracking-widest text-[#7B9E87] uppercase font-bold">Families Guided</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-serif text-[#2C1810]">15+ Yrs</div>
                <div className="text-[10px] tracking-widest text-[#7B9E87] uppercase font-bold">Advisory History</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-serif text-[#2C1810]">MDRT</div>
                <div className="text-[10px] tracking-widest text-[#7B9E87] uppercase font-bold">Life Member Status</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <WarmButton className="px-12 py-6">
                Consult With Andre
              </WarmButton>
              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <div className="text-[10px] tracking-widest text-[#2C1810]/40 uppercase font-bold">Trusted by Established Families</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block h-[700px] w-full"
          >
            {/* The Image (Family Placeholder) */}
            <div className="absolute inset-0 overflow-hidden bg-[#F5EFE6] rounded-3xl rotate-1">
               <img 
                 src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1000&auto=format&fit=crop" 
                 alt="Family Legacy" 
                 className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            {/* Floating Editorial Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl z-20 max-w-sm rounded-2xl border border-[#FAF7F0] -rotate-1">
               <Heart className="w-8 h-8 text-[#7B9E87] mb-6" />
               <h3 className="text-[#2C1810] font-serif text-3xl mb-4 leading-tight">"A true legacy is built on peace of mind."</h3>
               <p className="text-sm text-[#2C1810]/50 leading-relaxed font-light">
                 Our <strong>Guardian Plan</strong> ensures your family has immediate access to premium medical and financial advocacy when it matters most.
               </p>
            </div>
            {/* Decorative leaf */}
            <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
               <Leaf className="w-40 h-40 text-[#7B9E87]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar / Why Legacy Partners */}
      <Section id="philosophy" className="bg-white/50">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                 alt="Andre Pratama" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#7B9E87] p-10 rounded-2xl text-white shadow-xl z-10 max-w-[240px]">
               <div className="text-5xl font-serif font-bold mb-2">99%</div>
               <div className="text-[10px] tracking-widest uppercase font-bold opacity-80">Claim Settlement Advocacy Success</div>
            </div>
          </div>
          <div className="space-y-10">
            <SectionHeading title="A Human Approach to Protection." align="left" subtitle="Our Vision" />
            <div className="space-y-8 text-[#2C1810]/70 text-lg leading-relaxed font-light">
              <p>
                Insurance shouldn&apos;t feel like a transaction. It&apos;s a promise to your future self and the ones you leave behind.
              </p>
              <p>
                At Legacy Partners, we focus on the service *after* the policy is signed. We act as your medical concierge, your claim advocate, and your strategic family auditor — ensuring you are never just a policy number.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-[#2C1810]/10">
                 <div className="space-y-3">
                   <div className="flex items-center gap-2 text-[#7B9E87]">
                     <Stethoscope className="w-5 h-5" />
                     <span className="font-bold text-xs uppercase tracking-widest">Medical Concierge</span>
                   </div>
                   <p className="text-sm text-[#2C1810]/50">Priority hospital admission and medical claim coordination.</p>
                 </div>
                 <div className="space-y-3">
                   <div className="flex items-center gap-2 text-[#7B9E87]">
                     <Crown className="w-5 h-5" />
                     <span className="font-bold text-xs uppercase tracking-widest">Wealth Portfolio</span>
                   </div>
                   <p className="text-sm text-[#2C1810]/50">Strategic wealth transfer and legacy building assessments.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Core Offers (The Guardian Plans) */}
      <Section id="offers" className="bg-[#FAF7F0]">
        <SectionHeading title="Comprehensive Guardianship." subtitle="The Guardian Plans" />
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Young Family Plan",
              subtitle: "Foundational Security",
              desc: "Building the safety net for new parents and growing homes.",
              features: ["Education Fund Guarantee", "Hospital Income & Medical Plan", "Annual Portfolio Review"],
              accent: "#7B9E87"
            },
            {
              title: "The Legacy Plan",
              subtitle: "Wealth Transfer",
              desc: "Optimized wealth protection for established families and estates.",
              features: ["Wealth Transfer Mapping", "Critical Illness Shield", "24/7 Claim Advocacy", "International Medical Concierge"],
              accent: "#7B9E87",
              popular: true
            },
            {
              title: "The Vision Plan",
              subtitle: "Retirement Concierge",
              desc: "Ensure your retirement is as comfortable as it is secure.",
              features: ["Retirement Income Stream", "Passive Wealth Protection", "LTC & Health Concierge"],
              accent: "#7B9E87"
            }
          ].map((plan, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className={cn(
                "p-12 bg-white rounded-3xl flex flex-col justify-between transition-all border",
                plan.popular ? "border-[#7B9E87] shadow-[0_20px_40px_rgba(123,158,135,0.1)]" : "border-[#2C1810]/5"
              )}
            >
              <div>
                {plan.popular && (
                  <div className="bg-[#7B9E87] text-white text-[10px] font-bold px-4 py-1 rounded-full w-fit mb-8 uppercase tracking-widest">Client Favorite</div>
                )}
                <div className="text-[10px] tracking-widest text-[#E8A023] uppercase font-bold mb-3">{plan.subtitle}</div>
                <h3 className="text-3xl font-serif text-[#2C1810] mb-6">{plan.title}</h3>
                <p className="text-sm text-[#2C1810]/50 leading-relaxed mb-10 font-light">{plan.desc}</p>
                
                <div className="space-y-5 mb-12">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-4 text-sm text-[#2C1810]/70">
                      <div className="w-2 h-2 rounded-full bg-[#7B9E87]/20" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <WarmButton className="w-full" variant={plan.popular ? "solid" : "outline"}>
                Book Free Audit
              </WarmButton>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. Process (The Journey) */}
      <Section id="process" className="bg-[#F5EFE6]">
        <SectionHeading title="A Journey of Trust." subtitle="How We Work" />
        <div className="grid md:grid-cols-4 gap-12 relative max-w-5xl mx-auto">
          {[
            { step: "01", title: "Assessment", desc: "A 45-minute audit of your current protection gaps.", icon: FileSearch },
            { step: "02", title: "Curation", desc: "Crafting a bespoke plan tailored to your legacy goals.", icon: Briefcase },
            { step: "03", title: "Guardianship", desc: "Active management and 24/7 advocate access.", icon: ShieldCheck },
            { step: "04", title: "Review", desc: "Annual check-ins to adjust for life changes.", icon: Clock },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-[#7B9E87] border border-[#2C1810]/5">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-[#2C1810]">{item.title}</h3>
              <p className="text-xs text-[#2C1810]/40 leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Testimonial / Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center gap-1 mb-4">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[#E8A023] fill-[#E8A023]" />)}
          </div>
          <p className="text-3xl md:text-5xl font-serif italic text-[#2C1810] leading-tight">
            &quot;Andre didn&apos;t just sell us a policy; he walked us through our son&apos;s hospital admission and handled the insurance office directly. That&apos;s the kind of partner every family needs.&quot;
          </p>
          <div className="space-y-2">
             <div className="font-serif text-2xl text-[#2C1810]">Hendra & Shinta K.</div>
             <div className="text-xs text-[#7B9E87] uppercase font-bold tracking-[0.3em]">Business Owners · Gading Serpong</div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="py-32 px-4 relative overflow-hidden bg-[#FAF7F0]">
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-12 bg-white/40 p-12 md:p-24 rounded-3xl border border-white backdrop-blur-xl">
          <div className="inline-block border border-[#7B9E87]/30 px-6 py-2 text-[#7B9E87] text-[10px] tracking-[0.4em] uppercase font-bold rounded-full">
            Legacy Protection
          </div>
          <h2 className="text-4xl md:text-7xl font-serif text-[#2C1810] leading-[1.1]">
            Start Your <br/> <span className="italic text-[#7B9E87]">Family Legacy.</span>
          </h2>
          <p className="text-xl text-[#2C1810]/60 font-light max-w-xl mx-auto leading-relaxed">
            Begin with a comprehensive family wealth audit. No pressure, no cost — just a conversation about your future.
          </p>
          <div className="pt-6">
            <WarmButton className="text-lg px-16 py-7 shadow-2xl">
              Initiate My Legacy Audit
            </WarmButton>
          </div>
          <div className="flex items-center justify-center gap-6 pt-12 grayscale opacity-30">
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D2419]">Hospital Concierge · 24/7 Claim Advocacy · Wealth Optimization</div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#F5EFE6] py-20 px-4 border-t border-[#2C1810]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left space-y-3">
            <div className="font-serif text-3xl text-[#2C1810] tracking-tight">Legacy Partners.</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#7B9E87] font-bold">Family Wealth & Protection Advisors</div>
          </div>
          <div className="flex gap-10 text-[10px] tracking-widest uppercase font-bold text-[#2C1810]/50">
            <Link href="#" className="hover:text-[#7B9E87] transition-colors">WhatsApp</Link>
            <Link href="#" className="hover:text-[#7B9E87] transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-[#7B9E87] transition-colors">Privacy</Link>
          </div>
          <div className="text-[9px] text-[#2C1810]/40 uppercase tracking-widest text-center md:text-right space-y-2">
            <p>© 2026 Legacy Partners Advisory. All Rights Reserved.</p>
            <p>Member of MDRT Life & Top of Table 2026.</p>
            <p className="pt-2">Powered by <a href="https://karyakilat.com" className="text-[#7B9E87] hover:underline font-bold">Karya Kilat</a></p>
          </div>
        </div>
      </footer>

    </div>
  );
}
