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
    question: "How long does the entire process take?",
    answer: "From strategy call to live command center: 72 hours. We move at executive pace because we understand your time is your most valuable asset. The initial consultation is just 20 minutes.",
  },
  {
    question: "Do you have a portfolio I can see?",
    answer: "We're currently in our Founding Partner phase (Q1 2026), working with select BSD & Gading Serpong business owners. As a founding partner, you receive significant value in exchange for testimonials and case study participation. Contact us for work-in-progress previews.",
  },
  {
    question: "What's included in the 'white-glove' service?",
    answer: "Everything technical. We handle domain registration, hosting setup, SSL certificates, design, copywriting support, and ongoing maintenance. You never see a dashboard or deal with any technical decisions. Your only job is to approve the final look.",
  },
  {
    question: "Why don't you show prices publicly?",
    answer: "Because cookie-cutter pricing creates cookie-cutter results. Every business has unique positioning needs. We discuss investment during your strategy call to ensure we recommend the right tier for your specific situation and goals.",
  },
  {
    question: "What makes this different from hiring an agency?",
    answer: "Agencies require weeks of meetings, endless revisions, and six-figure budgets. We deliver in 72 hours with a single point of contact (Van, the founder) who becomes your ongoing tech partner. Personal attention agencies simply cannot match.",
  },
  {
    question: "What happens after launch?",
    answer: "You become a priority support client. Need a tweak? One WhatsApp message. Content update? We handle it. You're not buying a website—you're gaining a tech partner on speed-dial.",
  },
];

export default function FAQ() {
  return (
    <Section title="Common Questions" subtitle="Answers for discerning business owners">
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

