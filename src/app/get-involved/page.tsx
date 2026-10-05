import type { Metadata } from "next";
import { GetInTheGame } from "@/components/sections/get-in-the-game";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Serve, support, sponsor, or join as a student. Each way in has its own page, and a form when you are ready.",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return <GetInTheGame detailed />;
}
