import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandProps = {
  className?: string;
  /** Rendered pixel height of the logo lockup. */
  height?: number;
  priority?: boolean;
};

/** Full-colour logo lockup, used in the header. */
export function Brand({ className, height = 52, priority = false }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "inline-flex shrink-0 items-center transition-transform duration-300 ease-[var(--ease-out-expo)] hover:scale-[1.03]",
        className,
      )}
    >
      <Image
        src="/tennista-logo.png"
        alt={siteConfig.name}
        width={640}
        height={420}
        priority={priority}
        style={{ height, width: "auto" }}
        className="h-auto w-auto"
      />
    </Link>
  );
}

/**
 * Typographic lockup for dark backgrounds — "TENNISTA" over a FOUNDATION bar,
 * drawn in type so it stays crisp at any size.
 */
export function BrandLockup({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} — home`} className={cn("inline-block", className)}>
      <span className="headline block text-[2.25rem] leading-none text-white">Tennista</span>
      <span className="mt-1.5 block rounded-[3px] border border-white/35 px-2 py-[3px] text-center text-[0.5625rem] font-medium tracking-[0.42em] text-white">
        FOUNDATION
      </span>
    </Link>
  );
}
