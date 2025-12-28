import { expect, test } from '@playwright/test';

test('test infinite scroll', async ({ page }) => {
  await page.goto('/');

  const getCardCount = async () => {
    return await page
      .locator('[class*="ServiceCard-module-scss-module__Z4BI7q__item"]')
      .count();
  };

  let previousCount = await getCardCount();

  while (true) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    const currentCount = await getCardCount();

    if (currentCount === previousCount) {
      break;
    }

    previousCount = currentCount;
  }

  expect(await getCardCount()).toBeGreaterThan(0);
});
