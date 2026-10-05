import type { Metadata } from "next";
import { DonationMatters } from "@/components/sections/donation-matters";
import { ServeWithUs } from "@/components/sections/serve-with-us";

export const metadata: Metadata = {
  title: "Serve with Us",
  description:
    "Every champion starts somewhere. For Zara Adegoke and Atilola Mofifun, that somewhere was the Tennista Foundation.",
  alternates: { canonical: "/serve-with-us" },
};

export default function ServeWithUsPage() {
  return (
    <>
      <ServeWithUs />
      <DonationMatters />
    </>
  );
}
