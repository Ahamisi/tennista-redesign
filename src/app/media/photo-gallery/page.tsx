import type { Metadata } from "next";
import { MediaHub } from "@/components/sections/media-hub";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photos from Tennista Foundation courts, clinics, and tournaments.",
  alternates: { canonical: "/media/photo-gallery" },
};

export default function PhotoGalleryPage() {
  return <MediaHub initialTab="photos" />;
}
