import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { FileWarning, Link, Wallet } from "lucide-react";

const problems = [
  {
    title: "Kartu Nama = Jalan Buntu",
    description:
      "80% kartu nama fisik tidak pernah ditindaklanjuti. Klien kehilangan kartu Anda, dan Anda kehilangan peluang bisnis.",
    footnote: "(Sumber: Survei Internal, 2025)",
    icon: FileWarning,
  },
  {
    title: "Link Bio = Terlihat Gratisan",
    description:
      "Tampilan Linktree polos tidak menunjukkan otoritas. Di mata klien, Anda terlihat sama saja dengan jutaan pengguna lain.",
    icon: Link,
  },
  {
    title: "Website Custom = Mahal & Lama",
    description:
      "Agensi web menagih jutaan rupiah dan butuh waktu berminggu-minggu. Profesional sibuk tidak punya waktu untuk itu.",
    icon: Wallet,
  },
];

export default function Component() {
  return (
    <Section
      title="Masalah Utama"
      subtitle="Kenapa profesional kehilangan kredibilitas di era digital?"
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
                {"footnote" in problem && problem.footnote && (
                  <p className="text-xs text-muted-foreground/70 italic">{problem.footnote}</p>
                )}
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
