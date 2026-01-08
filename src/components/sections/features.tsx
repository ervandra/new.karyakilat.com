import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { Globe, Mail, Store, User } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Microsite Personal",
    content: "Ideal untuk agen asuransi, properti, dan freelancer. Tampilkan profil lengkap, portofolio, dan kontak dalam satu link yang elegan.",
    image: "/dashboard.png",
    icon: <User className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Microsite Bisnis",
    content: "Solusi untuk UMKM dan bisnis lokal. Tampilkan katalog produk, lokasi Google Map, jam operasional, dan kontak bisnis dalam satu halaman.",
    image: "/dashboard.png",
    icon: <Store className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Undangan Digital",
    content: "Undangan pernikahan atau event yang elegan, hemat biaya cetak, dan mudah disebarkan melalui WhatsApp atau media sosial.",
    image: "/dashboard.png",
    icon: <Mail className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Custom Domain",
    content: "Upgrade branding Anda dengan nama domain sendiri (contoh: namakamu.com) agar terlihat lebih kredibel dan profesional di mata klien.",
    image: "/dashboard.png",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Layanan Kami" subtitle="Solusi digital untuk profesional modern">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
