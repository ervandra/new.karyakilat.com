import { Icons } from "@/components/icons";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Karya Kilat",
  description: "White-glove digital infrastructure untuk CEO & komunitas eksklusif mereka. Zero hassle. Maximum authority. Digital Headquarters untuk pemimpin bisnis BSD & Gading Serpong.",
  url: "https://karyakilat.com",
  locale: "id_ID",
  author: {
    name: "Karya Kilat",
    url: "https://karyakilat.com",
  },
  keywords: [
    // Core premium keywords
    "digital headquarters",
    "executive digital presence",
    "premium web design indonesia",
    "white-glove web service",
    "bespoke website design",
    // Indonesian premium keywords
    "jasa website premium tangerang",
    "web design eksekutif gading serpong",
    "website bisnis premium bsd",
    "digital concierge indonesia",
    "website CEO indonesia",
    // Local authority keywords
    "digital partner BSD",
    "tech partner Gading Serpong",
    "website premium serpong",
    // Location keywords
    "Gading Serpong",
    "BSD City",
    "Tangerang Selatan",
    "Serpong",
  ],
  business: {
    type: "LocalBusiness",
    priceRange: "Rp 5.000.000 - Rp 35.000.000+",
    address: {
      streetAddress: "Gading Serpong",
      addressLocality: "Tangerang",
      addressRegion: "Banten",
      postalCode: "15810",
      addressCountry: "ID",
    },
    geo: {
      latitude: -6.2297,
      longitude: 106.6315,
    },
  },
  links: {
    email: "halo@karyakilat.com",
    twitter: "https://twitter.com/karyakilat",
    discord: "https://discord.gg/karyakilat",
    github: "https://github.com/karyakilat",
    instagram: "https://instagram.com/karyakilat",
    whatsapp: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20Digital%20Headquarters",
    whatsappProfessional: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20PROFESSIONAL%20(Rp%204.95jt)%20Digital%20Headquarters.%20Bisnis%20saya%3A%20",
    whatsappExecutive: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20EXECUTIVE%20(Rp%2011.96jt)%20Digital%20Headquarters.%20Saya%20butuh%20multi-page%20%2B%20CRM%20integration.",
    whatsappAuthority: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20AUTHORITY%20(Rp%2024.97jt)%20Digital%20Headquarters.%20Saya%20cari%20partner%20digital%20jangka%20panjang%20dengan%20SLA.",
    whatsappCustom: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Custom%20Premium%20Web%20Development%20Karya%20Kilat.%20Bisnis%20saya%3A%20",
  },
  header: [
    {
      href: "#how-it-works",
      label: "Process",
    },
    {
      href: "#testimonials",
      label: "Clients",
    },
    {
      href: "/custom",
      label: "Custom Web",
    },
    {
      href: "#faq",
      label: "FAQ",
    },
  ],
  pricing: [],
  faqs: [],
  footer: [
    {
      title: "Services",
      links: [
        { href: "#features", text: "Executive Presence", icon: null },
        { href: "#features", text: "Command Center", icon: null },
        { href: "#features", text: "Market Authority", icon: null },
        { href: "/custom", text: "Custom Web Development", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About", icon: null },
        { href: "#cta", text: "Contact", icon: null },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "https://wa.me/6285124354868",
          text: "WhatsApp",
          icon: <Icons.whatsapp />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;

