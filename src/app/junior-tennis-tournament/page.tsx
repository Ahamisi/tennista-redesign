import type { Metadata } from "next";
import { JuniorTennisTournament } from "@/components/sections/junior-tennis-tournament";

export const metadata: Metadata = {
  title: "Junior Tennis Tournament Registration",
  description:
    "Register for the 4-day Junior Tennis tournament at Rowe Park, Yaba, Lagos. Open to junior players aged 16 and below.",
  alternates: { canonical: "/junior-tennis-tournament" },
};

export default function JuniorTennisTournamentPage() {
  return <JuniorTennisTournament />;
}
