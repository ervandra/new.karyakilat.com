import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { FileWarning, Link, Wallet } from "lucide-react";

const problems = [
  {
    title: "Kartu Nama Fisik Sering Hilang",
    description:
      "Klien seringkali kehilangan kartu nama fisik Anda sebelum sempat menyimpan kontak atau menghubungi Anda kembali.",
    icon: FileWarning,
  },
  {
    title: "Link Bio Kurang Menarik",
    description:
      "Tampilan link bio standar (seperti Linktree polos) tidak mencerminkan profesionalitas dan branding premium Anda.",
    icon: Link,
  },
  {
    title: "Website Custom Mahal & Ribet",
    description:
      "Pembuatan website custom konvensional seringkali membutuhkan biaya jutaan rupiah dan waktu pengerjaan berminggu-minggu.",
    icon: Wallet,
  },
];

export default function Component() {
  return (
    <Section
      title="Masalah"
      subtitle="Tantangan Profesional di Era Digital."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
