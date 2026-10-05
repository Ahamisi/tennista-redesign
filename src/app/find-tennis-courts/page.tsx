import type { Metadata } from "next";
import { FindTennisCourts } from "@/components/sections/find-tennis-courts";

export const metadata: Metadata = {
  title: "Find Tennis Courts",
  description: "Find tennis clubs, courts, and sports venues by country and state.",
  alternates: { canonical: "/find-tennis-courts" },
};

export default function FindTennisCourtsPage() {
  return <FindTennisCourts />;
}
