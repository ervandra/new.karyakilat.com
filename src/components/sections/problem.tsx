import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Users } from "lucide-react";

const problems = [
  {
    title: "The Fragmented Presence",
    description:
      "Your business is established. But online, your 'front door' is scattered across messy social links and outdated pages. First impressions cost you premium clients daily.",
    icon: Globe,
  },
  {
    title: "The Agency Paradox",
    description:
      "Agencies take weeks and charge millions. DIY builders look cheap and generic. Neither understands that your time is worth more than endless meetings and revisions.",
    icon: Clock,
  },
  {
    title: "The Trust Deficit",
    description:
      "When partners Google you, what do they find? A 'Linktree' profile signals 'side hustle'—not the established market leader you actually are.",
    icon: Users,
  },
];

export default function Component() {
  return (
    <Section
      title="The Reputation Gap"
      subtitle="Why established business owners lose credibility in the digital space"
    >
      <div className="relative mx-auto w-full max-w-4xl mt-8 mb-8 rounded-2xl overflow-hidden border border-primary/20">
        <img 
          src="/images/chaos-vs-structure.jpg" 
          alt="Chaos vs Structure - The Reputation Gap"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-card border-border/50 shadow-none hover:border-primary/30 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-serif">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}

