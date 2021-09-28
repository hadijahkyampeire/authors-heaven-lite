import { useLocation } from "react-router";
import { Link } from 'react-router-dom';

import { getSingleArticle } from 'actions/articles';
import React, { useEffect } from 'react';
import { ApiArticle } from 'types/articles';
import { Header } from "components/commons";

import './__styles__/article.scss';

interface Props {
  article?: ApiArticle;
  fetchArticle: (...args: Parameters<typeof getSingleArticle>) => void;
  email?: string;
};

export const Article: React.FC<Props> = ({ article, fetchArticle, email }) => {
  const { pathname: url } = useLocation();

  useEffect(() => {
    fetchArticle(url);
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasPermission = email === article?.author?.email;
  return (
    <section className="article-page">
      <Header title={`Viewing ${article?.title }`}/>
      <div>
        <div className="article-title">{article?.title}</div>
        <div className="other-header"><span className="author">By: {article?.author?.username}</span><span>{new Date().getDate()}</span><span>2 min read</span></div>
        <div className="article-body">
          <div className="article-description">{article?.description}</div>
          <div className="article-body">{article?.body}</div>
        </div>
        {hasPermission ? (
          <>
            <div className="article-footer">
              <Link to={`${url}/edit`}>Edit Article</Link>
              <button>Delete Article</button>
              <button>Share Article</button>
            </div>
          </>
          )
        : null}
      </div>
    </section>
  );
};
