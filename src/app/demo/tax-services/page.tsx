"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  FileText, 
  TrendingDown, 
  Scale, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  Briefcase,
  AlertTriangle,
  FileSearch,
  MessageSquare
} from "lucide-react";
import Image from "next/image";
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

function GoldButton({ children, variant = "solid", className, href = "#intake" }: { children: React.ReactNode; variant?: "solid" | "outline"; className?: string; href?: string }) {
  return (
    <Link 
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-medium transition-all duration-300 rounded-none tracking-wide",
        variant === "solid" 
          ? "bg-[#d4af37] text-[#0B132B] hover:bg-[#c9a84c] shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
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
      <h2 className="text-3xl md:text-5xl font-serif leading-tight text-white">{title}</h2>
      <div className={cn("h-1 w-24 bg-[#d4af37] mt-6", align === "center" ? "mx-auto" : "")} />
    </div>
  );
}

// --- Content ---

export default function TaxServicesDemo() {
  return (
    <div className="bg-[#0B132B] text-slate-300 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background - Deep Corporate Navy */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1C2541] via-[#0B132B] to-[#050A1A]" />
        
        {/* Subtle grid pattern for a "financial/structured" feel */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block border border-[#d4af37]/30 bg-[#d4af37]/5 px-4 py-2 text-[#d4af37] text-xs tracking-widest uppercase font-semibold">
              Certified Tax Consultant & Strategist
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white">
              Protect Your Wealth. <br/> <span className="text-[#d4af37]">Eliminate Tax Anxiety.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-lg">
              We don't just report your taxes. We build a fortress around your business so you never have to fear an audit again.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-500">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#d4af37]" /> 10+ Years Experience</span>
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-[#d4af37]" /> 100+ Corporate Clients</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> 0 Tax Penalties Incurred</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GoldButton href="#intake">
                Get Your Free Tax Risk Assessment
              </GoldButton>
              <GoldButton variant="outline" href="#packages">
                View Packages <ArrowRight className="w-4 h-4 ml-2" />
              </GoldButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] to-transparent z-10" />
            <div className="absolute inset-0 border border-[#1C2541] bg-[#1C2541]/30 flex items-center justify-center overflow-hidden">
               {/* Professional placeholder image for the consultant */}
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-luminosity hover:grayscale-0 hover:opacity-70 transition-all duration-700" />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -right-5 w-32 h-32 border border-[#d4af37]/20 rounded-full animate-pulse" />
            <div className="absolute bottom-20 -left-10 w-24 h-24 bg-[#d4af37]/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy / Problem */}
      <Section id="philosophy" className="bg-[#111936] border-y border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Stop Paying the 'Ignorance Tax'." align="left" subtitle="The Broken Industry" />
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Most accountants bill by the hour and only talk to you once a year when it's time to report. They are reactive, not proactive.
              </p>
              <p>
                This leaves you vulnerable to sudden tax audits, SP2DK letters, and missing out on massive legal deductions simply because your structure wasn't optimized from day one.
              </p>
              <p className="text-white font-medium border-l-4 border-[#d4af37] pl-4 py-2">
                We believe in fixed-scope, outcome-based pricing. You pay for the result: Bulletproof compliance and total peace of mind.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Proactive Strategy", desc: "We structure your business to legally minimize tax liabilities before the year ends.", icon: TrendingDown },
              { title: "Fixed Pricing", desc: "No surprise hourly bills. You know exactly what you pay for the exact outcome.", icon: Calculator },
              { title: "Audit Defense", desc: "If the tax office knocks, we stand between them and your business.", icon: Shield },
              { title: "Total Confidentiality", desc: "Bank-grade security for all your financial documents and data.", icon: Lock },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-[#0B132B] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <feature.icon className="w-8 h-8 text-[#d4af37] mb-4" />
                <h3 className="text-white font-serif text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Productized Packages */}
      <Section id="packages">
        <SectionHeading title="Clear, Fixed-Scope Packages" subtitle="Transparent Pricing" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Tax Peace of Mind",
              subtitle: "Annual SPT Package",
              target: "Individuals & Freelancers",
              price: "Starting at Rp 2.5M",
              priceDesc: "per year",
              features: [
                "Complete annual tax filing (SPT Tahunan)",
                "Deduction optimization review",
                "Asset reporting compliance check",
                "7-day turnaround time",
                "Digital document vault"
              ],
              popular: false
            },
            {
              title: "UMKM Tax Shield",
              subtitle: "Monthly Retainer",
              target: "Growing Businesses",
              price: "Starting at Rp 1.5M",
              priceDesc: "per month",
              features: [
                "Monthly bookkeeping review",
                "PPN & PPh monthly calculations",
                "Proactive quarterly tax strategy",
                "Dedicated tax consultant",
                "Priority email support"
              ],
              popular: true
            },
            {
              title: "Tax Audit Defense",
              subtitle: "Crisis Management",
              target: "Facing SP2DK / Audits",
              price: "Custom Quote",
              priceDesc: "High Priority",
              features: [
                "Direct representation to tax office",
                "Data reconciliation & defense strategy",
                "Penalty mitigation negotiation",
                "Immediate intervention",
                "Handled by Senior Partner"
              ],
              popular: false
            }
          ].map((pkg, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={cn(
                "relative flex flex-col p-8 border bg-[#111936] transition-all",
                pkg.popular ? "border-[#d4af37] shadow-[0_10px_30px_rgba(212,175,55,0.1)]" : "border-white/10 hover:border-white/30"
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-[#0B132B] px-4 py-1 text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <div className="text-[#d4af37] text-sm font-bold tracking-widest uppercase mb-2">{pkg.subtitle}</div>
              <h3 className="text-2xl font-serif text-white mb-2">{pkg.title}</h3>
              <div className="text-sm text-slate-400 pb-6 border-b border-white/10 mb-6">Best for: {pkg.target}</div>
              
              <div className="mb-6">
                <div className="text-3xl font-serif text-white">{pkg.price}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{pkg.priceDesc}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <GoldButton variant={pkg.popular ? "solid" : "outline"} className="w-full">
                Apply Now
              </GoldButton>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. Process */}
      <Section id="process" className="bg-[#050A1A]">
        <SectionHeading title="The Concierge Experience" subtitle="How It Works" />
        <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />
          
          {[
            { step: "01", title: "The Assessment", desc: "Take our 2-minute secure profiling quiz. We analyze your risk exposure before we even talk.", icon: FileSearch },
            { step: "02", title: "Document Handover", desc: "Upload your raw financial data to our encrypted portal. We do all the heavy lifting and structuring.", icon: Shield },
            { step: "03", title: "Peace of Mind", desc: "We review, optimize, and file everything legally. You go back to focusing on growing your business.", icon: Scale },
          ].map((item, i) => (
            <div key={i} className="relative text-center pt-8">
              <div className="mx-auto w-16 h-16 bg-[#111936] border border-[#d4af37] rounded-full flex items-center justify-center relative z-10 mb-6">
                <item.icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div className="text-[#d4af37] font-serif text-sm mb-2 tracking-widest">STEP {item.step}</div>
              <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Testimonials */}
      <Section className="border-t border-white/5 bg-[#0B132B]">
        <SectionHeading title="Trusted by Business Owners" subtitle="Client Success" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Hendra K.",
              role: "Owner, F&B Chain",
              quote: "Ronald's team found legal deductions my last accountant entirely missed. More importantly, I finally sleep better at night knowing my business compliance is bulletproof."
            },
            {
              name: "Siska P.",
              role: "Digital Agency Director",
              quote: "When we received an SP2DK letter, we panicked. They stepped in, handled the tax office directly, and mitigated our penalties. Absolute lifesavers."
            }
          ].map((t, i) => (
            <div key={i} className="bg-[#111936] p-10 border border-white/5 relative group hover:border-[#d4af37]/30 transition-colors">
              <div className="text-[#d4af37] text-6xl font-serif absolute top-6 left-6 opacity-10">"</div>
              <p className="text-slate-300 italic leading-relaxed mb-8 relative z-10 text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 font-serif">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-serif text-lg text-white">{t.name}</div>
                  <div className="text-[#d4af37] text-xs uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Intake Funnel (CTA) */}
      <Section id="intake" className="py-32 relative overflow-hidden bg-[#1C2541]">
        <div className="absolute inset-0 bg-[#d4af37] opacity-5" />
        <div className=" mx-auto text-center relative z-10 space-y-8 bg-[#0B132B] p-8 md:p-16 border border-[#d4af37]/20 shadow-2xl">
          <AlertTriangle className="w-12 h-12 text-[#d4af37] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            Ready to Bulletproof <br/> Your Taxes?
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Take the 2-minute assessment to see which package fits your business. We only onboard 5 new retainer clients per month to ensure premium service quality.
          </p>
          
          {/* Mockup of an interactive intake form button */}
          <div className="pt-8">
            <button className="bg-[#d4af37] text-[#0B132B] px-10 py-5 text-lg font-bold uppercase tracking-wider hover:bg-[#c9a84c] transition-colors w-full sm:w-auto flex items-center justify-center gap-3 mx-auto">
              <FileSearch className="w-5 h-5" /> Start Assessment
            </button>
            <p className="text-xs text-slate-500 mt-6 tracking-widest uppercase">
              100% Confidential • Secure SSL Encryption
            </p>
          </div>
        </div>
      </Section>

      {/* 7. Footer */}
      <footer className="border-t border-white/5 bg-[#050A1A] py-12 px-4 text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl text-white">Ronald & Partners.</div>
            <div className="text-sm mt-1">Tax Strategy & Compliance</div>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-[#d4af37] transition-colors">WhatsApp</Link>
            <Link href="#" className="hover:text-[#d4af37] transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
          </div>
          <div className="text-xs text-center md:text-right space-y-1">
            <p>© 2026 Ronald & Partners. All rights reserved.</p>
            <p className="text-slate-600 italic">Disclaimer: Information provided does not constitute formal legal advice.</p>
            <p className="pt-2">Powered by <a href="https://karyakilat.com" className="text-[#d4af37] hover:underline">Karya Kilat</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}