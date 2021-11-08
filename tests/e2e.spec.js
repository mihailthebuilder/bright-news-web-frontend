const { test, expect } = require("@playwright/test");

test.describe("e2e", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/bright-news-web-frontend");
  });

  test("landing page works", async ({ page }) => {
    // title
    await expect(page.locator("nav")).toContainText("Bright News");
  });

  test("about page works", async ({ page }) => {
    // about section
    await page.click("[pagename='about']");
    await expect(page.locator("h1")).toHaveText("About");
    await expect(page).toHaveURL(/.*about/);
  });

  test("good request", async ({ page }) => {
    // try fetching a score
    await page.fill("input[type='text']", "ft.com");

    await Promise.all([
      page.waitForResponse("http://localhost:8000/api/calculate"),
      await page.click("button[type='submit']"),
    ]);

    // website score rendered well?
    const scoreText = await page.innerText(".score");

    const scoreRegex = /\d\d?\d?%/;
    expect(scoreRegex.test(scoreText)).toBe(true);

    // enough score comparisons?
    scoreComps = await page.locator(".score-group li");
    scNum = await scoreComps.count();
    expect(scNum >= 0 && scNum <= 9).toBe(true);

    // score formats is good?
    scContents = await scoreComps.allTextContents();
    const scRegex = /^\S*\s\(\d\d?\d?%\)$/;
    const sccFormatCheck = scContents.every((text) => scRegex.test(text));
    await expect(sccFormatCheck).toBe(true);

    await expect(page).toHaveURL(/.*results/);
  });

  test("bad request", async ({ page }) => {
    // try fetching a score
    await page.fill("input[type='text']", "ffwefew");

    await Promise.all([
      page.waitForResponse("http://localhost:8000/api/calculate"),
      await page.click("button[type='submit']"),
    ]);

    await expect(page.locator(".error-message.show")).toBeVisible();

    await expect(page).toHaveURL(/^(?!.*(results|about))/);
  });
});
