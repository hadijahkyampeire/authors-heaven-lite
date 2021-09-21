import { ArticlesState } from "../types/articles";
import { AnyAction } from "redux";

import { CREATE_ARTICLE, GET_ALL_ARTICLES, GET_SINGLE_ARTICLE } from "actions/articles";

const initialState: ArticlesState = { articles: [] };

export function articlesReducer(
  state = initialState,
  action: AnyAction
): ArticlesState {
  switch (action.type) {
    case CREATE_ARTICLE:
      return { ...state, newArticle: action.payload };
    case GET_ALL_ARTICLES:
      return { ...state, articles: action.payload, newArticle: undefined };
    case GET_SINGLE_ARTICLE:
      return { ...state, article: action.payload };
    default:
      return state;
  }
};
