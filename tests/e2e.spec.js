const { test, expect } = require("@playwright/test");

test("e2e test", async ({ page }) => {
  await page.goto("http://localhost:3000/bright-news-web-frontend");

  // title
  await expect(page.locator("nav")).toContainText("Bright News");

  // try fetching a score
  await page.fill("input[type='text']", "ft.com");

  await Promise.all([
    page.waitForResponse(
      "https://bright-news-backend.herokuapp.com/api/calculate"
    ),
    await page.click("button[type='submit']"),
  ]);

  // check whether website score rendered well
  const scoreText = await page.innerText(".score");

  const scoreRegex = /\d\d?\d?%/;
  expect(scoreRegex.test(scoreText)).toBe(true);

  // check whether there's enough score comparisons
  scoreComps = await page.locator(".score-group li");
  scNum = await scoreComps.count();
  expect(scNum >= 0 && scNum <= 9).toBe(true);

  // check whether score formats is good
  scContents = await scoreComps.allTextContents();
  console.log(scContents);
  const scRegex = /^\S*\s\(\d\d?\d?%\)$/;
  const sccFormatCheck = scContents.every((text) => scRegex.test(text));
  expect(sccFormatCheck).toBe(true);
});
