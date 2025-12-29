import { expect, test } from '@playwright/test';

import { extractNumFromStr, getServiceCards, getTotalPrice } from './utils';

test('test add service in cart and check total-price', async ({ page }) => {
  await page.goto('/');

  const cards = await getServiceCards(page);
  const cardsCount = await cards.count();
  const cardButtons = cards.locator('[class*="button"]');

  expect(cardsCount).toBeGreaterThan(0);

  const limit = Math.min(3, await cardButtons.count());

  for (let i = 0; i < limit; i++) {
    await cardButtons.nth(i).click();
  }

  const expectedTotal = getTotalPrice(limit);

  const cartSummary = page.locator('[class*="totalPrice"]');

  await page.waitForTimeout(2000);

  const actualTotal = extractNumFromStr(await cartSummary.innerText());

  expect(actualTotal).toBe(expectedTotal);
});
