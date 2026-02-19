"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    aspect: "Strategy",
    template: "None",
    premium: "60-min Deep Dive Strategy",
  },
  {
    aspect: "Design",
    template: "Template Reuse",
    premium: "100% Bespoke & Custom",
  },
  {
    aspect: "SEO & Speed",
    template: "Basic/Slow",
    premium: "20-Point SEO & <2s Speed",
  },
  {
    aspect: "Ownership",
    template: "Rented (Stop pay = lose site)",
    premium: "100% Yours Forever",
  },
  {
    aspect: "Support",
    template: "Ticket System",
    premium: "Direct WhatsApp Concierge",
  },
  {
    aspect: "Attention",
    template: "1 of 12,000 Clients",
    premium: "1 of 3 Clients per Month",
  },
];

export default function Comparison() {
  return (
    <Section
      id="comparison"
      title="Why Karya Kilat?"
      subtitle="Template Service vs Premium Concierge"
      className="bg-card"
    >
      <motion.div
        className="max-w-4xl mx-auto mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border/50">
          <table className="w-full">
            <thead>
              <tr className="bg-background">
                <th className="text-left p-4 font-serif font-semibold text-foreground">
                  Aspect
                </th>
                <th className="text-left p-4 font-serif font-semibold text-muted-foreground">
                  Template Service
                  <span className="block text-xs font-normal opacity-60">
                    (~$30/mo)
                  </span>
                </th>
                <th className="text-left p-4 font-serif font-semibold text-primary">
                  Karya Kilat Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-background/50" : "bg-background"}
                >
                  <td className="p-4 font-medium text-foreground">{row.aspect}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm">{row.template}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{row.premium}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border/50 rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-3">{row.aspect}</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider opacity-60">Template:</span>
                    <p className="text-sm">{row.template}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary">Karya Kilat:</span>
                    <p className="text-sm font-medium">{row.premium}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
