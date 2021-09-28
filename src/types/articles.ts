export interface ArticleData {
  title: string;
  description?: string;
  body?: string;
  favourited?: boolean;
  published?: boolean;
}

export interface ApiAuthor {
  id?: string;
  username?: string;
  bio?: string;
  email?: string;
};
export interface ApiArticle extends ArticleData {
  slug?: string;
  author?: ApiAuthor;
}

export interface ApiArticlesState {
  results: ApiArticle[];
  count?: number;
  next?: number | null;
  previous?: number | null;
}
export interface ArticlesState {
  articles: ApiArticlesState;
  newArticle?: ApiArticle;
  article?: ApiArticle;
  updatedArticle?: ApiArticle;
}
