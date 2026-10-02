import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  /** `wide` matches the mockup's full-bleed card rows; `narrow` is for long-form copy. */
  width?: "default" | "wide" | "narrow";
  className?: string;
  children: ReactNode;
};

const widths = {
  default: "max-w-site",
  wide: "max-w-[96rem]",
  narrow: "max-w-3xl",
} as const;

export function Container({ as: Tag = "div", width = "default", className, children }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", widths[width], className)}>{children}</Tag>
  );
}
