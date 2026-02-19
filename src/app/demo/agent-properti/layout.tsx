import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandra Wijaya | Senior Property Consultant BSD & Gading Serpong",
  description: "Spesialis properti premium di BSD City, Gading Serpong, dan Alam Sutera. 12 tahun pengalaman, 350+ transaksi sukses.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans antialiased selection:bg-[#d4af37] selection:text-black",
        playfair.variable,
        inter.variable
      )}>
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
