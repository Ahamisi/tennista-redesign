import type { Metadata } from "next";
import { AboutPeople } from "@/components/sections/about-people";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team leaders and advisory board behind Tennista Foundation.",
  alternates: { canonical: "/our-team" },
};

export default function OurTeamPage() {
  return <AboutPeople />;
}
