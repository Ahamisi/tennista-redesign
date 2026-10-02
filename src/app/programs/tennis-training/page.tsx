import type { Metadata } from "next";
import { TennisClinic } from "@/components/sections/tennis-clinic";

export const metadata: Metadata = {
  title: "Tennis Clinic for Kids",
  description:
    "Eight weeks of beginner-to-expert tennis training, covering physical skills and the mental skills at the forefront of every session.",
  alternates: { canonical: "/programs/tennis-training" },
};

export default function TennisTrainingPage() {
  return <TennisClinic />;
}
