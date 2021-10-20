import ArticleService from 'services/articles';
import { ArticleData } from "types/articles";
import { toast } from 'react-toastify';
import { 
  CREATE_ARTICLE, 
  GET_ALL_ARTICLES, 
  GET_SINGLE_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE,
  CREATE_ARTICLE_REQUEST,
  GET_ALL_ARTICLES_REQUEST 
} from "./actionTypes";
import { typedAction, resetAction } from '../utils';

export function createArticle(data: ArticleData) {
  return function(dispatch: Function) {
    dispatch(typedAction(CREATE_ARTICLE_REQUEST))
    return ArticleService.create(data)
     .then((response) => {
      dispatch(typedAction(CREATE_ARTICLE, data));
      toast.success('Article Created');
    })
    .catch(e => {
      toast.error('Failure to create article')
    });
  };
};

export function fetchArticles(url: string) {
  return function(dispatch: Function) {
    dispatch(typedAction(GET_ALL_ARTICLES_REQUEST))
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
    dispatch(typedAction('get/article/request'))
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

export function updateArticle(slug: string | undefined, data: ArticleData) {
  return function(dispatch: Function) {
    dispatch(typedAction('update/article/request'))
    return ArticleService.updateArticle(slug, data)
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

export function deleteArticle(url: string | undefined) {
  return function(dispatch: Function) {
    dispatch(typedAction('delete/article/request'))
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

export const resetEditArticle = () => {
  return (dispatch: Function) => {
    dispatch(resetAction(UPDATE_ARTICLE));
  };
};
