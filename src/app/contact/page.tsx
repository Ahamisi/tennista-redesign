import type { Metadata } from "next";
import { ContactUs } from "@/components/sections/contact-us";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Tennista Foundation to support our programs, volunteer, explore partnerships, or ask a question.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactUs />;
}
