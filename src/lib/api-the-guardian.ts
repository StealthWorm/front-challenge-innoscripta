import { FormProps, News, Source } from '../store/news-slice';
import { api } from './axios-base';

const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;//  '2a5023c4-409d-4128-8250-9358a0f42a56';
const BASE_URL = 'https://content.guardianapis.com';

export const TheGuardianAPIService = {
  getSources: async (): Promise<Source[]> => {
    const response = await api.get(`${BASE_URL}/search`, {
      params: {
        'show-tags': 'contributor',
        'page-size': 100,
        'api-key': API_KEY,
      },
    });

    return response.data.response.results.map((article: any) => ({
      id: article.id,
      name: article.sectionName,
      category: article.pillarName,
      enabled: false,
      origin: 'guardian api',
    }));
  },

  getNews: async ({ query, period, categories }: FormProps): Promise<News[]> => {
    const response = await api.get(`${BASE_URL}/search`, {
      params: {
        'q': query,
        'from-date': period?.initialDate || '',
        'to-date': period?.finalDate || '',
        'show-tags': 'contributor',
        'show-elements': 'image',
        'show-fields': 'headline,body',
        // 'order-by': 'relevance',
        'page-size': 100,
        'api-key': API_KEY,
      },
    });

    let mapList: News[] = response.data.response.results.map((article: any) => {
      const contributorTag = article.tags.find((tag: any) => tag.type === 'contributor');
      // const slugTag = article.elements.find((element: any) => element.assets[0].file)

      return {
        id: article.id,
        title: article.fields ? article.fields.headline : article.webTitle,
        author: contributorTag ? contributorTag.webTitle : 'Unknown Author',
        source: {
          id: (article.id + article.sectionName).trim().toLowerCase(),
          name: article.pillarName.toLowerCase(),
        },
        description: article.fields ? article.fields.body : '',
        url: article.webUrl,
        urlToImage: article.elements.length > 0 ? article.elements[0].assets[0].file : '',
        publishedAt: article.webPublicationDate,
      }
    });

    if (categories && categories.length > 0) {
      const enabledCategoryNames = categories.map((category) => category.name.toLowerCase());

      mapList = mapList.filter((article) => {
        const sourceName = article.source.name;

        return enabledCategoryNames.includes(sourceName);
      });
    }

    return mapList;
  },
};
