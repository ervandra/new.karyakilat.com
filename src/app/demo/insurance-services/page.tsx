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
  Users
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

function GoldButton({ children, variant = "solid", className, href = "https://wa.me/6281234567890" }: { children: React.ReactNode; variant?: "solid" | "outline"; className?: string; href?: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-medium transition-all duration-300 rounded-none tracking-wide",
        variant === "solid" 
          ? "bg-[#C5A059] text-black hover:bg-[#b38f48] shadow-[0_0_20px_rgba(197,160,89,0.3)]" 
          : "border border-[#C5A059]/50 text-[#C5A059] hover:bg-[#C5A059]/10",
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
        <span className="text-[#C5A059] text-sm font-bold tracking-[0.2em] uppercase">{subtitle}</span>
      )}
      <h2 className="text-3xl md:text-5xl font-serif leading-tight text-white">{title}</h2>
      <div className={cn("h-1 w-24 bg-[#C5A059] mt-6", align === "center" ? "mx-auto" : "")} />
    </div>
  );
}

// --- Content ---

export default function InsuranceServicesDemo() {
  return (
    <div className="bg-[#121212] text-slate-300">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background - Dark luxury gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#121212] to-[#000000]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block border border-[#C5A059]/30 bg-[#C5A059]/5 px-4 py-2 text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
              Legacy & Wealth Protection Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white">
              Your Wealth is Built. <br/> <span className="text-[#C5A059]">Make it Last.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-lg">
              Sophisticated protection for established families. Because a true legacy is defined by how it is protected.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-white/40">
              <span className="flex items-center gap-2"><Crown className="w-4 h-4 text-[#C5A059]" /> MDRT Life Member</span>
              <span className="flex items-center gap-2"><UserCheck className="w-4 h-4 text-[#C5A059]" /> 15+ Years Excellence</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#C5A059]" /> 500+ Families Protected</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GoldButton>
                Book a Private Consultation
              </GoldButton>
              <GoldButton variant="outline" href="#philosophy">
                My Philosophy <ArrowRight className="w-4 h-4 ml-2" />
              </GoldButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent z-10" />
            <div className="absolute inset-0 border border-white/5 bg-white/5 flex items-center justify-center overflow-hidden">
               {/* High-end lifestyle/portrait placeholder */}
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay hover:grayscale-0 transition-all duration-1000" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#C5A059]/10 rounded-full animate-pulse" />
            <div className="absolute bottom-20 -left-10 w-24 h-24 bg-[#C5A059]/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Metrics */}
      <section className="border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Claims Handled", value: "99%", icon: ShieldCheck },
            { label: "Family Portfolios", value: "500+", icon: HeartHandshake },
            { label: "Asset Protection", value: "IDR 2T+", icon: Star },
            { label: "Community Service", value: "15 Years", icon: Users },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <stat.icon className="w-6 h-6 text-[#C5A059] mx-auto opacity-80" />
              <div className="text-2xl md:text-3xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <Section id="philosophy">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <SectionHeading title="A Partner, Not a Salesperson." align="left" subtitle="The Soft Approach" />
            <p className="text-white/60 leading-relaxed text-lg italic">
              "In our community, I've seen too many families build incredible wealth only to see it fragmented by a single health crisis or an unplanned inheritance transition."
            </p>
            <p className="text-white/60 leading-relaxed">
              My approach is simple: **Relationship first.** I'm here to listen to your goals, understand your family's dynamic, and help you architect a protection strategy that fits your lifestyle. No pressure, just professional stewardship.
            </p>
            <div className="pt-6">
              <GoldButton variant="outline" href="#offers">Explore Curated Strategies</GoldButton>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Relationship First", desc: "Long-term partnership through every life stage.", icon: HeartHandshake },
              { title: "Global Perspective", desc: "Solutions that cover you and your family worldwide.", icon: Globe },
              { title: "Generational Thinking", desc: "Designing for the children and grandchildren.", icon: Trees },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/5 flex gap-6 items-start">
                <item.icon className="w-8 h-8 text-[#C5A059] shrink-0" />
                <div>
                  <h3 className="text-white font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Curated Strategies (Offers) */}
      <Section id="offers" className="bg-[#0a0a0a]">
        <SectionHeading title="Strategies for the Established" subtitle="Curated Solutions" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "360° Protection Audit",
              subtitle: "For the Multi-Policy Holder",
              desc: "A comprehensive review of your existing portfolio to eliminate overlaps and identify critical gaps.",
              features: ["Policy gap analysis", "Beneficiary review", "Liquidity stress test", "Cost-efficiency report"],
              icon: FileSearch
            },
            {
              title: "Global Health Fortress",
              subtitle: "For the International Lifestyle",
              desc: "Premium healthcare access to the world's leading hospitals without disrupting your capital.",
              features: ["International hospital network", "Critical illness liquidity", "Concierge claim support", "Family-wide coverage"],
              icon: Globe
            },
            {
              title: "Legacy & Estate Blueprint",
              subtitle: "For the Family Visionary",
              desc: "Ensuring your business and assets transition smoothly to the next generation.",
              features: ["Inheritance tax planning", "Business succession support", "Asset distribution strategy", "Trust-alignment reviews"],
              icon: Trees
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#1a1a1a] border border-white/5 hover:border-[#C5A059]/30 transition-all group"
            >
              <item.icon className="w-10 h-10 text-[#C5A059] mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-[#C5A059] text-xs font-bold tracking-widest uppercase mb-2">{item.subtitle}</div>
              <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
              <p className="text-sm text-white/40 mb-8">{item.desc}</p>
              <ul className="space-y-4 mb-8">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> {f}
                  </li>
                ))}
              </ul>
              <GoldButton variant="outline" className="w-full">Request Details</GoldButton>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Process */}
      <Section id="process">
        <SectionHeading title="The Stewards Process" subtitle="Concierge Experience" />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery Coffee", desc: "A low-pressure conversation to understand your goals.", icon: Coffee },
            { step: "02", title: "Portfolio Audit", desc: "We analyze your current protection landscape.", icon: FileSearch },
            { step: "03", title: "Architecture", desc: "We design the master strategy for your legacy.", icon: Navigation },
            { step: "04", title: "Active Guard", desc: "Ongoing reviews to keep your protection relevant.", icon: ShieldCheck },
          ].map((item, i) => (
            <div key={i} className="relative p-6 pt-12 border-l border-white/5">
              <div className="absolute -top-3 -left-3 bg-[#121212] border border-[#C5A059] text-[#C5A059] w-10 h-10 flex items-center justify-center font-serif text-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-serif mb-4 text-white">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Testimonials */}
      <Section className="bg-[#0a0a0a]">
        <SectionHeading title="A Legacy of Trust" subtitle="Community Words" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Bapak Gunawan",
              role: "Founder, Manufacturing Group",
              quote: "Benny isn't like other agents. He spent 3 months just auditing our family policies before even suggesting a change. He saved our business structure from a massive tax risk."
            },
            {
              name: "Ibu Shinta",
              role: "Entrepreneur",
              quote: "When my husband was hospitalized in Singapore, Benny was our first call. He handled the entire guarantee process with the hospital. We didn't pay a single cent out of pocket."
            }
          ].map((t, i) => (
            <div key={i} className="bg-[#121212] p-10 border border-white/5 relative">
              <div className="text-[#C5A059] text-6xl font-serif absolute top-6 left-6 opacity-10">"</div>
              <p className="text-white/60 italic leading-relaxed mb-8 relative z-10 text-lg">"{t.quote}"</p>
              <div className="font-serif text-lg text-white">{t.name}</div>
              <div className="text-[#C5A059] text-xs uppercase tracking-wider">{t.role}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. CTA Final */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C5A059] opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 bg-[#1a1a1a] p-12 md:p-24 border border-white/5 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Ready to <span className="text-[#C5A059]">Bulletproof</span> Your Legacy?
          </h2>
          <p className="text-xl text-white/40">
            Start with a private 5-minute Legacy Readiness Assessment.
          </p>
          <div className="pt-4">
            <GoldButton className="text-lg px-12 py-6">
              Get My Readiness Report
            </GoldButton>
            <p className="text-xs text-white/20 mt-6 tracking-widest uppercase">
              Strictly Confidential | Non-Transactional
            </p>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl text-white">Benny & Partners.</div>
            <div className="text-sm text-white/20">Wealth & Legacy Advisory</div>
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-[#C5A059] transition-colors">WhatsApp</Link>
            <Link href="#" className="hover:text-[#C5A059] transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-[#C5A059] transition-colors">Community</Link>
          </div>
          <div className="text-xs text-white/20 text-center md:text-right">
            © 2026 Benny Wealth Protection.<br/>
            Authorized Partner of Prudential Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
}
