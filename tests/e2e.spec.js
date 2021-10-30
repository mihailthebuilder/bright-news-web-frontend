const { test, expect } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/bright-news-web-frontend");
  const title = page.locator("nav");
  await expect(title).toContainText("Bright News");
});
