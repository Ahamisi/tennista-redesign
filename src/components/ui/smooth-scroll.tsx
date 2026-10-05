"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
  scrollTo: (target: number, options?: { immediate?: boolean }) => void;
};

/**
 * Inertial scrolling for the whole document. Bails out entirely when the user
 * has asked for reduced motion, and for touch devices where native momentum
 * already feels right. Every route starts at the top.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (prefersReduced || isTouch) return;

    let frame = 0;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        wheelMultiplier: 0.9,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    const previous = history.scrollRestoration;
    history.scrollRestoration = "manual";

    const reset = () => {
      lenisRef.current?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    };

    reset();
    const frame = requestAnimationFrame(reset);
    return () => {
      cancelAnimationFrame(frame);
      history.scrollRestoration = previous;
    };
  }, [pathname]);

  return null;
}
