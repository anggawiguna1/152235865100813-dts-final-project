import { configureStore } from "@reduxjs/toolkit";

import { getNews } from "../apis/getNews";

export const store = configureStore({
  reducer: {
    [getNews.reducerPath]: getNews.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(getNews.middleware);
  },
});
