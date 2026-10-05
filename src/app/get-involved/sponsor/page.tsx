import type { Metadata } from "next";
import { BecomeASponsor } from "@/components/sections/become-a-sponsor";

export const metadata: Metadata = {
  title: "Become a Sponsor",
  description:
    "Sponsor Tennista Foundation with kits, prizes, scholarships, or financial support, and see the benefits of partnership.",
  alternates: { canonical: "/get-involved/sponsor" },
};

export default function SponsorPage() {
  return <BecomeASponsor />;
}
