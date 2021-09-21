import { authenticatedInstance } from "../http";
import { ArticleData } from "../types/articles";

const create = (data: ArticleData) => {
  return authenticatedInstance.post("/articles/", data);
};

const retrieveAll = () => {
  return authenticatedInstance.get("/articles/");
};

const getArticle = (slug: string) => {
  return authenticatedInstance.get(`/articles/${slug}`);
};

const ArticlesService = {
  create,
  retrieveAll,
  getArticle
};

export default ArticlesService;
