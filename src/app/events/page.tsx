import type { Metadata } from "next";
import { MediaHub } from "@/components/sections/media-hub";

export const metadata: Metadata = {
  title: "Events",
  description: "Tennista Foundation events and tournament dates.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return <MediaHub initialTab="events" />;
}
