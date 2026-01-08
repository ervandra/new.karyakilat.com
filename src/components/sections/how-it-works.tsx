import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Pilih Paket & Request",
    content:
      "Hubungi kami via WhatsApp, pilih desain microsite yang paling cocok dengan gaya personal branding Anda.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Kirim Data",
    content:
      "Cukup kirimkan foto profil, bio singkat, layanan, dan kontak yang ingin ditampilkan. Kami yang urus sisanya.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Microsite Siap Pakai",
    content:
      "Dalam waktu 1x24 jam, microsite premium Anda sudah online dan siap dibagikan ke klien atau di bio Instagram.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
