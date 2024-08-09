import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import NewsService from '../services/NewsService';

export interface Source {
  id: string;
  name: string;
  category: string;
}

export interface News {
  id: string;
  title: string;
  author: string;
  source: {
    id: string;
    name: string;
    category: string;
  };
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface NewsState {
  data: News[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  formData: FormProps;
}

const initialState: NewsState = {
  data: [],
  status: 'idle',
  error: null,
  formData: {
    query: '',
    source: '',
    period: {
      initialDate: '',
      finalDate: '',
    },
    categories: [],
    page: 1,
  },
};

export interface FormProps {
  query?: string;
  period: {
    initialDate: string;
    finalDate: string;
  };
  categories?: {
    id: string;
    name: string;
    enabled: boolean;
  }[];
  source?: string;
  page: number;
}

// Async thunk to fetch news
export const fetchNews = createAsyncThunk('news/fetchNews',
  async ({ query, source, period, categories, page }: FormProps) => {
    const response = await NewsService.getCombinedNews({ query, source, period, categories, page });

    return { news: response, formData: { query, source, period, categories, page } };
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    nextPage(state) {
      state.formData.page++;
    },
    previousPage(state) {
      state.formData.page--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (
        state,
        action: PayloadAction<{ news: News[]; formData: FormProps }>
      ) => {
        state.status = 'succeeded';
        state.data = action.payload.news;
        state.formData = action.payload.formData;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export const { nextPage, previousPage } = newsSlice.actions;

export default newsSlice.reducer;
