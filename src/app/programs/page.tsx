import type { Metadata } from "next";
import { ProgramTabs } from "@/components/sections/program-tabs";
import { ProgramsHero } from "@/components/sections/programs-hero";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Tennis instruction, educational development, and life skills. Tennista programs help young people excel in the classroom, on the court, and in their communities.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramTabs />
    </>
  );
}
