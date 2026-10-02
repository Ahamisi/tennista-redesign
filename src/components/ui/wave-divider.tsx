import { cn } from "@/lib/utils";

/**
 * The organic edge that separates every band of the site. The divider paints
 * itself in `currentColor`, so you colour it with a text utility and place it
 * at the seam between two sections.
 *
 *   <WaveDivider variant="swoop" className="text-blue" />
 */
export type WaveVariant = "wave" | "hump" | "swoop" | "crest" | "hairline";

const paths: Record<WaveVariant, string> = {
  // Gentle double curve — the workhorse separator.
  wave: "M0,74 C240,16 420,104 720,86 C1020,68 1230,8 1440,40 L1440,140 L0,140 Z",
  // Single crest: low at both edges, high through the middle.
  hump: "M0,112 C180,116 340,48 620,36 C900,24 1120,56 1280,88 C1360,104 1408,112 1440,114 L1440,140 L0,140 Z",
  // Deeper single sweep rising from the left.
  swoop: "M0,112 C300,16 700,2 1080,44 C1240,62 1350,86 1440,104 L1440,140 L0,140 Z",
  // Shallow lift, used right above the oversized wordmark.
  crest: "M0,118 C280,70 760,52 1120,74 C1260,82 1360,98 1440,112 L1440,140 L0,140 Z",
  // Thin drawn line rather than a filled shape.
  hairline: "M0,116 C300,62 780,44 1140,68 C1270,77 1365,94 1440,108",
};

type WaveDividerProps = {
  variant?: WaveVariant;
  /** `bottom` (default) fills downward; `top` flips so the fill rises upward. */
  edge?: "top" | "bottom";
  /** Tailwind height utility override, e.g. "h-16 md:h-28". */
  className?: string;
};

export function WaveDivider({ variant = "wave", edge = "bottom", className }: WaveDividerProps) {
  const isLine = variant === "hairline";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative w-full select-none",
        "h-[clamp(2rem,5vw,5.5rem)]",
        edge === "top" && "rotate-180",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block h-full w-full"
        focusable="false"
        aria-hidden
      >
        <path
          d={paths[variant]}
          fill={isLine ? "none" : "currentColor"}
          stroke={isLine ? "currentColor" : "none"}
          strokeWidth={isLine ? 3 : undefined}
          vectorEffect={isLine ? "non-scaling-stroke" : undefined}
        />
      </svg>
    </div>
  );
}
