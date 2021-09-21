import { useLocation } from "react-router";

import { getSingleArticle } from 'actions/articles';
import React, { useEffect } from 'react';
import { ApiArticle } from 'types/articles';
import { Link } from "carbon-components-react";

import './__styles__/article.scss';

interface Props {
  article?: ApiArticle;
  fetchArticle: (...args: Parameters<typeof getSingleArticle>) => void;
};

export const Article: React.FC<Props> = ({ article, fetchArticle }) => {

  const { pathname: url } = useLocation();
  const getLastItem = (thePath: string) => thePath.substring(thePath.lastIndexOf('/') + 1);
  const slug = getLastItem(url);

  useEffect(() => {
    fetchArticle(slug);
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="article-page">
      <div className="header">
        <Link href='/articles/'>Back</Link>
        <span>Viewing {article?.title}</span>
      </div>
      <div>
        <div className="article-title">{article?.title}</div>
        <div className="other-header"><span className="author">By: {article?.author}</span><span>{new Date().getDate()}</span><span>2 min read</span></div>
        <div className="article-body">
          <div className="article-description">{article?.description}</div>
          <div className="article-body">{article?.body}</div>
        </div>
        <div className="article-footer">
          <button>Edit Article</button>
          <button>Delete Article</button>
          <button>Share Article</button>
        </div>
      </div>
    </section>
  );
};
