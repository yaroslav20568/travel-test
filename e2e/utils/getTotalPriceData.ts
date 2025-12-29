import { Page } from '@playwright/test';

import { mockServices } from '@/entities';

import { extractNumFromStr } from './extractNumFromStr';

export const getTotalPrice = (limit: number) => {
  return mockServices.slice(0, limit).reduce((acc, el) => {
    return acc + el.price;
  }, 0);
};

export const getTotalPriceData = async (page: Page, limit: number) => {
  const expectedTotal = getTotalPrice(limit);

  const cartSummary = page.locator('[class*="totalPrice"]');

  await page.waitForTimeout(2000);

  const actualTotal = extractNumFromStr(await cartSummary.innerText());

  return [expectedTotal, actualTotal];
};
