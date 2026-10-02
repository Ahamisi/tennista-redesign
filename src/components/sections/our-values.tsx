import type { ReactNode } from "react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

type Value = {
  title: string;
  body: string;
  photo: string;
  icon: ReactNode;
};

const rowOne: Value[] = [
  {
    title: "Empowerment",
    body: "We equip people with the belief and the tools to succeed.",
    photo: "Player with a trophy",
    icon: <FistIcon />,
  },
  {
    title: "Growing People",
    body: "We are committed, above all, to the growth of our youth.",
    photo: "Players jumping at the fence",
    icon: <GrowingIcon />,
  },
  {
    title: "Resilience",
    body: "We instill the strength to face hard challenges and rise from them.",
    photo: "Player chasing a ball",
    icon: <ResilienceIcon />,
  },
];

const rowTwo: Value[] = [
  {
    title: "Leadership",
    body: "We take initiative and lead the change we want to see.",
    photo: "Player hitting a forehand",
    icon: <LeadershipIcon />,
  },
  {
    title: "Mutual Respect",
    body: "Every individual is valued, seen, and respected.",
    photo: "Players together on court",
    icon: <RespectIcon />,
  },
  {
    title: "Teamwork",
    body: "We succeed by working together, supporting one another, and moving forward as one.",
    photo: "Coach with players",
    icon: <TeamworkIcon />,
  },
];

const columns = [0, 1, 2].map((index) => [rowOne[index], rowTwo[index]]);
const tones = ["bg-blue-tint", "bg-[#f6f6d4]"];

function ValueCard({ value, tone, layer }: { value: Value; tone: string; layer: number }) {
  return (
    <article
      className={cn("overflow-hidden rounded-[1.35rem] lg:sticky lg:top-[5.75rem]", tone)}
      style={{ zIndex: layer }}
    >
      <MediaPlaceholder label={value.photo} className="h-52 w-full rounded-none sm:h-60" />
      <div className="px-5 pt-5 pb-6 sm:px-6 sm:pt-6 sm:pb-7">
        <div className="text-blue">{value.icon}</div>
        <h3 className="mt-4 text-[1.65rem] leading-none font-bold text-blue">{value.title}</h3>
        <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-blue">{value.body}</p>
      </div>
    </article>
  );
}

export function OurValues() {
  return (
    <section aria-labelledby="values-heading" className="bg-white py-16 sm:py-20">
      <div className="px-5 sm:px-8 lg:px-12">
        <h2 id="values-heading" className="headline mx-auto max-w-4xl text-center text-display-lg text-blue sm:text-display-xl">
          The values that guide
          <br />
          everything we do.
        </h2>

        <div className="mt-12 grid items-start gap-5 sm:mt-14 lg:grid-cols-3">
          {columns.map((pair) => (
            <div key={pair[0].title} className="flex flex-col gap-5 lg:gap-8">
              {pair.map((value, index) => (
                <ValueCard key={value.title} value={value} tone={tones[index]} layer={index + 1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FistIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-10" fill="currentColor" aria-hidden>
      <path d="M18 20V10a3 3 0 016 0v10h2V12a3 3 0 016 0v12h1.5V16a3 3 0 016 0v12.5c0 7.5-5.2 13.5-14 13.5h-2C15 42 10 36.2 10 28.5V22a3 3 0 016 0v8h2v-10z" />
    </svg>
  );
}

function GrowingIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-10" fill="currentColor" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden>
      <circle cx="14" cy="14" r="3.2" />
      <circle cx="24" cy="12" r="3.2" />
      <circle cx="34" cy="14" r="3.2" />
      <path d="M8 28c1.2-4 3.6-6 6-6s4.6 2 6 6c1.4-4 3.6-6 6-6s4.8 2 6 6c1.2-4 3.4-6 6-6 1.6 0 3 .6 4.2 1.6" />
      <path d="M24 22v14M20 28l4-6 4 6" />
    </svg>
  );
}

function ResilienceIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-10" fill="currentColor" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden>
      <circle cx="24" cy="16" r="3.2" />
      <circle cx="15" cy="20" r="2.6" />
      <circle cx="33" cy="20" r="2.6" />
      <path d="M10 34c2-6 6-9 14-9s12 3 14 9" />
      <path d="M8 30c3 8 8 12 16 12s13-4 16-12" />
    </svg>
  );
}

function LeadershipIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-10" fill="currentColor" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="16" cy="14" r="3.2" />
      <circle cx="32" cy="14" r="3.2" />
      <path d="M8 32c1.4-5 4.2-8 8-8s6.4 3 8 8M24 32c1.6-5 4.4-8 8-8s6.6 3 8 8" />
      <path d="M18 22h12M26 18l4 4-4 4M22 26l-4-4 4-4" />
    </svg>
  );
}

function RespectIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-10" fill="currentColor" aria-hidden>
      <path d="M8 22c0-3 2.2-5 5-5 2.2 0 3.6 1.2 5 3l6 6 6-6c1.4-1.8 2.8-3 5-3 2.8 0 5 2 5 5 0 4-4 8-10 12L24 38 18 34C12 30 8 26 8 22z" />
    </svg>
  );
}

function TeamworkIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-10" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden>
      <circle cx="24" cy="24" r="6" />
      <path d="M24 8v6M24 34v6M8 24h6M34 24h6M12.5 12.5l4.2 4.2M31.3 31.3l4.2 4.2M35.5 12.5l-4.2 4.2M16.7 31.3l-4.2 4.2" />
      <circle cx="24" cy="10" r="2.2" />
      <circle cx="24" cy="38" r="2.2" />
      <circle cx="10" cy="24" r="2.2" />
      <circle cx="38" cy="24" r="2.2" />
    </svg>
  );
}
