import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-primary text-lg font-serif">Karya Kilat</p>
            <p className="text-sm text-muted-foreground mt-1">
              Architecting Success for BSD & Gading Serpong Leaders
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Gading Serpong, Tangerang | 0851-2435-4868
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Karya Kilat. White-glove digital infrastructure for executive leaders.
          </p>
        </div>
      </div>
    </footer>
  );
}

