import Section from "@/components/section";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe, ClipboardList, Store, User } from "lucide-react";

const features = [
  {
    Icon: User,
    name: "Personal Authority System",
    description: "Perfect for agents & freelancers. Complete profile, portfolio, and contact in one digital command hub.",
    href: "#",
    cta: "View Demo",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Store,
    name: "Business Command Center",
    description: "For SMEs & Local Businesses. Integrated catalog, Maps, and operations in one place.",
    href: "#",
    cta: "View Demo",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Globe,
    name: "Custom Domain Mastery",
    description: "Upgrade to yourname.com. Drop the 'free tier' look and build a real digital asset.",
    href: "#",
    cta: "Check Domain",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: ClipboardList,
    name: "WA Lead & Mini-CRM",
    description: "Integrated lead capture system: Form → Google Spreadsheet → WhatsApp Link. Manage prospects effortlessly.",
    href: "#",
    cta: "View Demo",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: User,
    name: "Concierge Service (Beta)",
    description: "Too busy? Our team builds the whole system for you. Just receive the keys.",
    href: "#",
    cta: "Contact Team",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function Component() {
  return (
    <Section id="features" title="A System, Not Just a Website" subtitle="Complete digital infrastructure for businesses, agents, and professionals.">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </Section>
  );
}
