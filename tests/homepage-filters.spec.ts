import { test, expect } from '@playwright/test';

test('Home page - Title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/News Daily/);
});

test('Home Page - Name', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('heading', { name: 'News Now' })).toBeVisible();
});

test.describe('Navigation Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page that contains your NavigationMenu component
    await page.goto('http://localhost:3000');
  });

  test('should display categories when the button is clicked', async ({ page }) => {
    const triggerButton = await page.$('button[name="categories"]');
    await triggerButton?.click();
    const menuContent = await page.$('div');

    expect(await menuContent?.isVisible()).toBeTruthy();
  });

  test('should prevent default behavior on pointer move and leave', async ({ page }) => {
    const triggerButton = await page.$('button[name="categories"]');

    await triggerButton?.dispatchEvent('pointermove');
    await triggerButton?.dispatchEvent('pointerleave');

    await triggerButton?.click();
    const menuContent = await page.$('div');
    expect(await menuContent?.isVisible()).toBeTruthy();
  });

  test('should render the correct number of categories', async ({ page }) => {
    const triggerButton = await page.$('button[name="categories"]');
    await triggerButton?.click();

    const menuContent = await page.$('[data-test-id="categoriesList"]');
    const categoryItems = await menuContent?.$$('div');

    expect(categoryItems?.length).toBe(13);
  });

  test('should check and uncheck the categories', async ({ page }) => {
    const triggerButton = await page.$('button[name="categories"]');
    await triggerButton?.click();

    const checkboxes = await page.$$('button[id^="category-"]'); // Find checkboxes by their id
    for (const checkbox of checkboxes) {
      const isChecked = await checkbox.isChecked();
      await checkbox.click();

      expect(await checkbox.isChecked()).toBe(!isChecked);
    }
  });

  test('should display the correct category names', async ({ page }) => {
    const triggerButton = await page.$('button[name="categories"]');
    await triggerButton?.click();

    const menuContent = await page.$('[data-test-id="categoriesList"]');
    expect(menuContent).not.toBeNull();

    const categoryNames = await menuContent?.$$eval('span', spans =>
      spans.map(span => span.textContent)
    );

    const expectedNames = [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sport',
      'technology',
      'news',
      'lifestyle',
      'opinion',
      'society',
      'wellness',
      'film',
    ];

    expect(categoryNames).toEqual(expectedNames);
  });

  test('should display dates when the button Period is clicked', async ({ page }) => {
    const triggerButton = await page.$('button[name="period"]');
    await triggerButton?.click();
    const menuContent = await page.$('div');

    expect(await menuContent?.isVisible()).toBeTruthy();
  });

  test('should render the date inputs', async ({ page }) => {
    const triggerButton = await page.$('button[name="period"]');
    await triggerButton?.click();

    const menuContent = await page.$('[data-test-id="dateList"]');
    const inputItems = await menuContent?.$$('input');

    expect(inputItems?.length).toBe(2);
  });

  test('should render the SearchForm components with correct placeholders', async ({ page }) => {
    // Locate the SearchForm containers by their input placeholders
    const searchKeywordForm = await page.$('input[placeholder="Search Keyword"]');
    const searchSourceForm = await page.$('input[placeholder="Search Source"]');

    expect(searchKeywordForm).not.toBeNull();
    expect(await searchKeywordForm?.getAttribute('placeholder')).toBe('Search Keyword');
    expect(searchSourceForm).not.toBeNull();
    expect(await searchSourceForm?.getAttribute('placeholder')).toBe('Search Source');
  });

  test('should display the Filter button', async ({ page }) => {
    const triggerButton = await page.$('button[type="submit"]');
    expect(triggerButton).not.toBeNull();
  });

  test('should focus on the Keyword Search input on click Filter button', async ({ page }) => {
    const triggerButton = await page.$('button[type="submit"]');
    await triggerButton?.click();

    const searchKeywordForm = await page.$('input[placeholder="Search Keyword"]');
    const isFocused = await searchKeywordForm?.evaluate((input) => input === document.activeElement);

    expect(isFocused).toBe(true);
  });
});