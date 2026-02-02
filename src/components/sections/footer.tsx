import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Company Info */}
          <div>
            <p className="font-bold text-primary text-lg font-serif">Karya Kilat</p>
            <p className="text-sm text-muted-foreground mt-1">
              Architecting Success for BSD & Gading Serpong Leaders
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Gading Serpong, Tangerang | 0851-2435-4868
            </p>
          </div>

          {/* Personal Branding - Ervandra Halim */}
          <div className="md:text-right">
            <p className="font-bold text-foreground text-lg font-serif">by Ervandra Halim</p>
            <p className="text-sm text-primary mt-1">
              Your Tech Partner
            </p>
            {/* <p className="text-sm text-muted-foreground mt-2 italic">
              "Bisnis + Teknologi = Growth + Leverage = More Revenue"
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Honesty &bull; Excellence &bull; Integrity
            </p> */}
            <div className="flex gap-4 mt-3 md:justify-end">
              <Link 
                href="https://linkedin.com/in/ervandra" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://instagram.com/karyakilat" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Karya Kilat. White-glove digital infrastructure for executive leaders.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
