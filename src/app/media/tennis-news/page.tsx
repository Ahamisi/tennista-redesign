import type { Metadata } from "next";
import { MediaHub } from "@/components/sections/media-hub";

export const metadata: Metadata = {
  title: "Tennis News",
  description: "Stories from Tennista Foundation tournaments, clinics, and the wider game.",
  alternates: { canonical: "/media/tennis-news" },
};

export default function TennisNewsPage() {
  return <MediaHub initialTab="news" />;
}
