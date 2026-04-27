import { test, expect, type Page } from '@playwright/test';

test('basic page load', async ({ page }: { page: Page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});