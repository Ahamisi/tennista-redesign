import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { WaveDivider } from "@/components/ui/wave-divider";

export function ProgramsHero() {
  return (
    <section aria-labelledby="programs-heading" className="bg-white pt-14 sm:pt-16">
      <div className="grid items-center gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16 lg:px-12">
        <h1 id="programs-heading" className="headline text-display-xl text-blue">
          Our programs
        </h1>
        <p className="max-w-xl text-[0.975rem] leading-relaxed text-ink lg:justify-self-end">
          We turn potential into purpose through the power of sport. By combining tennis instruction with
          educational development and essential life skills, our programs equip young people with the discipline,
          confidence, and resilience needed to excel in the classroom, on the court, and in their communities.
        </p>
      </div>

      <div className="relative mt-10 h-[clamp(16rem,38vw,28rem)] overflow-hidden sm:mt-12">
        <MediaPlaceholder label="Players on court" className="absolute inset-0 h-full w-full rounded-none" />
        <WaveDivider variant="hump" className="absolute inset-x-0 bottom-0 text-white" />
      </div>
    </section>
  );
}
