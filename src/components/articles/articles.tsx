import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataTile } from 'components/commons';
import { ApiArticle } from 'types/articles';
import { AddIcon } from 'components/icons';

import './__styles__/articles.scss';

interface Props {
  articles: ApiArticle[];
  fetchArticles: () => void;
}
export const Articles: React.FC<Props> = ({ articles, fetchArticles }) => {
  useEffect(() => {
    fetchArticles()
  }, [fetchArticles]);

  return (
    <section className="articles-page">
      <h2>Your Articles</h2>
      <div className="tiles-container">
      {articles && articles.length 
        ? articles.map(article => <DataTile article={article} key={article.slug} />)
        : <div className="no-articles">No Articles Found, Please add some</div>}
      </div>
      <Link to='/articles/new/' className="add-article-button"><AddIcon /></Link>
    </section>
  );
};
