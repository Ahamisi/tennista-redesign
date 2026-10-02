import type { Metadata } from "next";
import { MediaHub } from "@/components/sections/media-hub";

export const metadata: Metadata = {
  title: "Media & Events",
  description: "Tennis news, photos, videos, and events from Tennista Foundation.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  return <MediaHub />;
}
