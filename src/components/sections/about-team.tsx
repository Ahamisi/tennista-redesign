import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

/**
 * The team photo is clipped on a skew: the top edge dips through the middle,
 * and the bottom eases into a shallow wave. Swap the placeholder for the
 * group export when it arrives.
 */
export function AboutTeam() {
  return (
    <section aria-labelledby="team-heading" className="bg-white py-16 sm:py-20">
      <div className="grid items-end gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16 lg:px-12">
        <h2 id="team-heading" className="headline text-display-xl text-blue sm:text-display-2xl">
          The team
        </h2>
        <div className="max-w-xl lg:justify-self-end lg:pb-2">
          <p className="text-[0.975rem] leading-relaxed text-ink-muted">
            Our team is made up of coaches, educators, and program leaders who believe tennis can change
            lives, because we&apos;ve seen it happen. Their dedication, creativity, and commitment push us to
            reach further, dream bigger, and create lasting change for the youth we SERVE.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/our-team">Meet The Team</Button>
            <Button href="/careers" variant="outlineBlue">
              Join The Team
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mt-10 h-[clamp(18rem,42vw,32rem)] sm:mt-14">
        <svg className="absolute h-0 w-0" aria-hidden>
          <clipPath id="team-photo-skew" clipPathUnits="objectBoundingBox">
            <path d="M0,0.07 C0.16,0.07 0.24,0.05 0.3,0.16 C0.38,0.32 0.46,0.4 0.52,0.12 C0.56,0.06 0.7,0.07 1,0.07 L1,0.9 C0.78,0.98 0.48,0.84 0.22,0.9 C0.1,0.94 0.04,0.96 0,0.92 Z" />
          </clipPath>
        </svg>
        <div className="absolute inset-0" style={{ clipPath: "url(#team-photo-skew)" }}>
          <MediaPlaceholder label="The team" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
