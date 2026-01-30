import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Karya Kilat",
  description: "Bangun Aset Digital untuk Profesional. Sistem kredibilitas online yang siap dalam 24 jam. Lebih dari sekadar microsite—ini adalah pusat kendali personal branding Anda.",
  url: "https://karyakilat.com",
  locale: "id_ID",
  author: {
    name: "Karya Kilat",
    url: "https://karyakilat.com",
  },
  keywords: [
    // Core keywords
    "aset digital profesional",
    "sistem kredibilitas online",
    "personal branding digital",
    "microsite premium",
    // Indonesian local keywords
    "jasa pembuatan website tangerang",
    "web design gading serpong",
    "landing page profesional",
    "website UMKM",
    "website bisnis lokal",
    "kartu nama digital",
    "link in bio premium",
    // English keywords
    "microsite",
    "digital authority",
    "professional branding",
    "web developer indonesia",
    // Location keywords
    "Gading Serpong",
    "Tangerang",
    "BSD",
    "Serpong",
  ],
  business: {
    type: "LocalBusiness",
    priceRange: "Rp 99,000 - Rp 399,000",
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
    whatsapp: "https://wa.me/6285124354868",
  },
  header: [
    {
      trigger: "Layanan",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Desain Premium",
          description: "Pilihan desain eksklusif untuk personal branding Anda.",
          href: "#features",
        },
        items: [
          {
            href: "#features",
            title: "Microsite Personal",
            description: "Untuk agen & freelancer.",
          },
          {
            href: "#features",
            title: "Microsite Bisnis",
            description: "Untuk UMKM & toko lokal.",
          },
        ],
      },
    },
    {
      href: "#how-it-works",
      label: "Cara Kerja",
    },
    {
      href: "#testimonials",
      label: "Testimoni",
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
      title: "Layanan",
      links: [
        { href: "#features", text: "Microsite Personal", icon: null },
        { href: "#features", text: "Microsite Bisnis", icon: null },
        { href: "#features", text: "Custom Domain", icon: null },
      ],
    },
    {
      title: "Perusahaan",
      links: [
        { href: "#", text: "Tentang Kami", icon: null },
        { href: "#cta", text: "Kontak", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "https://wa.me/6285124354868",
          text: "Whatsapp",
          icon: <Icons.whatsapp />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
