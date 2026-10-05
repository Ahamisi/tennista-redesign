import type { Metadata } from "next";
import { OurApproach } from "@/components/sections/our-approach";
import { OurMission } from "@/components/sections/our-mission";
import { OurValues } from "@/components/sections/our-values";
import { Quotes } from "@/components/sections/quotes";
import { SinceTennista } from "@/components/sections/since-tennista";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "To create a world where every young person in underserved communities can thrive, through tennis, character, academics, and healthy lifestyles.",
  alternates: { canonical: "/what-defines-us" },
};

export default function WhatDefinesUsPage() {
  return (
    <>
      <OurMission />
      <Quotes
        edge="page"
        overlapNext
        items={[
          {
            text: "Success is a journey, not a destination. The doing is often more important than the outcome.",
            attribution: "Arthur Ashe",
            photo: "Arthur Ashe",
            image: "/quotes/arthur-ashe.jpg",
            imageAlign: "right",
            imagePosition: "object-[center_16%]",
          },
        ]}
      />
      <SinceTennista />
      <OurApproach />
      <OurValues />
      <Quotes
        id="science-quote"
        edge="page"
        items={[
          {
            text: "Science has proven that sports and physical activity positively impart academic excellence, just as academic discipline sharpens performance in sport.",
            caption:
              "Our programme is built on this connection, giving every beneficiary the opportunity to thrive in both aspects.",
            photo: "Tennis ball on a racket",
            image: "/quotes/science-proven.jpg",
            imagePosition: "object-right",
          },
        ]}
      />
    </>
  );
}
