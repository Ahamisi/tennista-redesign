import type { Metadata } from "next";
import { CareersForm } from "@/components/sections/careers-form";
import { CareersHero } from "@/components/sections/careers-hero";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Tennista Foundation. Share a little about yourself and the way you'd like to help young people through tennis.",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return (
    <>
      <CareersHero />
      <CareersForm />
    </>
  );
}
