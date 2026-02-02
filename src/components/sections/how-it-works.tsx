import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Coffee, Mic, Rocket } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. The Strategic Coffee",
    content:
      "A 20-minute conversation where we listen to your business goals and tech headaches. No forms, no questionnaires—just a relaxed discussion to understand your vision.",
    image: "/dashboard.png",
    icon: <Coffee className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Legacy Extraction",
    content:
      "A brief voice interview to capture your brand's soul. We extract everything needed—your story, your differentiators, your voice. You stay in your zone of genius.",
    image: "/dashboard.png",
    icon: <Mic className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Command Center Live",
    content:
      "We build, write, and launch your digital headquarters in 72 hours. You receive a complete success packet and become our priority support client.",
    image: "/dashboard.png",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section 
      title="The Concierge Journey" 
      subtitle="Total Time Investment: 20 Minutes"
    >
      <Features data={data} />
    </Section>
  );
}

