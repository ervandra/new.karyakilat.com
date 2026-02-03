import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import Pricing from "@/components/sections/pricing";
import Blueprint from "@/components/sections/blueprint";
import Comparison from "@/components/sections/comparison";
import Portfolio from "@/components/sections/portfolio";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Blueprint />
      <Features />
      <Portfolio />
      <TestimonialsCarousel />
      <Pricing />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
