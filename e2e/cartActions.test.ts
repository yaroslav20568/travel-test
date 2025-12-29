import { expect, test } from '@playwright/test';

import { cartHeaderSelector, cartItemSelector, serviceSelector } from './const';
import { getItems, getTotalPriceData } from './utils';

test('test add service and cart actions flow', async ({ page }) => {
  await page.goto('/');

  // add //
  const serviceCards = await getItems(page, serviceSelector);
  const serviceCardsCount = await serviceCards.count();
  const serviceCardButtons = serviceCards.locator('[class*="button"]');

  expect(serviceCardsCount).toBeGreaterThan(0);

  for (let i = 0; i < 3; i++) {
    await serviceCardButtons.nth(i).click();
  }

  const [addExpectedTotal, addActualTotal] = await getTotalPriceData(page, 3);

  expect(addActualTotal).toBe(addExpectedTotal);
  // add //

  // delete //
  const cartElems = await getItems(page, cartItemSelector);
  const cartElemsCount = await cartElems.count();
  const cartElemLastButton = cartElems.locator('[class*="button"]').last();

  expect(cartElemsCount).toBeGreaterThan(0);

  await cartElemLastButton.click();

  const [deleteExpectedTotal, deleteActualTotal] = await getTotalPriceData(
    page,
    2
  );

  expect(deleteActualTotal).toBe(deleteExpectedTotal);
  // delete //

  // delete //
  const cartHeader = (await getItems(page, cartHeaderSelector)).first();
  const cartClearButton = cartHeader.locator('[class*="button"]');
  await cartClearButton.click();

  const [, clearActualTotal] = await getTotalPriceData(page, 0);

  expect(clearActualTotal).toBe(0);
  // delete //
});
