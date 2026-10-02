import type { Metadata } from "next";
import { JuniorTennisOpen } from "@/components/sections/junior-tennis-open";

export const metadata: Metadata = {
  title: "Junior Tennis Open",
  description:
    "The Tennista Foundation Junior Tennis Tournament is a competitive platform for young players aged 8 to 16.",
  alternates: { canonical: "/junior-tennis-open" },
};

export default function JuniorTennisOpenPage() {
  return <JuniorTennisOpen />;
}
