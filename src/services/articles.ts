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

const updateArticle = (slug: string | undefined, newData: ArticleData) => {
  return authenticatedInstance.put(`articles/${slug}`, newData);
};

const deleteArticle = (slug: string | undefined) => {
  return authenticatedInstance.delete(`articles/${slug}`);
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
