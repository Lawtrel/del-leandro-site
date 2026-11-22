import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = process.env.QA_BASE_URL ?? "http://127.0.0.1:3000";
const password = process.env.SITE_PASSWORD;
if (!password) throw new Error("SITE_PASSWORD is required for the isolated QA server.");

const browser = await chromium.launch({ headless: true });
try {
  await mkdir("/tmp/birthday-qa-screenshots", { recursive: true });
  for (const width of [360, 390, 430, 1280, 1920]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
      baseURL: base,
    });
    const page = await context.newPage();
    await page.goto("/aniversario", { waitUntil: "domcontentloaded" });
    await page.locator("#password").fill(password);
    await page.getByRole("button", { name: "Entrar", exact: true }).click();
    await page.getByRole("heading", { name: /Feliz aniversário, minha pretinha/ }).waitFor();

    const portalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    if (portalOverflow) throw new Error("Horizontal overflow in portal at " + width);
    if (await page.locator(".bd-portal-object").count() !== 1) throw new Error("Original illustrated door missing");
    if (!await page.getByText("Tem um presente para você.").isVisible()) throw new Error("Original greeting missing");

    await page.getByRole("button", { name: /Entrar no nosso mundo mágico/ }).click();
    await page.getByRole("heading", { name: /Hoje o mundo celebra/ }).waitFor();
    if (await page.locator(".bd-memory-section, .bd-memory-media, .bd-hero-photo").count() !== 0) throw new Error("Photo gallery still rendered");
    if (await page.locator('img[src*="/photos/"]').count() !== 0) throw new Error("Private photo still rendered");
    if (await page.locator('.bd-hero-asset-stage img').count() !== 3) throw new Error("Original fantasy assets not rendered");
    if (await page.locator(".bd-note").count() !== 4) throw new Error("Expected all four original notes");
    if (await page.locator(".bd-landscape-garden").count() !== 1) throw new Error("Night-garden illustration missing");
    if (!await page.getByText("Meu bem, hoje eu queria te dar algo que tivesse um pouquinho de nós dois.").isVisible()) {
      throw new Error("Original birthday letter missing");
    }
    for (const asset of await page.locator(".bd-hero-asset-stage img").all()) {
      await asset.scrollIntoViewIfNeeded();
      await asset.evaluate(async (img) => {
        if (!(img instanceof HTMLImageElement)) throw new Error("Asset is not an image");
        if (!img.complete) await new Promise((resolve, reject) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", reject, { once: true });
        });
        if (img.naturalWidth === 0) throw new Error("Original fantasy asset did not load");
      });
    }

    const note = page.locator(".bd-note").first();
    await note.click();
    if (await note.getAttribute("aria-expanded") !== "true") throw new Error("Note did not expand");
    await note.click();
    if (await note.getAttribute("aria-expanded") !== "false") throw new Error("Note did not collapse");
    await note.focus();
    await page.keyboard.press("Enter");
    if (await note.getAttribute("aria-expanded") !== "true") throw new Error("Keyboard Enter did not expand note");
    await page.keyboard.press("Space");
    if (await note.getAttribute("aria-expanded") !== "false") throw new Error("Keyboard Space did not close note");

    if (await page.locator(".bd-music-card iframe").count() !== 0) throw new Error("Audio should not load before user activation");
    await page.getByRole("button", { name: /Ouvir nossa música/ }).click();
    if (await page.locator(".bd-music-card iframe").count() !== 1) throw new Error("YouTube iframe missing");
    const src = await page.locator(".bd-music-card iframe").getAttribute("src");
    if (!src?.includes("youtube-nocookie.com/embed/V141wUSkTfk")) throw new Error("Incorrect music source");
    await page.getByRole("button", { name: /Fechar player e parar a música/ }).click();
    if (await page.locator(".bd-music-card iframe").count() !== 0) throw new Error("Music iframe not removed");

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    if (overflow) throw new Error("Horizontal overflow at " + width);

    const motion = await page.locator(".bd-sky-heart").first().evaluate((el) => getComputedStyle(el).animationName);
    if (motion !== "none") throw new Error("Reduced motion not respected at " + width);

    await page.keyboard.press("Tab");
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    if (!focused || focused === "BODY") throw new Error("Keyboard navigation lacks focus at " + width);
    await page.screenshot({ path: "/tmp/birthday-qa-screenshots/" + width + ".png", fullPage: true });
    console.log("PASS viewport", width, "px; no photos, 3 original fantasy assets, notes, letter, player, motion, focus and overflow");
    await context.close();
  }
} finally {
  await browser.close();
}
