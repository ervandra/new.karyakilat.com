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
    question: "Berapa lama proses pembuatan aset digital saya?",
    answer: "Prosesnya sangat cepat. Maksimal 1x24 jam setelah data lengkap (foto, bio, kontak) kami terima, sistem digital Anda sudah online.",
  },
  {
    question: "Apa saja data yang perlu saya siapkan?",
    answer: "Cukup siapkan: foto profil berkualitas, deskripsi singkat (bio), daftar layanan/produk, link media sosial, dan nomor WhatsApp untuk tombol CTA.",
  },
  {
    question: "Apakah ada biaya berlangganan bulanan?",
    answer: "TIDAK. Paket Basic adalah pembayaran sekali untuk selamanya (Lifetime). Aset digital Anda akan terus online tanpa biaya bulanan.",
  },
  {
    question: "Bisa revisi kalau ada yang kurang pas?",
    answer: "Tentu! Revisi minor hingga 2x gratis setelah jadi, untuk memastikan hasilnya sesuai dengan identitas profesional Anda.",
  },
  {
    question: "Apa bedanya dengan Linktree atau link bio gratis?",
    answer: "Perbedaan utamanya adalah kepemilikan dan profesionalisme. Karya Kilat membangun aset digital yang Anda miliki, bukan sekadar profil di platform orang lain. Desain premium, custom, dan tidak ada branding pihak ketiga.",
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
