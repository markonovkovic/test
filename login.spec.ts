#testni primjer
import { test, expect } from '@playwright/test';

test('user can log in with valid credentials', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('text=Welcome')).toBeVisible();
});
