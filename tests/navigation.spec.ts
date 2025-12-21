import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('header is visible and sticky', async ({ page }) => {
    await page.goto('/');
    
    const header = page.locator('header');
    await expect(header).toBeVisible();
    await expect(header).toHaveClass(/sticky/);
  });

  test('logo navigates to homepage', async ({ page }) => {
    await page.goto('/components');
    
    await page.getByRole('link', { name: /Logo/i }).first().click();
    await expect(page).toHaveURL('/');
  });

  test('Get Started button navigates to getting started page', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Get Started' }).click();
    await expect(page).toHaveURL('/resources/getting-started');
  });

  test('Browse Components button navigates to components page', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Browse Components' }).click();
    await expect(page).toHaveURL('/components');
  });
});

test.describe('Main Sections Navigation', () => {
  test('navigates to Style section', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Style' }).first().click();
    await expect(page).toHaveURL('/style');
  });

  test('navigates to Components section', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Components' }).first().click();
    await expect(page).toHaveURL('/components');
  });

  test('navigates to Patterns section', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Patterns' }).first().click();
    await expect(page).toHaveURL('/patterns');
  });

  test('navigates to Resources section', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'Resources' }).first().click();
    await expect(page).toHaveURL('/resources');
  });
});
