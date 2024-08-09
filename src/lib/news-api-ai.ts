import { FormProps, News } from '../store/news-slice';
import { api } from './axios-base';

const API_KEY = import.meta.env.VITE_NEWS_AI_API_KEY;
const BASE_URL = 'https://eventregistry.org/api/v1';

export const NewsAPI_AIService = {
  getNews: async ({ query, source, period, categories, page }: FormProps): Promise<News[]> => {
    const params = {
      keyword: query,
      dateStart: period?.initialDate || '',
      dateEnd: period?.finalDate || '',
      articlesCount: 20,
      articlesPage: page,
      apiKey: API_KEY,
    };

    if (source) {
      params.sourceUri = source;
    }

    const response = await api.get(`${BASE_URL}/article/getArticles`, { params });

    let mapList: News[] = response.data.articles.results.map((article: any) => ({
      id: article.uri,
      title: article.title,
      author: article.authors.length > 0 ? article.authors[0].name : 'Anonymous',
      source: {
        id: article.source.uri,
        name: article.source.title,
        category: article.source.dataType,
      },
      description: article.body,
      url: article.url,
      urlToImage: article.image,
      publishedAt: article.dateTimePub,
    }));

    // Filter by category
    if (categories && categories.length > 0) {
      const enabledCategoryNames = categories.map((category) => category.name.toLowerCase());

      mapList = mapList.filter((article) => {
        const categoryName = article.source.category.toLowerCase();

        return enabledCategoryNames.includes(categoryName);
      });
    }

    console.log('newsapi ai')
    console.log(mapList)

    return mapList;
  },
};
