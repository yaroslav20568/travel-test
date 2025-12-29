import { Page } from '@playwright/test';

export const getItems = async (page: Page, selector: string) => {
  await page.waitForSelector(selector);

  return page.locator(selector);
};
