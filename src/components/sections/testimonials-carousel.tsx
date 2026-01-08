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
    name: "Budi Santoso",
    role: "Agen Asuransi",
    quote:
      "Sejak pakai microsite dari Karya Kilat, klien lebih percaya dan langsung kontak ke WA. Tampilannya jauh lebih profesional dibanding kartu nama biasa.",
  },
  {
    name: "Siti Aminah",
    role: "Property Agent",
    quote:
      "Desainnya elegan dan mewah. Sangat membantu saya menampilkan listing properti unggulan dalam satu link yang mudah dibagikan.",
  },
  {
    name: "Reza Pratama",
    role: "Freelance Desainer",
    quote:
      "Prosesnya super cepat, pagi kirim data, sore sudah jadi. Sangat recommended buat freelancer yang butuh portofolio online instan.",
  },
  {
    name: "Tanya Larasati",
    role: "Content Creator",
    quote:
      "Link di bio Instagram jadi jauh lebih aesthetic. Suka banget sama template-nya yang clean dan modern.",
  },
];

export default function Component() {
  return (
    <Section
      title="Kata Mereka"
      subtitle="Profesional yang puas dengan Karya Kilat"
    >
      <Carousel>
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <BlurFade delay={0.25} inView>
                      <h4 className="text-xl font-medium max-w-lg mx-auto px-10 italic">
                        &quot;{testimonial.quote}&quot;
                      </h4>
                    </BlurFade>
                    <div className="mt-6">
                      <BlurFade delay={0.25 * 3} inView>
                        <h4 className="text-lg font-semibold my-2">
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
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}
