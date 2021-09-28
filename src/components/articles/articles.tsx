import React, { useEffect } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';

import { DataTile } from 'components/commons';
import { ApiArticlesState } from 'types/articles';
import { AddIcon } from 'components/icons';
import { ContainerTabs } from 'components/commons';
import './__styles__/articles.scss';
import { fetchArticles } from 'actions/articles';

interface Props {
  articles: ApiArticlesState;
  fetchArticles: (...args: Parameters<typeof fetchArticles>) => void;
}
export const Articles: React.FC<Props> = ({ articles = {}, fetchArticles }) => {
  console.log(articles, 'articles')
  const { count, results } = articles;
  const { pathname: url } = useLocation();
  useEffect(() => {
    fetchArticles(url)
  }, [fetchArticles, url]);

  const getCount = (tabUrl: string) => url === tabUrl ? count : 0
  const tabslist = [
    {name: `All Articles (${getCount('/articles/')})`, url: '/articles/'},
    {name: `Published Articles  (${getCount('/articles/published/')})`, url: '/articles/published/'}
  ];

  return (
    <section className="articles-page">
      <ContainerTabs tabslist={tabslist} currentPageUrl={url} />
      <div className="tiles-container">
      {results && results.length 
        ? results.map(article => <DataTile article={article} key={article.slug} />)
        : <div className="no-articles">No Articles Found, Please add some</div>}
      </div>
      <Link to='/articles/new/' className="add-article-button"><AddIcon /></Link>
    </section>
  );
};
