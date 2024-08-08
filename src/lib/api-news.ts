import { FormProps, News, Source } from '../store/news-slice';
import { api } from './axios-base';

const API_KEY = 'ec01d97b95cc46a48dc47e12697ac454'; //import.meta.env.VITE_NEWS_API_API_KEY;// 
const BASE_URL = 'https://newsapi.org/v2';

export const NewsAPIService = {
  getNewsSources: async (): Promise<Source[]> => {
    const response = await api.get(`${BASE_URL}/top-headlines/sources`, {
      params: {
        apiKey: API_KEY,
      },
    });

    return response.data.sources.map((source: Source) => ({
      id: source.id,
      name: source.name,
      category: source.name,
      enabled: false,
      origin: 'newsapi',
    }));
  },

  getNews: async ({ query, period, categories }: FormProps): Promise<News[]> => {
    let enabledCategoryNames: string[] = [];

    if (categories && categories.length > 0) {
      enabledCategoryNames = categories.map((category) => category.name.toLowerCase());
    }

    const response = await api.get(`${BASE_URL}/everything`, {
      params: {
        'q': query,
        'from': period?.initialDate || '',
        'to': period?.finalDate || '',
        'apiKey': API_KEY,
        'sources': enabledCategoryNames.toString()
      }
    });

    const mapList: News[] = response.data.articles.map((article: News) => ({
      id: (article.url).trim(),
      title: article.title,
      author: article.author,
      source: {
        id: article.source.id,
        name: article.source.name,
      },
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
    }));

    return mapList;
  },
};
