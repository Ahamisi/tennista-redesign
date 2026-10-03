import type { Metadata } from "next";
import { BlogSection } from "@/components/sections/blog-section";
import { Champion } from "@/components/sections/champion";
import { GetInTheGame } from "@/components/sections/get-in-the-game";
import { Hero } from "@/components/sections/hero";
import { MeansSection } from "@/components/sections/means-section";
import { Numbers } from "@/components/sections/numbers";
import { Brands, PublicEyes } from "@/components/sections/partners";
import { Philosophy } from "@/components/sections/philosophy";
import { Quotes } from "@/components/sections/quotes";
import { VisionMission } from "@/components/sections/vision-mission";
import { WhyTennista } from "@/components/sections/why-tennista";
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
      <VisionMission />
      <Quotes />
      <Philosophy />
      <Numbers />
      <WhyTennista />
      <Champion
        image="/every-champion-bg.jpg"
        cutout="/every-champion-girl-primary.png"
        photo="Two girls with tennis rackets on an outdoor court"
      />
      <GetInTheGame />
      <BlogSection />
      <Brands />
      <PublicEyes />
    </>
  );
}
