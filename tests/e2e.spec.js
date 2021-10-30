const { test, expect } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/bright-news-web-frontend");

  await expect(page.locator("nav")).toContainText("Bright News");

  await page.fill("input[type='text']", "ft.com");

  await Promise.all([
    page.waitForResponse(
      "https://bright-news-backend.herokuapp.com/api/calculate"
    ),
    await page.click("button[type='submit']"),
  ]);
});
