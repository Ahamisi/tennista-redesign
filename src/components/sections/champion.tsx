import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

type ChampionProps = {
  id?: string;
  title?: ReactNode;
  photo?: string;
};

/**
 * Court photo is masked on a curve. It is not clipped to the card, so the
 * right side — the girl cutout — runs past the blue edge. Swap the
 * placeholder for the transparent PNG when the export arrives.
 */
export function Champion({
  id = "champion-heading",
  title = (
    <>
      Every champion
      <br />
      starts with someone
      <br />
      who believed first.
    </>
  ),
  photo = "On the court",
}: ChampionProps) {
  return (
    <section aria-labelledby={id} className="bg-white py-8 sm:py-14">
      <Container>
        <div className="relative lg:mr-16">
          <div className="rounded-[1.75rem] bg-blue px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[26rem] lg:px-14 lg:py-16">
            <div className="lg:max-w-[52%]">
              <h2 id={id} className="headline text-display-md text-white sm:text-display-lg">
                {title}
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-involved/sponsor-a-student" variant="lime">
                  Sponsor A Child&apos;s Journey
                </Button>
                <Button href="/get-involved/partner" variant="outlineWhite">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 h-72 overflow-hidden rounded-[1.75rem] sm:h-80 lg:hidden">
            <MediaPlaceholder label={photo} className="h-full w-full" />
          </div>

          <div
            className="absolute inset-y-0 -right-14 left-[42%] hidden lg:block"
            style={{
              clipPath:
                "polygon(34% 0%, 31% 8%, 27% 16%, 22% 26%, 17% 36%, 13% 46%, 10% 56%, 8% 66%, 7% 76%, 7% 88%, 7% 100%, 100% 100%, 100% 0%)",
            }}
          >
            <MediaPlaceholder label={photo} className="h-full w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
