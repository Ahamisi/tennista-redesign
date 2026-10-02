import { Anton, Figtree } from "next/font/google";

/**
 * Brand type stack.
 *
 * These are stand-ins chosen to match the approved mockups: Anton for the heavy
 * condensed uppercase headlines, Figtree for body copy. The mockups were set in
 * Roc Grotesk, but the files we have are Fontspring DEMO cuts that replace 28
 * characters — including the apostrophe, the hyphen and the digit 4 — with a
 * "DEMO" watermark glyph, so they can't be used even as placeholders.
 *
 * To switch to the licensed families: run `npm run fonts` to convert the files
 * in /assets to woff2, then replace the exports below with `next/font/local`
 * declarations pointing at src/assets/fonts, and set --display-weight to 900
 * in globals.css.
 *
 * sans      — body copy, nav, buttons
 * display   — uppercase section headlines
 * wordmark  — oversized "TENNISTA" lettering
 */
export const fontSans = Figtree({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const fontDisplay = Anton({
  subsets: ["latin"],
  variable: "--font-brand-display",
  display: "swap",
  weight: "400",
});

export const fontWordmark = Anton({
  subsets: ["latin"],
  variable: "--font-brand-wordmark",
  display: "swap",
  weight: "400",
  preload: false,
});

export const fontVariables = [fontSans.variable, fontDisplay.variable, fontWordmark.variable].join(" ");
