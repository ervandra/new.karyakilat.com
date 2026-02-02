import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { StructuredData } from "@/components/structured-data";
import { LeadCaptureProvider } from "@/components/lead-capture-context";
import LeadCaptureModal from "@/components/lead-capture-modal";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Fira_Sans, Merriweather } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif",
});

export const metadata: Metadata = constructMetadata({});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f0f0f" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={cn(
          firaSans.variable,
          merriweather.variable,
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LeadCaptureProvider>
            {children}
            <LeadCaptureModal />
          </LeadCaptureProvider>
          <ThemeToggle />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
