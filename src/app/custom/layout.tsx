import { constructMetadata } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Custom Premium Web Development",
  description:
    "Custom website premium untuk bisnis Anda. Custom WordPress atau Headless WP + Next.js. Design premium, 5+ halaman, CMS, maintenance gratis.",
});

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
