/**
 * Careers intro. The bottom edge is skewed: it lifts at the left, hangs lowest
 * through the middle, and rises again toward the right.
 */
export function CareersHero() {
  return (
    <section aria-labelledby="careers-heading" className="relative bg-lime">
      <div className="grid items-start gap-10 px-5 pt-14 pb-28 sm:px-8 sm:pt-16 sm:pb-32 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:pt-20 lg:pb-36">
        <h1 id="careers-heading" className="headline text-display-lg text-blue sm:text-display-xl">
          Interested in
          <br />
          what we do?
        </h1>
        <div className="max-w-xl space-y-5 text-[0.95rem] leading-relaxed text-ink lg:pt-2">
          <p>
            At Tennista Foundation, we believe potential deserves a chance to grow, whether it&apos;s a child
            discovering their strength on the court or a team member finding purpose in the work they do.
          </p>
          <p>
            When you join us, you become part of that. Every person who reaches out to us shares something
            special: a belief that young people deserve every opportunity to thrive and the drive to help make
            that happen.
          </p>
          <p>That&apos;s the kind of spirit we hope to welcome into our team as we grow this vision across WORLD.</p>
          <p className="text-[#3b532f]">
            If you are passionate about developing young people; thrive in a fast-paced environment; have a knack
            for excellence; are creative, hard-working, and fun-loving, you are the kind of person we are looking
            for.
          </p>
        </div>
      </div>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-16 w-full sm:h-24"
      >
        <path d="M0,26 C240,78 520,118 760,116 C1020,114 1240,70 1440,52 L1440,120 L0,120 Z" fill="white" />
      </svg>
    </section>
  );
}
