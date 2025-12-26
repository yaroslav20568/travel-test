import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/AeroVenture Airlines/);
});

test('page loads correctly', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL('/');
});
