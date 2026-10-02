"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ease } from "@/lib/motion";

/** The right half of the hero: tennis-ball arcs, separate from the court photo. */
function TennisMural() {
  return (
    <svg viewBox="0 0 900 720" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <rect width="900" height="720" fill="#003890" />
      <circle cx="80" cy="420" r="460" fill="#c6d42a" />
      <circle cx="190" cy="450" r="330" fill="#0060b0" />
      <circle cx="390" cy="380" r="280" fill="#003890" />
      <circle cx="500" cy="300" r="210" fill="none" stroke="#d4de25" strokeWidth="42" />
      <circle cx="545" cy="270" r="130" fill="none" stroke="#e7ee6a" strokeWidth="18" />
      <path
        d="M-20 140c210 30 320 190 280 390"
        fill="none"
        stroke="#d4de25"
        strokeWidth="54"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AboutHero() {
  const reduced = useReducedMotion();

  return (
    <section aria-labelledby="about-heading" className="bg-white pt-8 pb-0 sm:pt-12">
      <div className="grid items-end gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-12">
        <div>
          <p className="text-[0.75rem] font-bold tracking-[0.28em] text-ink-muted uppercase">About us</p>
          <h1 id="about-heading" className="headline mt-3 text-display-xl sm:text-display-2xl">
            <motion.span
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease.out }}
              className="text-blue"
            >
              About{" "}
            </motion.span>
            <motion.span
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease.out, delay: reduced ? 0 : 0.08 }}
              className="text-blue-bright"
            >
              Tennista
            </motion.span>
          </h1>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.out, delay: reduced ? 0 : 0.2 }}
          className="max-w-md lg:justify-self-end lg:pb-2"
        >
          <p className="text-[0.975rem] leading-relaxed text-ink-muted">
            Tennis was never truly the sport of the privileged few; it has always belonged to everyone. What
            was missing was access.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/fund-a-child">Fund A Child</Button>
            <Button href="/programs" variant="outlineBlue">
              Programs
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Two backgrounds meet under one cutout. The portrait is not clipped, so she rises out of the band. */}
      <div className="relative mt-8 h-[clamp(28rem,58vw,42rem)] sm:mt-10">
        <div className="absolute inset-x-0 bottom-0 top-[16%] overflow-hidden rounded-tl-[2.75rem] bg-blue sm:top-[18%]">
          <motion.div
            className="absolute inset-y-0 left-0 w-[48%]"
            initial={reduced ? false : { x: "-8%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: ease.out }}
          >
            <MediaPlaceholder label="Court" className="h-full w-full" />
          </motion.div>
          <motion.div
            className="absolute inset-y-0 right-0 left-[34%]"
            initial={reduced ? false : { x: "10%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: ease.out, delay: reduced ? 0 : 0.05 }}
          >
            <TennisMural />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 top-0 left-[36%] w-[30%] sm:left-[38%] sm:w-[26%]"
          initial={reduced ? false : { y: "22%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: ease.out, delay: reduced ? 0 : 0.28 }}
        >
          <MediaPlaceholder
            label="Portrait cutout"
            className="h-full w-full bg-[linear-gradient(180deg,#d5d5d5_0%,#f4f4f4_42%,#cfcfcf_100%)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
