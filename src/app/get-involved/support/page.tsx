import type { Metadata } from "next";
import { PartnerWithUs } from "@/components/sections/partner-with-us";

export const metadata: Metadata = {
  title: "Partner with Us",
  description:
    "Partner with Tennista Foundation. If you want to go far, go together — write to partnerships@tennistafoundation.org.",
  alternates: { canonical: "/get-involved/support" },
};

export default function SupportPage() {
  return <PartnerWithUs />;
}
