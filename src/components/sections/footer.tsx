import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-white text-lg">Karya Kilat © 2026</p>
            <p className="text-sm">Microsite Premium untuk Profesional Modern</p>
            <p className="text-sm mt-2">📍 Gading Serpong, Tangerang | 📱 0851-2435-4868</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
