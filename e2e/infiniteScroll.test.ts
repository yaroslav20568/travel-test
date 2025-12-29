import { expect, test } from '@playwright/test';

import { serviceSelector } from './const';
import { getItems } from './utils';

test('test infinite scroll', async ({ page }) => {
  await page.goto('/');

  let previousCount = await (await getItems(page, serviceSelector)).count();

  while (true) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    const currentCount = await (await getItems(page, serviceSelector)).count();

    if (currentCount === previousCount) {
      break;
    }

    previousCount = currentCount;
  }

  expect(await (await getItems(page, serviceSelector)).count()).toBeGreaterThan(
    0
  );
});
