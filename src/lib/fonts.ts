import { Anton, Barlow_Condensed, Figtree } from "next/font/google";

/**
 * Brand type stack, mapped onto the style guide cuts.
 *
 * Headers  — Roc Grotesk Compressed ExtraBold. Stand-in is Barlow Condensed 800.
 * Nav      — Roc Grotesk Condensed Bold. Same family at 700.
 * Body     — Roc Grotesk Light. Stand-in is Figtree 300.
 * Wordmark — oversized "TENNISTA" lettering, still Anton.
 *
 * The Roc Grotesk files in /assets are Fontspring DEMO cuts. They replace the
 * digit 4, the apostrophe and the hyphen with a "DEMO" watermark, so they
 * cannot be loaded. Swap these exports for next/font/local once the licensed
 * family is in src/assets/fonts.
 */
export const fontSans = Figtree({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontDisplay = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-brand-display",
  display: "swap",
  weight: ["700", "800"],
});

export const fontWordmark = Anton({
  subsets: ["latin"],
  variable: "--font-brand-wordmark",
  display: "swap",
  weight: "400",
  preload: false,
});

export const fontVariables = [fontSans.variable, fontDisplay.variable, fontWordmark.variable].join(" ");
