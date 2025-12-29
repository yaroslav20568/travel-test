import { Page } from '@playwright/test';

export const getServiceCards = async (page: Page) => {
  await page.waitForSelector('.ServiceCard-module-scss-module__Z4BI7q__item');

  return page.locator('.ServiceCard-module-scss-module__Z4BI7q__item');
};
