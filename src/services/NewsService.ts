import { NewsAPIService } from '../lib/api-news';
import { TheGuardianAPIService } from '../lib/api-the-guardian';
import { NewsAPI_AIService } from '../lib/news-api-ai';
import { FormProps, News } from '../store/news-slice';

const NewsService = {
  getCombinedNews: async (props: FormProps): Promise<News[]> => {
    const results = await Promise.allSettled([
      TheGuardianAPIService.getNews({ ...props }),
      NewsAPIService.getNews({ ...props }),
      NewsAPI_AIService.getNews({ ...props }),
    ]);

    // Extract the results from the promises
    const [guardianNewsResult, newsApiNewsResult, newsApiAiNewsResult] = results;

    // Handle successful and failed cases
    const guardianNews = guardianNewsResult.status === 'fulfilled' ? guardianNewsResult.value : [];
    const newsApiNews = newsApiNewsResult.status === 'fulfilled' ? newsApiNewsResult.value : [];
    const newsApiAiNews = newsApiAiNewsResult.status === 'fulfilled' ? newsApiAiNewsResult.value : [];

    // Combine the results as needed
    return [...guardianNews, ...newsApiNews, ...newsApiAiNews];
  }
};

export default NewsService;