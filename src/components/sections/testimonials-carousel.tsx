import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdOutlineFormatQuote } from "react-icons/md";

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "CEO, Premium Dental Clinic BSD",
    quote:
      "Finally, a digital presence that matches the quality of our clinic. Van understood exactly what we needed—no endless meetings, just results. Patients now find us and trust us before they even walk in.",
  },
  {
    name: "Ratna Kusuma",
    role: "Founder, Boutique Interior Design Studio",
    quote:
      "I was skeptical about the 72-hour timeline. But they delivered a command center that my high-end clients immediately noticed. The ROI was evident within the first week.",
  },
  {
    name: "Hendra Santoso",
    role: "Managing Director, BSD Property Group",
    quote:
      "As a busy executive, I needed someone who could handle everything. One WhatsApp message and my site is updated. That's the kind of partnership I was looking for.",
  },
  {
    name: "Maya Indira",
    role: "Owner, Gading Serpong F&B Enterprise",
    quote:
      "The difference between before and after is night and day. My business finally looks as premium online as it does in person. Worth every rupiah.",
  },
];

export default function Component() {
  return (
    <Section
      title="Client Voices"
      subtitle="What BSD & Gading Serpong leaders say about their Digital Headquarters"
    >
      <Carousel>
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-primary/40 my-4 mx-auto" />
                    <BlurFade delay={0.25} inView>
                      <h4 className="text-xl font-medium max-w-lg mx-auto px-10 leading-relaxed text-foreground/90">
                        &quot;{testimonial.quote}&quot;
                      </h4>
                    </BlurFade>
                    <div className="mt-6">
                      <BlurFade delay={0.25 * 3} inView>
                        <h4 className="text-lg font-semibold my-2 font-serif text-primary">
                          {testimonial.name}
                        </h4>
                      </BlurFade>
                    </div>
                    <BlurFade delay={0.25 * 4} inView>
                      <div className="mb-3">
                        <span className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </span>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        <div className="md:block hidden absolute bottom-0 left-1/2 -translate-x-1/2">
          <CarouselPrevious className="border-primary/30 hover:bg-primary/10" />
          <CarouselNext className="border-primary/30 hover:bg-primary/10" />
        </div>
      </Carousel>
    </Section>
  );
}

