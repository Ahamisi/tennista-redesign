"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * The oversized "TENNISTA" lettering that closes the page. Drawn as SVG text
 * with `textLength` so it always fills its container exactly, at any width,
 * and drifts slightly as it scrolls into view.
 */
export function GiantWordmark({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["14%", "0%"]);

  return (
    <div ref={ref} className={cn("w-full overflow-hidden", className)}>
      <motion.svg
        viewBox="0 0 1200 300"
        className="block h-auto w-full text-lime"
        style={reduced ? undefined : { y }}
        role="img"
        aria-label="Tennista"
      >
        <text
          x="600"
          y="292"
          textAnchor="middle"
          textLength="1200"
          lengthAdjust="spacingAndGlyphs"
          fontSize="400"
          fontFamily="var(--font-wordmark)"
          fill="currentColor"
        >
          TENNISTA
        </text>
      </motion.svg>
    </div>
  );
}
