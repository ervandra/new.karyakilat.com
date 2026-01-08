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
    question: "Berapa lama proses pembuatannya?",
    answer: "Proses pembuatan microsite sangat cepat, maksimal 1x24 jam setelah data lengkap (foto, bio, kontak) kami terima.",
  },
  {
    question: "Apa saja data yang perlu disiapkan?",
    answer: "Anda cukup menyiapkan foto profil/produk berkualitas, deskripsi singkat (bio), daftar layanan, link sosial media, dan nomor WhatsApp.",
  },
  {
    question: "Apakah ada biaya bulanan?",
    answer: "Untuk paket Basic Microsite, TIDAK ADA biaya bulanan. Anda cukup membayar sekali untuk masa aktif selamanya (Lifetime).",
  },
  {
    question: "Apakah bisa revisi?",
    answer: "Tentu! Kami memberikan kesempatan revisi minor maksimal 2x setelah microsite jadi, untuk memastikan hasilnya sesuai keinginan Anda.",
  },
];

export default function FAQ() {
  return (
    <Section title="FAQ" subtitle="Pertanyaan yang Sering Diajukan">
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
              className="w-full border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
        Masih punya pertanyaan? Hubungi kami di{" "}
        <a href="https://wa.me/6281234567890" target="_blank" className="underline">
          WhatsApp
        </a>
      </h4>
    </Section>
  );
}
