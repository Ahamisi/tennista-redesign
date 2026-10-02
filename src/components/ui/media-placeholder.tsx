import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  /** What the real photo will be, so the slot is labelled until the export lands. */
  label: string;
  className?: string;
};

/**
 * Stand-in for a design export. Swap the whole element for an <Image> when
 * the final photography arrives — the className carries the crop.
 */
export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label}. Photo placeholder.`}
      className={cn(
        "grid place-items-center bg-[linear-gradient(160deg,#c5daf3_0%,#e8f2fc_50%,#d3e6f9_100%)] text-blue/55",
        className,
      )}
    >
      <span className="px-4 text-center text-[0.7rem] font-medium tracking-[0.22em] uppercase">{label}</span>
    </div>
  );
}
