import ArticleService from 'services/articles';
import { ArticleData } from "types/articles";
import { toast } from 'react-toastify';
import { 
  CREATE_ARTICLE, 
  GET_ALL_ARTICLES, 
  GET_SINGLE_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE 
} from "./actionTypes";
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

export function fetchArticles(url: string) {
  return function(dispatch: Function) {
    return ArticleService.retrieveAll(url)
     .then(({ data }) => {
        dispatch(typedAction(GET_ALL_ARTICLES, data.articles));
    })
    .catch(e => {
      console.log(e);
      toast.error('Error While Fetching')
    });
  };
};

export function getSingleArticle(url: string) {
  return function(dispatch: Function) {
    return ArticleService.getArticle(url)
     .then(({ data }) => {
        dispatch(typedAction(GET_SINGLE_ARTICLE, data.article));
    })
    .catch(e => {
      console.log(e);
      toast.error('Error While Fetching')
    });
  };
};

export function updateArticle(url: string, data: ArticleData) {
  return function(dispatch: Function) {
    return ArticleService.updateArticle(url, data)
     .then((response) => {
      dispatch(typedAction(UPDATE_ARTICLE, data));
      toast.success('Article Updated');
    })
    .catch(e => {
      console.log(e);
      toast.error('Failure to create article')
    });
  };
};

export function deleteArticle(url: string) {
  return function(dispatch: Function) {
    return ArticleService.deleteArticle(url)
     .then((response) => {
      dispatch(typedAction(DELETE_ARTICLE));
      toast.warning('Article Deleted');
    })
    .catch(e => {
      console.log(e);
      toast.error('Failure to delete article')
    });
  };
};
