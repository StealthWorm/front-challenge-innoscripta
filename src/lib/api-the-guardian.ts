import { UUID } from 'uuidjs';
import { FormProps, News } from '../store/news-slice';
import { api } from './axios-base';

const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
const BASE_URL = 'https://content.guardianapis.com';

export const TheGuardianAPIService = {
  getNews: async ({ query, source, period, categories, page }: FormProps): Promise<News[]> => {
    const encodedQuery = encodeURIComponent(query || '');

    const response = await api.get(`${BASE_URL}/search`, {
      params: {
        'q': encodedQuery,
        'from-date': period?.initialDate || '',
        'to-date': period?.finalDate || '',
        'show-tags': 'contributor',
        'show-elements': 'image',
        'show-fields': 'headline,body,publication',
        'page-size': 20,
        page,
        'api-key': API_KEY,
      },
    });

    let mapList: News[] = response.data.response.results.map((article: any) => {
      const contributorTag = article.tags.find((tag: any) => tag.type === 'contributor');

      return {
        id: article.id,
        title: article.fields ? article.fields.headline : article.webTitle,
        author: contributorTag ? contributorTag.webTitle : 'Unknown Author',
        source: {
          id: UUID.generate(),
          name: article.fields.publication,
          category: article.pillarName.toLowerCase(),
        },
        description: article.fields ? article.fields.body : '',
        url: article.webUrl,
        urlToImage: article.elements.length > 0 ? article.elements[0].assets[0].file : '',
        publishedAt: article.webPublicationDate,
      }
    });

    // Filter by category
    if (categories && categories.length > 0) {
      const enabledCategoryNames = categories.map((category) => category.name.toLowerCase());

      mapList = mapList.filter((article) => {
        const categoryName = article.source.category.toLowerCase();

        return enabledCategoryNames.includes(categoryName);
      });
    }

    // Filter by source
    if (source) {
      mapList = mapList.filter((article) =>
        article.source.name.trim().toLowerCase().includes(source.trim().toLowerCase())
      );
    }

    console.log('guardian api')
    console.log(mapList)

    return mapList;
  },
};
