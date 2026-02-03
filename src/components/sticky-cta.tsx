"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <Link
        href="https://wa.me/6285124354868?text=Halo%2C%20saya%20mau%20konsultasi%20gratis%20tentang%20Digital%20Headquarters"
        target="_blank"
        className={cn(
          "flex items-center gap-2 px-5 py-3 rounded-full",
          "bg-[#25D366] text-white font-semibold",
          "shadow-lg hover:shadow-xl transition-all",
          "hover:scale-105 active:scale-95"
        )}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Konsultasi Gratis</span>
        <span className="sm:hidden">Chat</span>
      </Link>
    </div>
  );
}
