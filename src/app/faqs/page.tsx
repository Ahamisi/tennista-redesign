import type { Metadata } from "next";
import { FaqHero } from "@/components/sections/faq-hero";
import { FaqList } from "@/components/sections/faq-list";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Tennista Foundation: what we do, where we work, who can take part, and how to support the mission.",
  alternates: { canonical: "/faqs" },
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqList />
    </>
  );
}
