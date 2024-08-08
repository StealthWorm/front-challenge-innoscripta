import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import NewsService from '../services/NewsService';

export interface Source {
  id: string;
  name: string;
  enabled: boolean;
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
}

const initialState: NewsState = {
  data: [],
  status: 'idle',
  error: null,
};

export interface FormProps {
  query?: string;
  period?: {
    initialDate: string;
    finalDate: string;
  };
  categories?: {
    id: string;
    name: string;
    enabled: boolean;
  }[];
}

// Async thunk to fetch news
export const fetchNews = createAsyncThunk('news/fetchNews',
  async ({ query, period, categories }: FormProps) => {
    const response = await NewsService.getCombinedNews({ query, period, categories });

    return response;
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    replaceData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<News[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export default newsSlice.reducer;
