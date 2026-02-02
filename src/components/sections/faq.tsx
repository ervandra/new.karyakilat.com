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
    question: "Berapa lama prosesnya?",
    answer: "Dari konsultasi hingga website live: 14 hari. Beberapa klien bahkan sudah online dalam 72 jam. Kami bergerak cepat karena kami paham waktu Anda sangat berharga. Konsultasi awal hanya 20 menit.",
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
    question: "Apa bedanya dengan pakai template?",
    answer: "Template = Anda salah satu dari 12,000+ pengguna. Karya Kilat = Anda 1 dari 3 klien per bulan. Kami handle everything: design custom, domain, hosting, security, copywriting support, dan maintenance. Anda hanya perlu approve desain final.",
  },
  {
    question: "Apa bedanya dengan agency biasa?",
    answer: "Agency butuh minggu-an meeting dan revisi tanpa akhir. Kami deliver dalam 14 hari dengan satu kontak langsung (Ervandra) yang menjadi tech partner Anda. Personal attention yang agency tidak bisa berikan.",
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

