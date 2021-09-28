import { authenticatedInstance } from "../http";
import { ArticleData } from "../types/articles";

const create = (data: ArticleData) => {
  return authenticatedInstance.post("/articles/", data);
};

const retrieveAll = (url: string) => {
  return authenticatedInstance.get(`${url}`);
};

const retrievePublishedArticles = (url: string) => {
  return authenticatedInstance.get(`${url}`);
};

const getArticle = (url: string) => {
  return authenticatedInstance.get(`${url}/`);
};

const updateArticle = (url: string, newData: ArticleData) => {
  return authenticatedInstance.put(`${url}/`, newData);
};

const deleteArticle = (url: string) => {
  return authenticatedInstance.delete(`${url}/`);
};


const ArticlesService = {
  create,
  retrieveAll,
  getArticle,
  retrievePublishedArticles,
  updateArticle,
  deleteArticle
};

export default ArticlesService;
