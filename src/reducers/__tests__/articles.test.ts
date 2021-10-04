import { CREATE_ARTICLE, GET_ALL_ARTICLES, GET_SINGLE_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from 'actions/articles';
import { ArticlesState } from "types/articles";

import { articlesReducer } from '../articles';

const initialState: ArticlesState = { articles: { results: [], count: 0 } };

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(articlesReducer(undefined, {type: null})).toEqual(initialState);
  });

  it('handles create article request', () => {
    expect(articlesReducer(initialState, { type: CREATE_ARTICLE, payload: { title: 'one', description: 'some desc'} })).toEqual({
      ...initialState,
      newArticle: { title: 'one', description: 'some desc'},
    });
  });

  it('handles get all articles request', () => {
    expect(articlesReducer(initialState, { type: GET_ALL_ARTICLES, payload: { results: [{ title: 'two', body: 'body 2'}], count: 1} })).toEqual({
      ...initialState,
      articles: { results: [{ title: 'two', body: 'body 2'}], count: 1}
    });
  });

  it('handles get one article request', () => {
    expect(articlesReducer(initialState, { type: GET_SINGLE_ARTICLE, payload: { title: 'one', description: 'some desc'} })).toEqual({
      ...initialState,
      article: { title: 'one', description: 'some desc'}
    });
  });

  it('handles update article request', () => {
    expect(articlesReducer(initialState, { type: UPDATE_ARTICLE, payload: { title: 'one updated', description: 'some desc'} })).toEqual({
      ...initialState,
      updatedArticle: { title: 'one updated', description: 'some desc'},
    });
  });

  it('handles delete article request', () => {
    expect(articlesReducer(initialState, { type: DELETE_ARTICLE })).toEqual({
      ...initialState
    });
  });
});
