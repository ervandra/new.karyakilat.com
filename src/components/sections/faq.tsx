import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";

const faqs = [
  {
    question: "How long does the process take?",
    answer: "From consultation to website live: 14 days. Some clients are online within 72 hours. We move fast because we know your time is precious. The initial consultation is only 20 minutes.",
  },
  {
    question: "Do you have a portfolio I can see?",
    answer: "We are currently in the Founding Partner phase (Q1 2026), working with a select group of clients in BSD & Gading Serpong. As a founding partner, you get exceptional value at a special rate as part of our inaugural program. Contact us to preview an active project.",
  },
  {
    question: "What's included in this white-glove service?",
    answer: "We handle every technical detail — domain, hosting, SSL, design, copywriting support, and ongoing maintenance. You never need to touch a dashboard or make any technical decisions. Just give your final approval, and your digital ecosystem is ready to run.",
  },
  {
    question: "How is this different from using a template?",
    answer: "Template = you're one of 12,000+ users who all look the same. Karya Kilat = you're 1 of 3 clients per month receiving our full attention. Custom design, domain, hosting, security, copywriting — all managed by us. You focus on business; your digital presence works for you.",
  },
  {
    question: "How is this different from a regular agency?",
    answer: "Traditional agencies need weeks of meetings and revisions with no clear timeline. We deliver in 14 days with a single, direct point of contact who becomes your Digital Business Manager — not a vendor, but a long-term partner.",
  },
  {
    question: "What happens after the website goes live?",
    answer: "You enter our priority support client program. Need a change? One WhatsApp message. Content update? We handle it. You're not buying a website — you're gaining a digital partner who's always on standby.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" title="Common Questions" subtitle="Answers for discerning business owners">
      <div className="mx-auto my-12 md:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={faq.question}
              className="w-full border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="px-4 text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
        Have other questions?{" "}
        <a href={siteConfig.links.whatsapp} target="_blank" className="text-primary hover:underline">
          Let&apos;s talk on WhatsApp
        </a>
      </h4>
    </Section>
  );
}

