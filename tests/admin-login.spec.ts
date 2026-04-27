import { test, expect } from '@playwright/test';

test('login, go to admin, click Add button, and verify Add User form', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const usernameField = page.locator('input[name="username"]');
  const passwordField = page.locator('input[name="password"]');
  const loginButton = page.locator('button[type="submit"]');

  const credentialText = await page.locator('text=Username').first().textContent();
  const username = credentialText?.match(/Username\s*[:\-]?\s*(\S+)/i)?.[1] ?? 'Admin';
  const password = credentialText?.match(/Password\s*[:\-]?\s*(\S+)/i)?.[1] ?? 'admin123';

  await usernameField.fill(username);
  await passwordField.fill(password);
  await loginButton.click();

  await expect(page).toHaveURL(/.*\/dashboard/); 

  const adminLink = page.getByRole('link', { name: /Admin/i });
  await expect(adminLink).toBeVisible();
  await adminLink.click();

  // const adminTitle = page.getByRole('heading', { name: /System Users|Admin/i });
  // await expect(adminTitle).toBeVisible();
  // await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);

  // Click on Add button
  const addButton = page.getByRole('button', { name: /Add/i });
  await expect(addButton).toBeVisible();
  await addButton.click();

  // Verify Add User form is available
  const addUserHeading = page.getByRole('heading', { name: /Add User/i });
  await expect(addUserHeading).toBeVisible();
});