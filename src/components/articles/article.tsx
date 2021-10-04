import { useLocation } from "react-router";
import { Link } from 'react-router-dom';

import { getSingleArticle, deleteArticle } from 'actions/articles';
import React, { useEffect, useState } from 'react';
import { ApiArticle } from 'types/articles';
import { Header, DialogModal } from "components/commons";

import './__styles__/article.scss';

interface Props {
  article?: ApiArticle;
  fetchArticle: (...args: Parameters<typeof getSingleArticle>) => void;
  deleteArticle: (...args: Parameters<typeof deleteArticle>) => void;
  email?: string;
};

export const Article: React.FC<Props> = ({ article, fetchArticle, email, deleteArticle }) => {
  const [openDelete, setOpenDelete] = useState<string | undefined>(undefined);
  const { pathname: url } = useLocation();

  useEffect(() => {
    fetchArticle(url);
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasPermission = email === article?.author?.email;
  return (
    <section className="article-page" data-testid="article-page">
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
            <div className="article-footer" data-testid="article-footer">
              <Link to={`${url}/edit`}>Edit Article</Link>
              <button onClick={() => setOpenDelete(article?.slug)}>Delete Article</button>
              <button>Share Article</button>
            </div>
          </>
          )
        : null}
        {openDelete === article?.slug ? <DialogModal 
          open={openDelete === article?.slug} 
          closeModal={() => setOpenDelete(undefined)}
          onSubmit={() => deleteArticle(article?.slug)}
          title={`Delete ${article?.title}`} 
          text='Are you sure you want to delete this Article?' 
           />
        : null}
      </div>
    </section>
  );
};
