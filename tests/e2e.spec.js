const { test, expect } = require("@playwright/test");

test.describe("e2e", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/bright-news-web-frontend");
  });

  test("e2e test", async ({ page }) => {
    // title
    await expect(page.locator("nav")).toContainText("Bright News");

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
    expect(sccFormatCheck).toBe(true);

    // about section
    await page.click("[pagename='about']");
    await expect(page.locator("h1")).toHaveText("About");
  });
});
