import { UUID } from 'uuidjs';
import { FormProps, News, Source } from '../store/news-slice';
import { api } from './axios-base';

const API_KEY = import.meta.env.VITE_NEWS_API_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const NewsAPIService = {
  getNews: async ({ query, source, period, categories, page }: FormProps): Promise<News[]> => {
    const response = await api.get(`${BASE_URL}/everything`, {
      params: {
        'q': query,
        'from': period?.initialDate || '',
        'to': period?.finalDate || '',
        'pageSize': 20,
        page,
        'apiKey': API_KEY,
        ...(
          source && {
            sources: source?.trim().replace(' ', '-').toLowerCase()
          }
        )
      }
    });

    const sources = await fetchSources();

    let mapList: News[] = response.data.articles.map((article: News) => {
      const articleId = article.source.id || sources.find(source => source.name === article.source.name)?.category.trim().toLowerCase();
      const categoryName = sources.find(source => source.name === article.source.name)?.category || 'No category'

      return {
        id: UUID.generate(),
        title: article.title,
        author: article.author,
        source: {
          id: articleId,
          name: article.source.name,
          category: categoryName,
        },
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
      }
    });

    if (categories && categories.length > 0) {
      const enabledCategoryNames = categories.map((category) => category.name.toLowerCase());

      mapList = mapList.filter((article) => {
        return enabledCategoryNames.includes(article.source.category.toLowerCase());
      });
    }

    console.log('news api')
    console.log(mapList)

    return mapList;
  },
};

async function fetchSources(): Promise<Source[]> {
  const response = await api.get('https://newsapi.org/v2/top-headlines/sources', {
    params: {
      apiKey: API_KEY,
    },
  });

  return response.data.sources.map((source: Source) => ({
    id: source.id,
    name: source.name,
    category: source.category
  }))
}


