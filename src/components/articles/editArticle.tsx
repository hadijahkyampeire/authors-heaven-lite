import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ApiArticle } from 'types/articles';
import { updateArticle } from 'actions/articles';
import { AddArticleForm } from 'components/forms';
import { Redirect } from 'react-router';
import { ArticleData } from 'types/articles';

import './__styles__/addArticle.scss';

interface Props {
  onUpdate: (...args: Parameters<typeof updateArticle>) => void;
  updatedArticle?: ApiArticle;
  article?: ApiArticle
}
export const EditArticle: React.FC<Props> = ({ updatedArticle, onUpdate, article }) => {
  const { pathname: url } = useLocation();
  const initialValues: ArticleData = {
    title: "",
    description: "",
    body: "",
    favourited: false,
    published: false
    
  };

  const [form, setForm] = useState<ArticleData>({...initialValues, ...article });

  const handleSubmit = (e: any) => {e.preventDefault(); onUpdate(url,form );}

  if (updatedArticle) {
    return <Redirect to='/articles/' />
  }
  return (
    <section className="add-article-page">
      <h2>Create Article</h2>
      <AddArticleForm onSubmit={handleSubmit} form={form} setForm={setForm} context='Edit' />
    </section>
  );
};
