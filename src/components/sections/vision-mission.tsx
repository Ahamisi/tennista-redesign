import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EyeIcon, MissionIcon } from "@/components/ui/icons";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { WaveDivider } from "@/components/ui/wave-divider";

const cards = [
  {
    icon: EyeIcon,
    lead: "Our",
    title: "Vision",
    photo: "Vision photo",
    body: "To use tennis to raise academically excellent leaders who'll build a better future for themselves and everyone around them.",
  },
  {
    icon: MissionIcon,
    lead: "Our",
    title: "Mission",
    photo: "Mission photo",
    body: "Giving youths in underserved communities the training, the education, and the confidence to lead.",
  },
] as const;

/**
 * Vision and mission cards. The photo slots are placeholders until the
 * design export is dropped in.
 */
export function VisionMission() {
  return (
    <section className="relative bg-lime">
      <Container className="relative z-10 pt-6 lg:pt-10">
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:gap-6">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-panel bg-blue-tint">
                <div className="px-7 pt-8 pb-6 sm:px-9 sm:pt-10">
                  <card.icon className="size-12 text-blue" />
                  <h2 className="headline mt-5 text-display-md">
                    <span className="text-blue">{card.lead} </span>
                    <span className="text-blue-bright">{card.title}</span>
                  </h2>
                  <p className="mt-3 max-w-[34rem] text-[0.975rem] leading-normal text-blue">{card.body}</p>
                </div>
                <MediaPlaceholder label={card.photo} className="mt-auto min-h-56 flex-1 sm:min-h-72" />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* White wave cuts across the bottom of both photos. */}
      <WaveDivider variant="hump" className="relative z-20 -mt-16 h-24 text-white sm:-mt-20 sm:h-32" />
      <div className="relative z-20 -mt-px bg-white pt-2 pb-16 text-center sm:pb-20">
        <Button href="/what-defines-us">Take A Closer Look</Button>
      </div>
    </section>
  );
}
