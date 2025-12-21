import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('displays hero section with title and description', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: 'Hireable Design System' })).toBeVisible();
    await expect(page.getByText('A comprehensive design system for building consistent')).toBeVisible();
  });

  test('has Get Started and Browse Components buttons', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Browse Components' })).toBeVisible();
  });

  test('displays all main section links', async ({ page }) => {
    await page.goto('/');
    
    // Check links exist in the main content area (using first() since links may appear in header too)
    const main = page.locator('.container');
    await expect(main.getByRole('link', { name: 'Style' }).first()).toBeVisible();
    await expect(main.getByRole('link', { name: 'Components' }).first()).toBeVisible();
    await expect(main.getByRole('link', { name: 'Patterns' }).first()).toBeVisible();
    await expect(main.getByRole('link', { name: 'Resources' }).first()).toBeVisible();
  });
});
