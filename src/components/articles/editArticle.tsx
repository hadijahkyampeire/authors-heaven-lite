import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ApiArticle } from 'types/articles';
import { updateArticle, getSingleArticle } from 'actions/articles';
import { AddArticleForm } from 'components/forms';
import { Redirect } from 'react-router';
import { ArticleData } from 'types/articles';
import { Header } from "components/commons";

import './__styles__/addArticle.scss';

interface Props {
  onUpdate: (...args: Parameters<typeof updateArticle>) => void;
  fetchArticle: (...args: Parameters<typeof getSingleArticle>) => void;
  resetEditArticle: () => void;
  updatedArticle?: ApiArticle;
  article?: ApiArticle
}
export const EditArticle: React.FC<Props> = ({ updatedArticle, onUpdate, article, fetchArticle, resetEditArticle }) => {
  const { pathname: url } = useLocation();
  const initialValues: ArticleData = {
    title: "",
    description: "",
    body: "",
    favourited: false,
    published: false
  };

  const articleUrl = url.replace('/edit', '');

  useEffect(() => resetEditArticle, []); // eslint-disable-line

  useEffect(() => {
    fetchArticle(articleUrl);
  }, [url, fetchArticle]); // eslint-disable-line

  const [form, setForm] = useState<ArticleData>({...initialValues, ...article });

  useEffect(() => setForm({...initialValues, ...article }), [article]); // eslint-disable-line

  const publishedForm = {...form, published: true };

  const handlePublish = (e: any) => { e.preventDefault(); onUpdate(article?.slug, publishedForm ); };
  const handleSave = (e: any) => { e.preventDefault(); onUpdate(article?.slug, form); };

  if (updatedArticle) {
    return <Redirect to='/articles/' />
  }
  return (
    <section className="add-article-page">
      <Header title={`Editing ${article?.title }`}/>
      <AddArticleForm onSave={handleSave} onPublish={handlePublish} form={form} setForm={setForm} context='Edit' />
    </section>
  );
};
