import { MediaPlaceholder } from "@/components/ui/media-placeholder";

/**
 * Full-bleed statement under the Arthur Ashe quote. The arcs sit on the
 * right of the photo until the cutout export replaces the placeholder.
 */
export function SinceTennista() {
  return (
    <section aria-labelledby="since-heading" className="relative min-h-[34rem] overflow-hidden bg-blue sm:min-h-[40rem]">
      <MediaPlaceholder label="Since 2021, Tennista" className="absolute inset-0 h-full w-full rounded-none" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-blue/80 via-blue/35 to-transparent" />

      <div className="relative z-10 max-w-[40rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <h2 id="since-heading" className="headline text-display-lg text-white sm:text-display-xl">
          Since 2021, Tennista has been using tennis to create societal change.
        </h2>
        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white">
          We believe every young person deserves a chance at success, not just the talented or privileged. At
          Tennista Foundation, we harness tennis&apos;s power to unlock potential, promote academic excellence,
          and develop essential life skills.
        </p>
      </div>

      <svg
        viewBox="0 0 640 520"
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[70%] w-[46%] sm:h-[78%] sm:w-[42%]"
      >
        <circle cx="470" cy="390" r="280" fill="none" stroke="#d4de25" strokeWidth="78" />
        <circle cx="500" cy="410" r="168" fill="#003890" />
        <circle cx="500" cy="410" r="168" fill="none" stroke="#0060b0" strokeWidth="36" />
      </svg>
    </section>
  );
}
