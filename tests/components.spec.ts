import { test, expect } from '@playwright/test';

test.describe('Components Page', () => {
  test('loads components index page', async ({ page }) => {
    await page.goto('/components');
    
    await expect(page).toHaveURL('/components');
  });

  test('displays component list', async ({ page }) => {
    await page.goto('/components');
    
    // Check that the page has content loaded
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Button Component Page', () => {
  test('loads button component page', async ({ page }) => {
    await page.goto('/components/button');
    
    await expect(page).toHaveURL('/components/button');
  });

  test('displays button examples', async ({ page }) => {
    await page.goto('/components/button');
    
    // Verify buttons are rendered on the page
    await expect(page.getByRole('button').first()).toBeVisible();
  });
});

test.describe('Card Component Page', () => {
  test('loads card component page', async ({ page }) => {
    await page.goto('/components/card');
    
    await expect(page).toHaveURL('/components/card');
  });
});

test.describe('Input Component Page', () => {
  test('loads input component page', async ({ page }) => {
    await page.goto('/components/input');
    
    await expect(page).toHaveURL('/components/input');
  });

  test('input elements are interactive', async ({ page }) => {
    await page.goto('/components/input');
    
    const input = page.getByRole('textbox').first();
    if (await input.isVisible()) {
      await input.fill('Test input');
      await expect(input).toHaveValue('Test input');
    }
  });
});

test.describe('Tabs Component Page', () => {
  test('loads tabs component page', async ({ page }) => {
    await page.goto('/components/tabs');
    
    await expect(page).toHaveURL('/components/tabs');
  });
});

test.describe('Modal Component Page', () => {
  test('loads modal component page', async ({ page }) => {
    await page.goto('/components/modal');
    
    await expect(page).toHaveURL('/components/modal');
  });
});
