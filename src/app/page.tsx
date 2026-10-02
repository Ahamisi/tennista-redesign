import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { MeansSection } from "@/components/sections/means-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MeansSection />
    </>
  );
}
