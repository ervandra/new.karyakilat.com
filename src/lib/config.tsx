import { Icons } from "@/components/icons";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Karya Kilat",
  description: "Your Digital Business Manager. Kami architect, launch, dan manage ekosistem digital bisnis Anda — Done-for-You dalam 14 Hari untuk pemimpin bisnis BSD & Gading Serpong.",
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
    priceRange: "Rp 9.750.000 - Rp 65.000.000+",
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
    whatsapp: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20Digital%20Business%20Manager%20dari%20Karya%20Kilat.",
    whatsappSignature: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20SIGNATURE%20(Rp%209.75jt%20Founding%20Rate)%20Digital%20Business%20Manager.%20Bisnis%20saya%3A%20",
    whatsappSovereign: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20SOVEREIGN%20(Rp%2022.5jt%20Founding%20Rate)%20Digital%20Business%20Manager.%20Saya%20butuh%20multi-page%20%2B%20CRM%20integration.",
    whatsappAuthority: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20AUTHORITY%20(Rp%2045jt%20Founding%20Rate)%20Digital%20Business%20Manager.%20Saya%20cari%20partner%20digital%20jangka%20panjang%20dengan%20SLA.",
    whatsappCustom: "https://wa.me/6285124354868?text=Halo%2C%20saya%20tertarik%20dengan%20Custom%20Web%20Development%20dari%20Karya%20Kilat%20(mulai%20Rp%2035jt).%20Bisnis%20saya%3A%20",
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

