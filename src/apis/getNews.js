import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "apiKey=8bfc257b3bbb48faa624c10f66dffb33";

export const getNews = createApi({
  reducerPath: "reqApiRAWG",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/top-headlines",
  }),
  endpoints: (builder) => ({
    listNewsAll: builder.query({
      query: ({country, pageSize, page}) => `?country=${country}&pageSize=${pageSize}&page=${page}&${apiKey}`,
    }),
    listNewsCate: builder.query({
      query: ({country, pageSize, page, category}) => `?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&${apiKey}`,
    }),
    listNewsSearching: builder.query({
      query: ({ country, pageSize, page, q }) => `?country=${country}&q=${q}&pageSize=${pageSize}&page=${page}&${apiKey}`,
    }),
  }),
});

export const {
  useListNewsAllQuery,
  useListNewsCateQuery,
  useListNewsSearchingQuery,
} = getNews;
