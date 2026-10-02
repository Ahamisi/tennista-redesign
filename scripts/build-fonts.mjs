/**
 * Converts the raw brand fonts in /assets into woff2 files in /src/assets/fonts,
 * where next/font/local picks them up (self-hosted, preloaded, hashed).
 * Run with `npm run fonts` whenever the designer ships updated font files.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { compress } from "wawoff2";

const ROC = "assets/roc-grotesk-font-family (1)";
const STACK = "assets/Stack_Sans_Headline/static";

const FONTS = [
  { src: `${ROC}/Fontspring-DEMO-rocgrotesk-regular.otf`, out: "roc-grotesk-400.woff2" },
  { src: `${ROC}/Fontspring-DEMO-rocgrotesk-medium.otf`, out: "roc-grotesk-500.woff2" },
  { src: `${ROC}/Fontspring-DEMO-rocgrotesk-bold.otf`, out: "roc-grotesk-700.woff2" },
  { src: `${ROC}/Fontspring-DEMO-rocgroteskcond-bold.otf`, out: "roc-grotesk-cond-700.woff2" },
  { src: `${ROC}/Fontspring-DEMO-rocgroteskcond-black.otf`, out: "roc-grotesk-cond-900.woff2" },
  { src: `${ROC}/Fontspring-DEMO-rocgroteskcomp-black.otf`, out: "roc-grotesk-comp-900.woff2" },
  { src: `${STACK}/StackSansHeadline-Bold.ttf`, out: "stack-sans-headline-700.woff2" },
];

const outDir = "src/assets/fonts";
await mkdir(outDir, { recursive: true });

for (const font of FONTS) {
  const input = await readFile(font.src);
  const woff2 = await compress(input);
  await writeFile(path.join(outDir, font.out), woff2);
  const ratio = Math.round((woff2.length / input.length) * 100);
  console.log(`${font.out.padEnd(32)} ${(woff2.length / 1024).toFixed(1)} KB (${ratio}% of source)`);
}
