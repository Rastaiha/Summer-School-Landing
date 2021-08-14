import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import { articlesUrl } from '../constants/urls';

export const getArticlesAction = createAsyncThunkApi(
  'articles/getAll',
  Apis.GET,
  articlesUrl
);

export const getArticleAction = createAsyncThunkApi(
  'articles/getOne',
  Apis.GET,
  ({ articleId }) => articlesUrl + articleId + '/'
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
  },
  extraReducers: {
    [getArticlesAction.fulfilled.toString()]: (
      state,
      { payload: { response } }
    ) => {
      state.articles = response;
    },
    [getArticleAction.fulfilled.toString()]: (
      state,
      { payload: { response } }
    ) => {
      state.articles = state.articles.filter(
        (article) => +article.id !== +response.id
      );
      state.articles.push(response);
    },
  },
});

export const { reducer: articlesReducer } = articlesSlice;
