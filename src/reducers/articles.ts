import { ArticlesState } from "../types/articles";
import { AnyAction } from "redux";

import { CREATE_ARTICLE, GET_ALL_ARTICLES, GET_SINGLE_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from "actions/articles";

const initialState: ArticlesState = { articles: { results: [], count: 0 } };

export function articlesReducer(
  state = initialState,
  action: AnyAction
): ArticlesState {
  switch (action.type) {
    case CREATE_ARTICLE:
      return { ...state, newArticle: action.payload };
    case GET_ALL_ARTICLES:
      return { ...state, articles: action.payload, newArticle: undefined, updatedArticle: undefined };
    case GET_SINGLE_ARTICLE:
      return { ...state, article: action.payload, updatedArticle: undefined };
    case UPDATE_ARTICLE:
      return { ...state, updatedArticle: action.payload };
    case DELETE_ARTICLE:
      return { ...state };
    default:
      return state;
  }
};
