"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { fadeUp, stagger, transitions, viewportOnce } from "@/lib/motion";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Seconds to wait after the element enters the viewport. */
  delay?: number;
  variants?: Variants;
};

/**
 * Scroll-triggered entrance. Wrap anything that should animate into view —
 * it respects `prefers-reduced-motion` by rendering statically.
 */
export function Reveal({ as = "div", children, className, delay = 0, variants = fadeUp }: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ ...transitions.reveal, delay }}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Gap in seconds between each child's entrance. */
  gap?: number;
  delay?: number;
};

/**
 * Cascades the entrance of its children. Children must be <RevealItem>
 * (or any motion element using the `hidden`/`visible` variant names).
 */
export function RevealGroup({ as = "div", children, className, gap = 0.08, delay = 0 }: RevealGroupProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  as = "div",
  children,
  className,
  variants = fadeUp,
}: Omit<RevealProps, "delay">) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
