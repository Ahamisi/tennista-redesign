import type { Metadata } from "next";
import { MediaHub } from "@/components/sections/media-hub";

export const metadata: Metadata = {
  title: "Video Gallery",
  description: "Video from Tennista Foundation clinics, matches, and events.",
  alternates: { canonical: "/media/video-gallery" },
};

export default function VideoGalleryPage() {
  return <MediaHub initialTab="videos" />;
}
