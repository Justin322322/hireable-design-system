import { test, expect } from '@playwright/test';

test.describe('Style Pages', () => {
  test('loads style index page', async ({ page }) => {
    await page.goto('/style');
    
    await expect(page).toHaveURL('/style');
  });

  test('loads color page', async ({ page }) => {
    await page.goto('/style/color');
    
    await expect(page).toHaveURL('/style/color');
  });

  test('loads typography page', async ({ page }) => {
    await page.goto('/style/typography');
    
    await expect(page).toHaveURL('/style/typography');
  });

  test('loads spacing page', async ({ page }) => {
    await page.goto('/style/spacing');
    
    await expect(page).toHaveURL('/style/spacing');
  });

  test('loads corners page', async ({ page }) => {
    await page.goto('/style/corners');
    
    await expect(page).toHaveURL('/style/corners');
  });

  test('loads icons page', async ({ page }) => {
    await page.goto('/style/icons');
    
    await expect(page).toHaveURL('/style/icons');
  });

  test('loads motion page', async ({ page }) => {
    await page.goto('/style/motion');
    
    await expect(page).toHaveURL('/style/motion');
  });
});

test.describe('Resources Pages', () => {
  test('loads resources index page', async ({ page }) => {
    await page.goto('/resources');
    
    await expect(page).toHaveURL('/resources');
  });

  test('loads getting started page', async ({ page }) => {
    await page.goto('/resources/getting-started');
    
    await expect(page).toHaveURL('/resources/getting-started');
  });
});

test.describe('Patterns Pages', () => {
  test('loads patterns index page', async ({ page }) => {
    await page.goto('/patterns');
    
    await expect(page).toHaveURL('/patterns');
  });
});
