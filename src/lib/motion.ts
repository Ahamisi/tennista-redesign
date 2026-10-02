import type { Transition, Variants } from "motion/react";

/**
 * Shared motion language. Every animated component pulls from here so the
 * whole site shares one rhythm instead of a dozen ad-hoc tweens.
 */
export const ease = {
  /** Default for entrances — fast out, long settle. */
  out: [0.16, 1, 0.3, 1],
  /** Menus and panels opening/closing. */
  inOut: [0.65, 0, 0.35, 1],
  /** Playful overshoot for CTAs and badges. */
  spring: [0.34, 1.56, 0.64, 1],
} as const;

export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
  reveal: 0.75,
} as const;

export const transitions = {
  panel: { duration: duration.base, ease: ease.inOut } satisfies Transition,
  reveal: { duration: duration.reveal, ease: ease.out } satisfies Transition,
  hover: { duration: duration.fast, ease: ease.out } satisfies Transition,
};

/** Fade + lift, the house entrance. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.reveal },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.reveal },
};

/** Parent that cascades its children's entrances. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Mega-menu panel: drops from under the header with a slight scale. */
export const megaPanel: Variants = {
  hidden: { opacity: 0, y: -12, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: transitions.panel },
  exit: { opacity: 0, y: -8, scale: 0.99, transition: { duration: duration.fast, ease: ease.inOut } },
};

/** Rows inside a mega-menu panel. */
export const megaItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.base, ease: ease.out } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const viewportOnce = { once: true, amount: 0.35 } as const;
