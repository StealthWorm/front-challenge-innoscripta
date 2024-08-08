import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './news-slice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;