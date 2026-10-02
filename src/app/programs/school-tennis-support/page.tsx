import type { Metadata } from "next";
import { SchoolTennisSupport } from "@/components/sections/school-tennis-support";

export const metadata: Metadata = {
  title: "School Tennis Support Program",
  description:
    "Tennista Foundation partners with schools to bring tennis, coaching, and opportunity onto their own campuses.",
  alternates: { canonical: "/programs/school-tennis-support" },
};

export default function SchoolTennisSupportPage() {
  return <SchoolTennisSupport />;
}
