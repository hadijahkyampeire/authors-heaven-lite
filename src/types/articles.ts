export interface ArticleData {
  title: string;
  description?: string;
  body?: string;
  favourited?: boolean;
  published?: boolean;
}

export interface ApiArticle extends ArticleData {
  slug?: string;
  author?: string;
}

export interface ArticlesState {
  articles: ApiArticle[];
  newArticle?: ApiArticle;
  article?: ApiArticle;
}
