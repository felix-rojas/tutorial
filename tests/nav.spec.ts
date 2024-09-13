import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Vercel logomark Deploy now' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Read our docs' }).click();
  const page2 = await page2Promise;
  await page.getByText('Get started by editing src/app/page.tsx.Save and see your changes instantly.').click();
  await page.locator('div').filter({ hasText: 'Get started by editing src/' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Examples' }).click();
  const page3 = await page3Promise;
});
