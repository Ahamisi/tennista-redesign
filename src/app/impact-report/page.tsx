import type { Metadata } from "next";
import { ImpactReports } from "@/components/sections/impact-reports";

export const metadata: Metadata = {
  title: "Impact Report",
  description:
    "Download Tennista Foundation impact reports. See how tennis, education, and life skills are reaching young people.",
  alternates: { canonical: "/impact-report" },
};

export default function ImpactReportPage() {
  return <ImpactReports />;
}
