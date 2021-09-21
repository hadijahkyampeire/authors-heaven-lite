import ArticleService from 'services/articles';
import { ArticleData } from "types/articles";
import { toast } from 'react-toastify';
import { CREATE_ARTICLE, GET_ALL_ARTICLES, GET_SINGLE_ARTICLE } from "./actionTypes";
import { typedAction } from '../utils';

export function createArticle(data: ArticleData) {
  return function(dispatch: Function) {
    return ArticleService.create(data)
     .then((response) => {
      dispatch(typedAction(CREATE_ARTICLE, data));
      toast.success('Article Created');
    })
    .catch(e => {
      console.log(e);
      toast.error('Failure to create article')
    });
  };
};

export function fetchArticles() {
  return function(dispatch: Function) {
    return ArticleService.retrieveAll()
     .then(({ data }) => {
        dispatch(typedAction(GET_ALL_ARTICLES, data));
    })
    .catch(e => {
      console.log(e);
      toast.error('Error While Fetching')
    });
  };
};

export function getSingleArticle(slug: string) {
  return function(dispatch: Function) {
    return ArticleService.getArticle(slug)
     .then(({ data }) => {
        dispatch(typedAction(GET_SINGLE_ARTICLE, data));
    })
    .catch(e => {
      console.log(e);
      toast.error('Error While Fetching')
    });
  };
};
