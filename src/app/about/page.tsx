import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { AboutTeam } from "@/components/sections/about-team";
import { Champion } from "@/components/sections/champion";
import { Numbers } from "@/components/sections/numbers";
import { Quotes } from "@/components/sections/quotes";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tennis was never truly the sport of the privileged few; it has always belonged to everyone. What was missing was access. Meet Tennista Foundation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <Quotes
        items={[
          {
            text: "No matter what accomplishment you make, somebody helped you.",
            attribution: "Althea Gibson",
            photo: "Althea Gibson",
          },
        ]}
      />
      <AboutTeam />
      <Champion
        id="court-heading"
        photo="Get a child to the court"
        title={
          <>
            Get a child
            <br />
            to the court
          </>
        }
      />
      <Numbers />
    </>
  );
}
