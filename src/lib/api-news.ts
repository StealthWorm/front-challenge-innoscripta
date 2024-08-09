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
        'sources': source?.trim().replace(' ', '-').toLowerCase(),
      }
    });

    const sources = await fetchSources();

    console.table(sources)

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

    // console.log('news api')
    // console.log(mapList)

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

// let sourceOriginsWithDefinedCategory: string[] = []

// if (categories && categories.length > 0) {
//   const sourcePromises = categories.map(category => fetchSourcesForCategory(category));
//   const sourcesResults = await Promise.all(sourcePromises)
//   // Flatten and aggregate sources
//   const sources = sourcesResults.flat();
//   // Extract and return unique source IDs
//   sourceOriginsWithDefinedCategory = Array.from(new Set(sources.map(source => source.id)));
//   // console.table(sourceOriginsWithDefinedCategory)
//   mapList = mapList.filter((article) => {
//     const sourceName = article.source.name.replace(' ', '-').trim().toLowerCase();

//     return sourceOriginsWithDefinedCategory.includes(sourceName);
//   });
// }

// const fetchSourcesForCategory = async (category: Source): Promise<Source[]> => {
//   try {
//     const response = await api.get('https://newsapi.org/v2/top-headlines/sources', {
//       params: {
//         apiKey: API_KEY,
//         category: category.name.toLowerCase(),
//       }
//     });

//     return response.data.sources;
//   } catch (error) {
//     console.error(`Error fetching sources for category ${category}:`, error);
//     return [];
//   }
// };


