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
    question: "Apakah ada portfolio yang bisa saya lihat?",
    answer: "Kami saat ini dalam fase Founding Partner (Q1 2026), bekerja dengan klien terpilih di BSD & Gading Serpong. Sebagai founding partner, Anda mendapatkan nilai lebih besar dengan harga spesial sebagai bagian dari program perdana kami. Hubungi kami untuk melihat preview proyek yang sedang berjalan.",
  },
  {
    question: "Apa saja yang termasuk dalam layanan white-glove ini?",
    answer: "Semua urusan teknis kami yang handle — domain, hosting, SSL, desain, dukungan copywriting, hingga maintenance rutin. Anda tidak perlu menyentuh dashboard atau mengambil keputusan teknis apapun. Cukup berikan masukan di akhir, dan ekosistem digital Anda siap berjalan.",
  },
  {
    question: "Apa bedanya dengan pakai template?",
    answer: "Template = Anda salah satu dari 12.000+ pengguna yang terlihat sama. Karya Kilat = Anda 1 dari 3 klien per bulan yang mendapat perhatian penuh. Desain kustom, domain, hosting, keamanan, copywriting — semuanya kami kelola. Anda fokus bisnis, digital presence Anda bekerja sendiri.",
  },
  {
    question: "Apa bedanya dengan agency biasa?",
    answer: "Agency konvensional butuh berminggu-minggu rapat dan revisi tanpa kejelasan. Kami deliver dalam 14 hari dengan satu titik kontak langsung yang menjadi Digital Business Manager Anda — bukan vendor, tapi partner jangka panjang.",
  },
  {
    question: "Apa yang terjadi setelah website live?",
    answer: "Anda masuk sebagai klien priority support kami. Butuh perubahan? Satu pesan WhatsApp. Update konten? Kami yang urus. Anda tidak sedang membeli website — Anda mendapatkan partner digital yang selalu siap.",
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

