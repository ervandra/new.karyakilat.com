"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import Ripple from "@/components/magicui/ripple";
import Safari from "@/components/safari";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Bespoke Luxury Design",
    description:
      "No templates. High-end typography and dark-mode aesthetics that reflect your actual market position. Every pixel crafted to command authority.",
    className: "hover:bg-primary/5 transition-all duration-500 ease-out",
    content: (
      <>
        <Safari
          src={`/dashboard.png`}
          url="karyakilat.com/executive"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(212,175,55,.15)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "Zero-Tech Delivery",
    description:
      "We handle hosting, security, domain, and updates. You never see a dashboard. Your only job is to approve the final look—then get back to running your business.",
    className:
      "order-3 xl:order-none hover:bg-primary/5 transition-all duration-500 ease-out",
    content: (
      <Safari
        src={`/dashboard.png`}
        url="karyakilat.com/executive"
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(212,175,55,.15)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    title: "WhatsApp Priority Core",
    description:
      "Engineered specifically for the Indonesian 'WA-First' economy. Every element drives premium conversations directly to your phone—no middlemen, no delays.",
    className:
      "md:row-span-2 hover:bg-primary/5 transition-all duration-500 ease-out",
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#d4af37"
          maxOpacity={0.15}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <Safari
          src={`/dashboard.png`}
          url="karyakilat.com/executive"
          className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(212,175,55,.15)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "72-Hour Launch",
    description:
      "From strategy call to live command center in 72 hours. We move at executive pace because your time is your most valuable asset.",
    className:
      "flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-primary/5 transition-all duration-500 ease-out",
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          src={`/dashboard.png`}
          url="karyakilat.com/executive"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(212,175,55,.15)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
];

export default function Component() {
  return (
    <Section
      title="The Command Center"
      subtitle="Your Digital Headquarters"
      description="We don't sell websites. We architect bespoke digital destinations that validate your status and convert interest into WhatsApp conversations instantly."
      className="bg-card"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-background border border-border/50 p-6 rounded-2xl",
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold mb-2 text-primary font-serif text-lg">
                {feature.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
            </div>
            {feature.content}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

