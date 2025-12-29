import { expect, test } from '@playwright/test';

import { getServiceCards } from './utils';

test('test infinite scroll', async ({ page }) => {
  await page.goto('/');

  let previousCount = await (await getServiceCards(page)).count();

  while (true) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    const currentCount = await (await getServiceCards(page)).count();

    if (currentCount === previousCount) {
      break;
    }

    previousCount = currentCount;
  }

  expect(await (await getServiceCards(page)).count()).toBeGreaterThan(0);
});
