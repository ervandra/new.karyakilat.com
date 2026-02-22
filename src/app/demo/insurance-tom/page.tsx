"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight,
  Star,
  Coffee,
  Heart,
  Briefcase,
  Building2,
  PhoneCall,
  ArrowUpRight,
  ThumbsUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Theme Colors ---
// Primary: Deep Navy (#0F172A)
// Accent: Prudential Red (#E31837)
// Background: Soft Gray/Silver (#F8FAFC, #F1F5F9)
// Text: Slate 800 (#1E293B)

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

function PrimaryButton({ children, variant = "solid", className, href = "https://wa.me/6281234567890" }: { children: React.ReactNode; variant?: "solid" | "outline" | "ghost"; className?: string; href?: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-semibold transition-all duration-300 rounded-lg tracking-wide",
        variant === "solid" 
          ? "bg-[#E31837] text-white hover:bg-[#C41530] shadow-lg shadow-[#E31837]/20" 
          : variant === "outline"
          ? "border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
          : "text-[#0F172A] hover:text-[#E31837] hover:bg-[#E31837]/5",
        className
      )}
    >
      {children}
    </Link>
  );
}

function SectionHeading({ title, subtitle, align = "center", light = false }: { title: string; subtitle?: string; align?: "center" | "left"; light?: boolean }) {
  return (
    <div className={cn("mb-16 space-y-4", align === "center" ? "text-center" : "text-left")}>
      {subtitle && (
        <span className={cn("text-xs font-bold tracking-[0.2em] uppercase block", light ? "text-slate-400" : "text-[#E31837]")}>{subtitle}</span>
      )}
      <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tight max-w-3xl", light ? "text-white" : "text-[#0F172A]", align === "center" && "mx-auto")}>{title}</h2>
      <div className={cn("h-1 w-16 mt-6 rounded-full", light ? "bg-white/20" : "bg-[#E31837]", align === "center" && "mx-auto")} />
    </div>
  );
}

// --- Content ---

export default function InsuranceTomDemo() {
  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-[#E31837]/20">
      
      {/* 1. Navigation / Header (Simple) */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-[#0F172A]">Tom & Eric.</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Prudential Senior Agency</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                <Link href="#philosophy" className="hover:text-[#E31837] transition-colors">Philosophy</Link>
                <Link href="#solutions" className="hover:text-[#E31837] transition-colors">Solutions</Link>
                <Link href="#proof" className="hover:text-[#E31837] transition-colors">Client Integrity</Link>
            </div>
            <PrimaryButton className="px-5 py-2.5 text-sm hidden sm:inline-flex">Book Consultation</PrimaryButton>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 px-4 overflow-hidden bg-[#0F172A]">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-400 via-[#0F172A] to-[#0F172A]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1.5 backdrop-blur-sm">
                <div className="bg-[#E31837] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</div>
                <span className="text-slate-300 text-xs font-medium">Executive Wealth Protection Audit is available</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-white tracking-tight">
              Designing Your <br/> Family&apos;s <span className="text-[#E31837]">Financial Fortress.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-lg">
              We don&apos;t just sell policies. We build comprehensive protection strategies for Indonesia&apos;s established families and professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryButton className="py-4 px-8 text-base shadow-[0_0_40px_-10px_rgba(227,24,55,0.5)]">
                Protect Your Legacy
              </PrimaryButton>
              <PrimaryButton variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
                Meet Tom & Eric <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8 max-w-md">
                <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">99.4%</div>
                    <div className="text-xs text-slate-500 font-medium">Claim Approval Rate</div>
                </div>
                <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">$250M+</div>
                    <div className="text-xs text-slate-500 font-medium">Assets Protected</div>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-slate-800">
               {/* Professional Image Placeholder */}
               <img 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                 alt="Tom advising a client" 
                 className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
               />
               
               {/* Overlay Trust Card */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                   <div className="flex items-start gap-4">
                       <ShieldCheck className="w-8 h-8 text-[#E31837] shrink-0" />
                       <div>
                           <div className="text-white font-semibold mb-1">Prudential Senior Partner</div>
                           <div className="text-sm text-slate-300">Over a decade of protecting what matters most to you.</div>
                       </div>
                   </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The "Why Us" (Authenticity/Philosophy) */}
      <Section id="philosophy" className="bg-white">
        <SectionHeading title="Not just your agent. Your long-term partner." subtitle="Our Philosophy" />
        
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                    <p>
                        Most people buy insurance and never hear from their agent again until a premium is due. <strong className="text-[#0F172A]">We fundamentally disagree with that approach.</strong>
                    </p>
                    <p>
                        Led by Tom (Senior Agent) and Eric, our team operates as your dedicated family wealth advocates. We navigate the complexities of Prudential&apos;s premium products so you don&apos;t have to.
                    </p>
                    <ul className="space-y-4 pt-4">
                        {[
                            "Direct WhatsApp access to senior partners.",
                            "Aggressive advocacy across the entire claim process.",
                            "Annual holistic reviews of your protection portfolio."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-[#E31837] rounded-full" />
                                </div>
                                <span className="font-medium text-[#0F172A]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" alt="Consultation" className="rounded-2xl h-64 object-cover w-full object-center" />
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=500&auto=format&fit=crop" alt="Meeting" className="rounded-2xl h-64 object-cover w-full object-center mt-8" />
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* 4. Core Solutions */}
      <Section id="solutions" className="bg-[#F1F5F9] border-y border-slate-200">
        <SectionHeading title="Tailored Protection Architectures." subtitle="Core Solutions" />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Solution 1 */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:border-[#E31837]/30"
            >
                <div className="w-14 h-14 bg-slate-50 text-[#0F172A] rounded-xl flex items-center justify-center mb-8 border border-slate-200 shadow-sm">
                    <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Executive Health Shield</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    Premium VIP medical coverage designed for professionals who demand the best healthcare access globally without compromise.
                </p>
                
                <div className="space-y-3 mb-10">
                    {["Cashless access to premium hospitals globally", "Private room coverage guaranteed", "Dedicated claim assistance team", "Coverage up to IDR 65 Billion/year"].map((f, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                            <CheckCircleIcon /> {f}
                        </div>
                    ))}
                </div>
                <PrimaryButton variant="outline" className="w-full">Explore Health Cover</PrimaryButton>
            </motion.div>

            {/* Solution 2 */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#0F172A] p-10 rounded-2xl shadow-xl transition-all relative overflow-hidden group"
            >
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31837] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
                
                <div className="w-14 h-14 bg-white/10 text-white rounded-xl flex items-center justify-center mb-8 border border-white/20 backdrop-blur-sm relative z-10">
                    <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Legacy Preservation Plan</h3>
                <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
                    A concrete financial structure ensuring your hard-earned assets pass seamlessly to the next generation, protected from unexpected liabilities.
                </p>
                
                <div className="space-y-3 mb-10 relative z-10">
                    {["Instant liquidity for estate taxes", "Assured inheritance mapping", "Protection from business liabilities", "Bespoke trust integration options"].map((f, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                            <CheckCircleIcon className="text-[#E31837]" /> {f}
                        </div>
                    ))}
                </div>
                <PrimaryButton variant="solid" className="w-full relative z-10 box-border text-[#0F172A] bg-white hover:bg-slate-100 shadow-none">Discuss Legacy Planning</PrimaryButton>
            </motion.div>
        </div>
      </Section>

      {/* 5. Social Proof / Process */}
      <Section id="proof" className="bg-white">
        <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
            
            {/* The Process */}
            <div className="lg:col-span-5 space-y-12">
                <div>
                     <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31837] block mb-4">Our Standard</span>
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] mb-6">How We Protect You</h2>
                     <p className="text-slate-500">A deliberate, sophisticated approach to your financial security.</p>
                </div>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    {[
                        { title: "Deep Discovery Audit", desc: "Understanding your exact financial posture and family structure.", icon: Coffee },
                        { title: "Bespoke Plan Design", desc: "Tailoring Prudential's elite instruments to your specific needs.", icon: Building2 },
                        { title: "Active Stewardship", desc: "Continuous monitoring, claim advocacy, and annual recalibrations.", icon: ThumbsUp }
                    ].map((step, i) => (
                        <div key={i} className="relative flex items-start gap-6">
                            <div className="w-10 h-10 rounded-full bg-white border border-[#E31837] text-[#E31837] flex items-center justify-center shrink-0 shadow-sm relative z-10">
                                <step.icon className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#0F172A] mb-1">{step.title}</h4>
                                <p className="text-sm text-slate-500">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
                <QuoteIcon className="w-12 h-12 text-[#E31837]/20 mb-8" />
                <div className="space-y-12">
                    <div className="space-y-4">
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                        </div>
                        <p className="text-xl font-medium text-[#0F172A] leading-relaxed italic">
                            &quot;When my wife needed sudden surgery in Singapore, Tom didn&apos;t just file the claim. Eric was on the phone with the hospital at 2 AM arranging the guarantee letter. You can&apos;t put a price on that kind of dedication.&quot;
                        </p>
                        <div>
                            <div className="font-bold text-[#0F172A]">Budi S.</div>
                            <div className="text-sm text-slate-500">Tech Executive, Jakarta</div>
                        </div>
                    </div>
                    
                    <div className="h-px w-full bg-slate-200" />
                    
                    <div className="space-y-4">
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                        </div>
                        <p className="text-lg font-medium text-[#0F172A] leading-relaxed italic">
                            &quot;They mapped out a legacy plan that actually made sense for our family business structure. Professional, transparent, and completely trustworthy.&quot;
                        </p>
                        <div>
                            <div className="font-bold text-[#0F172A]">A. Wijaya</div>
                            <div className="text-sm text-slate-500">Business Owner, Surabaya</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </Section>

      {/* 6. CTA Finale */}
      <section className="py-24 px-4 bg-[#E31837] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black opacity-10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to fortify your future?</h2>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
                Schedule a complimentary 30-minute Wealth Protection Audit with Tom. Confidential, objective, and strictly professional.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <PrimaryButton className="w-full sm:w-auto bg-[#0F172A] hover:bg-black text-white px-10 py-5 text-lg shadow-xl shadow-black/20">
                     Schedule Audit via WhatsApp
                </PrimaryButton>
                <div className="text-white/60 text-sm font-medium px-4 py-2">
                    Usually replies within 2 hours
                </div>
            </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#0F172A] pt-20 pb-10 px-4 text-slate-400">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative">
              <div className="space-y-4">
                  <div className="text-white font-bold text-2xl tracking-tight">Tom & Eric.</div>
                  <p className="text-sm leading-relaxed max-w-xs text-slate-500">
                      Senior Prudential Agency Partners serving Indonesia&apos;s established families and executives with integrity.
                  </p>
              </div>
              
              <div>
                  <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
                  <ul className="space-y-3 text-sm font-medium">
                      <li><Link href="#philosophy" className="hover:text-white transition-colors">Philosophy</Link></li>
                      <li><Link href="#solutions" className="hover:text-white transition-colors">Core Solutions</Link></li>
                      <li><Link href="#proof" className="hover:text-white transition-colors">Client Proof</Link></li>
                  </ul>
              </div>

              <div>
                  <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
                  <ul className="space-y-4 text-sm font-medium">
                      <li className="flex items-center gap-3">
                          <PhoneCall className="w-4 h-4 text-slate-500" />
                          <a href="#" className="hover:text-white transition-colors">+62 812-3456-7890</a>
                      </li>
                      <li className="flex items-center gap-3">
                          <ArrowUpRight className="w-4 h-4 text-slate-500" />
                          <a href="#" className="hover:text-white transition-colors">Book a Meeting</a>
                      </li>
                  </ul>
              </div>
          </div>
          
          <div className="max-w-7xl mx-auto border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
              <p>© {new Date().getFullYear()} Tom & Eric - Prudential Partners. All rights reserved.</p>
              <div className="flex gap-4">
                  <span className="opacity-50">Demo Website</span>
                  <span>Powered by <a href="#" className="hover:text-white font-semibold transition-colors">Karya Kilat</a></span>
              </div>
          </div>
      </footer>
    </div>
  );
}

// Helpers
function CheckCircleIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5 text-[#E31837]", className)}>
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
    )
}

function QuoteIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M6 19q-1.65 0-2.825-1.175T2 15q0-2.525 1.55-4.337T7 8.325V11q-1.25.175-2.125 1.088T4 14.5q0 .85.575 1.425T6 16.5q.85 0 1.425-.575T8 14.5V11.4q0-2.075-1.075-3.662T4.55 5h3.025q1.6 1.825 2.513 4.025T11 14.15v2.85q0 1.65-1.175 2.825T7 21h-1v-2h1Zm10 0q-1.65 0-2.825-1.175T12 15q0-2.525 1.55-4.337T17 8.325V11q-1.25.175-2.125 1.088T14 14.5q0 .85.575 1.425T16 16.5q.85 0 1.425-.575T18 14.5V11.4q0-2.075-1.075-3.662T14.55 5h3.025q1.6 1.825 2.513 4.025T21 14.15v2.85q0 1.65-1.175 2.825T17 21h-1v-2h1Z" />
        </svg>
    )
}
