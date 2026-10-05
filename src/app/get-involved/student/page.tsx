import type { Metadata } from "next";
import { ActivityDetail } from "@/components/sections/get-in-the-game";

export const metadata: Metadata = {
  title: "Student",
  description: "Become a TenniSTAR. Grow on the court and in the classroom.",
  alternates: { canonical: "/get-involved/student" },
};

export default function StudentPage() {
  return <ActivityDetail title="Student" />;
}