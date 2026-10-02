import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui/container";
import { DevelopIcon, LeadIcon, SearchIcon } from "@/components/ui/icons";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

type Pillar = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  photo: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    icon: SearchIcon,
    title: "Discover",
    photo: "Discover photo",
    body: "Through tennis, our youth learn discipline, focus, and resilience.",
  },
  {
    icon: DevelopIcon,
    title: "Develop",
    photo: "Develop photo",
    body: "We support academic growth so potential is not limited by circumstance.",
  },
  {
    icon: LeadIcon,
    title: "Lead",
    photo: "Lead photo",
    body: "Life skills and mentorship prepare young minds to grow, lead, and rise.",
  },
];

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-ink-subtle">Our philosophy</p>
            <h2 id="philosophy-heading" className="headline mt-3 text-display-lg text-blue">
              <span className="block">We don&apos;t just</span>
              <span className="block">play tennis.</span>
              <span className="block">We build people.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:pt-10">
            <p className="max-w-[36rem] text-[0.975rem] leading-[1.6] text-ink-muted">
              Everything we do is guided by one belief: lasting transformation begins from within. Through
              tennis, education, and mentorship, we help young people grow into confident leaders on and off
              the court.
            </p>
            <p className="mt-5 max-w-[36rem] text-[0.975rem] leading-[1.6] text-ink-muted">
              This is how change happens: step by step, moment by moment, person by person.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {pillars.map((pillar) => (
            <RevealItem key={pillar.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-panel bg-blue-tint">
                <MediaPlaceholder label={pillar.photo} className="aspect-[16/10] w-full" />
                <div className="flex flex-1 flex-col px-6 pt-6 pb-8 sm:px-7">
                  <pillar.icon className="size-10 text-blue" />
                  <h3 className="headline mt-4 text-display-sm text-blue">{pillar.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-normal text-blue">{pillar.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
