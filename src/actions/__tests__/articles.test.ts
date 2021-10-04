import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
  createArticle,
  getSingleArticle,
  fetchArticles,
  updateArticle,
  deleteArticle,
  CREATE_ARTICLE_REQUEST,
  GET_ALL_ARTICLES_REQUEST,
  resetEditArticle
 } from 'actions/articles';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
  
describe('articles action', () => {
  let store: any;
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore({ articles: {} });
  });

  it('fires a create article request action', () =>
  store
    .dispatch(createArticle({ title: 'test', description: 'desc', body: 'body' }))
    .then(() => expect(store.getActions()).toContainEqual({ type: CREATE_ARTICLE_REQUEST })));

  it('fires get all articles request action', () =>
    store
      .dispatch(fetchArticles('/articles'))
      .then(() => expect(store.getActions()).toContainEqual({ type: GET_ALL_ARTICLES_REQUEST})));

  it('fires get one article request action', () =>
    store
      .dispatch(getSingleArticle('/articles/:slug'))
      .then(() => expect(store.getActions()).toEqual([{payload: undefined, type: "get/article/request"}])));

  it('fires update article request action', () =>
    store
      .dispatch(updateArticle('one-1', {title: 'updated'}))
      .then(() => expect(store.getActions()).toContainEqual({ type: "update/article/request"})));
  
  it('fires delete article request action', () =>
    store
      .dispatch(deleteArticle('/articles/:slug'))
      .then(() => expect(store.getActions()).toEqual([{payload: undefined, type: "delete/article/request"}])));

  it('fires reset for edit article request action', () => {
    store.dispatch(resetEditArticle());
    expect(store.getActions()).toContainEqual({ type: "articles/update_RESET" });
  });
});
