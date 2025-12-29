import { expect, test } from '@playwright/test';

import { cartHeaderSelector, cartItemSelector, serviceSelector } from './const';
import { getItems, getTotalPriceData } from './utils';

test('test add services to cart', async ({ page }) => {
  await page.goto('/');

  const serviceCards = await getItems(page, serviceSelector);
  const serviceCardsCount = await serviceCards.count();
  const serviceCardButtons = serviceCards.locator('[class*="button"]');

  expect(serviceCardsCount).toBeGreaterThan(0);

  for (let i = 0; i < 3; i++) {
    await serviceCardButtons.nth(i).click();
  }

  const [expectedTotal, actualTotal] = await getTotalPriceData(page, 3);

  expect(actualTotal).toBe(expectedTotal);
});

test('test delete service from cart', async ({ page }) => {
  await page.goto('/');

  const serviceCards = await getItems(page, serviceSelector);
  const serviceCardButtons = serviceCards.locator('[class*="button"]');

  for (let i = 0; i < 3; i++) {
    await serviceCardButtons.nth(i).click();
  }

  const cartElems = await getItems(page, cartItemSelector);
  const cartElemsCount = await cartElems.count();
  const cartElemLastButton = cartElems.locator('[class*="button"]').last();

  expect(cartElemsCount).toBeGreaterThan(0);

  await cartElemLastButton.click();

  const [expectedTotal, actualTotal] = await getTotalPriceData(page, 2);

  expect(actualTotal).toBe(expectedTotal);
});

test('test clear cart', async ({ page }) => {
  await page.goto('/');

  const serviceCards = await getItems(page, serviceSelector);
  const serviceCardButtons = serviceCards.locator('[class*="button"]');

  for (let i = 0; i < 3; i++) {
    await serviceCardButtons.nth(i).click();
  }

  const cartHeader = (await getItems(page, cartHeaderSelector)).first();
  const cartClearButton = cartHeader.locator('[class*="button"]');
  await cartClearButton.click();

  const [, actualTotal] = await getTotalPriceData(page, 0);

  expect(actualTotal).toBe(0);
});
