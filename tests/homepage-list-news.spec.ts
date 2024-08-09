import test, { expect } from "playwright/test";

// Mock Data
const mockNewsResponse = {
  status: 'ok',
  totalResults: 2,
  articles: [
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: 'John Doe',
      title: 'Breaking News: Playwright Rocks!',
      description: 'Playwright has taken the testing world by storm.',
      url: 'https://example.com/playwright-news',
      urlToImage: 'https://example.com/playwright.jpg',
      publishedAt: '2024-08-09T12:34:56Z',
      content: 'Playwright is a new end-to-end testing tool...'
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: 'Jane Smith',
      title: 'Latest Updates on Playwright',
      description: 'Playwright continues to evolve with new features.',
      url: 'https://example.com/latest-playwright',
      urlToImage: 'https://example.com/latest-playwright.jpg',
      publishedAt: '2024-08-08T08:00:00Z',
      content: 'The latest updates on Playwright include...'
    }
  ]
};

test.describe('NewsListContent Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('https://content.guardianapis.com/search*', async route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockNewsResponse),
      });
    });

    await page.route('https://newsapi.org/v2/everything*', async route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockNewsResponse),
      });
    });

    await page.route('https://eventregistry.org/api/v1/article/getArticles*', async route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockNewsResponse),
      });
    });

    await page.goto('http://localhost:3000');

    const inputSelector = 'input[placeholder="Search Keyword"]';
    await page.fill(inputSelector, 'test');
    const triggerButton = await page.$('button[type="submit"]');
    await triggerButton?.click();

    await page.waitForTimeout(1000);
  });

  test('should display news items correctly', async ({ page }) => {
    const newsItems = await page.locator('li[data-test-id="news-card"]');
    await expect(newsItems).toHaveCount(mockNewsResponse.articles.length);

    const firstNewsTitle = await page.locator('h3').first();
    await expect(firstNewsTitle).toHaveText(mockNewsResponse.articles[0].title);

    const firstNewsAuthor = await page.locator('footer span').first();
    await expect(firstNewsAuthor).toHaveText(mockNewsResponse.articles[0].author);

    const firstNewsDescription = await page.locator('footer p').first();
    await expect(firstNewsDescription).toHaveText(mockNewsResponse.articles[0].description);

    const firstNewsImage = await page.locator('li img').first();
    await expect(firstNewsImage).toHaveAttribute('src', mockNewsResponse.articles[0].urlToImage);
  });

  test('should display empty list message when no news is available', async ({ page }) => {
    await page.route('https://content.guardianapis.com/search*', async route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify([]),
      });
    });

    await page.route('https://newsapi.org/v2/everything*', async route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify([]),
      });
    });

    await page.route('https://eventregistry.org/api/v1/article/getArticles*', async route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify([]),
      });
    });

    await page.reload();

    const emptyMessage = await page.locator('text="No news available, try another search"');
    await expect(emptyMessage).toBeVisible();
  });
});