import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "lime" | "blue" | "outlineWhite" | "outlineBlue" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-bold " +
  "whitespace-nowrap transition-[transform,background-color,color,border-color,box-shadow] duration-200 " +
  "ease-[var(--ease-out-expo)] will-change-transform hover:-translate-y-0.5 active:translate-y-0 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-blue-deep hover:bg-lime-soft hover:shadow-cta",
  blue: "bg-blue text-white hover:bg-blue-bright hover:shadow-cta",
  outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-blue",
  outlineBlue: "border-2 border-blue text-blue hover:bg-blue hover:text-white",
  ghost: "text-blue hover:text-blue-bright",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[0.9375rem]",
  lg: "h-14 px-9 text-base",
};

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children">;

type ButtonAsButton = ButtonBaseProps & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

/** Renders an anchor when given `href`, otherwise a native button. */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  if ("href" in props) {
    const { variant = "lime", size = "md", className, children, href, ...linkProps } = props;
    return (
      <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant = "lime", size = "md", className, children, ...buttonProps } = props;
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...buttonProps}>
      {children}
    </button>
  );
}
