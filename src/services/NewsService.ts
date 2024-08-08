import { NewsAPIService } from '../lib/api-news';
import { TheGuardianAPIService } from '../lib/api-the-guardian';
import { FormProps, News, Source } from '../store/news-slice';

const NewsService = {
  getCombinedSources: async (): Promise<Source[]> => {
    const results = await Promise.allSettled([
      NewsAPIService.getNewsSources(),
    ]);

    const combinedMapSources = new Map<string, Source>();

    if (results[0].status === 'fulfilled') {
      const newsSources = results[0].value;

      newsSources.forEach((source) => {
        combinedMapSources.set(source.name, source);
      });
    } else {
      console.error('Failed to fetch News API sources:', results[0].reason);
    }

    const arrSources = Array.from(combinedMapSources.values())

    return arrSources;
  },

  getCombinedNews: async (props: FormProps): Promise<News[]> => {
    const results = await Promise.allSettled([
      TheGuardianAPIService.getNews({ ...props }),
      NewsAPIService.getNews({ ...props }),
    ]);

    // Extract the results from the promises
    const [guardianNewsResult, newsApiNewsResult] = results;

    // Handle successful and failed cases
    const guardianNews = guardianNewsResult.status === 'fulfilled' ? guardianNewsResult.value : [];
    const newsApiNews = newsApiNewsResult.status === 'fulfilled' ? newsApiNewsResult.value : [];

    // Combine the results as needed
    return [...guardianNews, ...newsApiNews];
  }
};

export default NewsService;