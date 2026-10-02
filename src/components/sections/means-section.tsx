import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WaveDivider } from "@/components/ui/wave-divider";

/**
 * "Tennis is the means" — the first content band under the hero.
 * The portrait is a stand-in until the design export lands; swap
 * `PORTRAIT_SRC` and drop the grayscale treatment.
 */
const PORTRAIT_SRC = "/media/portrait-placeholder.jpg";

export function MeansSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6">
          <Reveal>
            <h2 className="headline text-display-lg">
              <span className="block text-blue">Tennis is the means.</span>
              <span className="block text-blue-bright">Transformation is</span>
              <span className="block text-blue-bright">the destination.</span>
            </h2>
            <p className="prose-body mt-6 max-w-[38rem] text-ink">
              Nobody needs another nonprofit that hands out equipment and disappears. Tennista trains children
              on the court, funds them in the classroom, and mentors them into the future because a forehand
              can open a door, but only education keeps it open.
            </p>
            <Button href="/what-defines-us" className="mt-8">
              What Defines Us
            </Button>
          </Reveal>

          <Reveal delay={0.12} className="relative z-10 mx-auto w-full max-w-[28rem] lg:max-w-[34rem] lg:justify-self-end">
            <div className="relative aspect-square w-full">
              <div aria-hidden className="absolute top-[2%] right-[-2%] h-[90%] w-[90%] rounded-full bg-lime" />
              <div className="relative z-10 mt-[7%] ml-[4%] h-[91%] w-[88%] overflow-hidden rounded-full bg-blue-tint shadow-[0_24px_50px_-28px_rgb(0_31_82/0.55)]">
                <Image
                  src={PORTRAIT_SRC}
                  alt="A child smiling, the kind of story Tennista exists to start"
                  fill
                  sizes="(min-width: 1024px) 34rem, 80vw"
                  className="object-cover grayscale"
                  style={{ objectPosition: "center 18%" }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <WaveDivider variant="hump" className="relative -mt-8 h-[clamp(4.5rem,10vw,8rem)] text-lime lg:-mt-16" />
    </section>
  );
}
