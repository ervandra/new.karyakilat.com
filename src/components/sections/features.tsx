import Section from "@/components/section";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe, ClipboardList, Store, User } from "lucide-react";

const features = [
  {
    Icon: User,
    name: "Personal Authority System",
    description: "Ideal untuk agen & freelancer. Profil lengkap, portofolio, dan kontak dalam satu pusat kendali digital.",
    href: "#",
    cta: "Lihat Demo",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Store,
    name: "Business Command Center",
    description: "Untuk UMKM & Bisnis Lokal. Katalog, Maps, dan Operasional yang terintegrasi.",
    href: "#",
    cta: "Lihat Demo",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Globe,
    name: "Custom Domain Mastery",
    description: "Upgrade ke namakamu.com. Hapus kesan 'gratisan' dan bangun aset digital yang sesungguhnya.",
    href: "#",
    cta: "Cek Domain",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: ClipboardList,
    name: "WA Lead & Mini-CRM",
    description: "Sistem lead capture terintegrasi: Form → Google Spreadsheet → WhatsApp Link. Kelola prospek dengan mudah.",
    href: "#",
    cta: "Lihat Demo",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: User,
    name: "Concierge Service (Beta)",
    description: "Anda sibuk? Tim kami yang bangunkan sistemnya untuk Anda. Terima beres.",
    href: "#",
    cta: "Hubungi Tim",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function Component() {
  return (
    <Section id="features" title="Sistem, Bukan Sekadar Web" subtitle="Infrastruktur digital lengkap untuk bisnis, agen, dan profesional.">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </Section>
  );
}
