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
      "Karya Kilat bukan sekadar bikin microsite, tapi membangun sistem kredibilitas saya. Klien sekarang langsung percaya karena profil digital saya terlihat sangat profesional.",
  },
  {
    name: "Siti Aminah",
    role: "Property Agent",
    quote:
      "Dulu saya hanya punya kartu nama, sekarang punya command center digital. Semua listing, testimoni, dan kontak tersaji rapi dalam satu link. Keren banget!",
  },
  {
    name: "Reza Pratama",
    role: "Freelance Desainer",
    quote:
      "Prosesnya super cepat—pagi kirim data, sore sudah jadi. Portofolio saya jadi terlihat seperti punya tim sendiri. Recommended buat freelancer serius!",
  },
  {
    name: "Tanya Larasati",
    role: "Content Creator",
    quote:
      "Link di bio Instagram saya sekarang bukan link biasa, tapi aset digital. Aesthetic, clean, dan yang penting: menghasilkan. Banyak yang langsung DM setelah lihat.",
  },
];

export default function Component() {
  return (
    <Section
      title="Kata Mereka"
      subtitle="Profesional yang sudah transformasi digital bersama Karya Kilat."
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
