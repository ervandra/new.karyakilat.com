import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Coffee, Mic, Rocket } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. The Strategic Coffee",
    content:
      "A 20-minute conversation where we listen to your business goals and tech headaches. No forms, no questionnaires—just a relaxed discussion to understand your vision.",
    image: "/images/strategic-coffee.jpg",
    icon: <Coffee className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Brand Discovery Session",
    content:
      "A brief conversation to capture your brand's soul. We uncover your story, your differentiators, and your voice — so the final result sounds exactly like you, at your best.",
    image: "/images/legacy-extraction.jpg",
    icon: <Mic className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Command Center Live",
    content:
      "We build, write, and launch your digital headquarters in 72 hours. You receive a complete success packet and become our priority support client.",
    image: "/images/command-center-live.jpg",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section 
      id="how-it-works"
      title="The Concierge Journey" 
      subtitle="Total Time Investment: 20 Minutes"
    >
      <Features data={data} />
    </Section>
  );
}

