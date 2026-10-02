/**
 * Visual QA harness. Boots the installed Chrome against the dev server and
 * captures the states that are awkward to inspect by hand (open mega-menus,
 * mobile drawer, full-page at several widths).
 *
 *   npm run dev            # in one terminal
 *   npm run shots          # in another
 *
 * Output lands in .tmp/shots/.
 */
import { mkdir, rm } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const OUT = ".tmp/shots";

const only = process.argv.slice(2);
const wanted = (name) => only.length === 0 || only.some((arg) => name.includes(arg));

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--hide-scrollbars", "--force-device-scale-factor=1"],
});

const settle = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms));

async function newPage(width, height) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(BASE, { waitUntil: "networkidle2" });
  await page.evaluate(() => document.fonts.ready);
  return page;
}

async function shot(page, name, options = {}) {
  await settle(options.wait ?? 600);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: options.fullPage ?? false });
  console.log(`✓ ${name}.png`);
}

// --- Desktop: full page -----------------------------------------------------
if (wanted("desktop")) {
  const page = await newPage(1440, 900);
  // Scroll through so every in-view reveal has fired before the full capture.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.75;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
  });
  await shot(page, "desktop-full", { fullPage: true, wait: 900 });
  await page.close();
}

// --- Desktop: each mega-menu open ------------------------------------------
if (wanted("menu")) {
  const page = await newPage(1440, 900);
  const triggers = await page.$$eval("nav[aria-label='Main'] button", (nodes) =>
    nodes.map((node) => node.textContent.trim()),
  );

  for (const label of triggers) {
    const handle = await page.evaluateHandle(
      (text) =>
        [...document.querySelectorAll("nav[aria-label='Main'] button")].find(
          (node) => node.textContent.trim() === text,
        ),
      label,
    );
    await handle.asElement()?.hover();
    const slug = label.toLowerCase().replace(/\W+/g, "-");
    await shot(page, `menu-${slug}`, { wait: 700 });
  }
  await page.close();
}

// --- Footer close-up -------------------------------------------------------
if (wanted("footer")) {
  const page = await newPage(1440, 1000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await shot(page, "footer", { wait: 1200 });
  await page.close();
}

// --- Mobile ----------------------------------------------------------------
if (wanted("mobile")) {
  const page = await newPage(390, 844);
  await shot(page, "mobile-full", { fullPage: true, wait: 900 });
  await page.click("button[aria-label='Open navigation']");
  await shot(page, "mobile-nav", { wait: 700 });
  await page.close();
}

await browser.close();
console.log(`\nScreenshots in ${OUT}/`);
