import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { WaveDivider } from "@/components/ui/wave-divider";

export function FaqHero() {
  return (
    <section aria-labelledby="faq-heading" className="relative h-[18rem] overflow-hidden bg-blue sm:h-[22rem]">
      <MediaPlaceholder label="Children at a Tennista session" className="absolute inset-0 h-full w-full rounded-none" />
      <div aria-hidden className="absolute inset-0 bg-blue/35" />
      <h1 id="faq-heading" className="headline absolute inset-0 grid place-items-center text-display-xl text-white sm:text-display-2xl">
        FAQ
      </h1>
      <WaveDivider variant="hump" className="absolute inset-x-0 bottom-0 text-white" />
    </section>
  );
}
