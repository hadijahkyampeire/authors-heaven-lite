import React, { useState } from 'react';
import { ApiArticle } from 'types/articles';
import { createArticle } from 'actions/articles';
import { AddArticleForm } from 'components/forms';
import { Redirect } from 'react-router';
import { ArticleData } from 'types/articles';

import './__styles__/addArticle.scss';

interface Props {
  onSubmit: (
    ...args: Parameters<typeof createArticle>
  ) => void;
  newArticle?: ApiArticle;
}
export const AddArticle: React.FC<Props> = ({ newArticle, onSubmit }) => {
  const initialValues: ArticleData = {
    title: "",
    description: "",
    body: "",
    favourited: false,
    published: false
    
  };

  const [form, setForm] = useState<ArticleData>(initialValues);

  const publishedForm = {...form, published: true };
  const handlePublish = (e: any) => { e.preventDefault(); onSubmit(publishedForm); }
 
  if (newArticle) {
    return <Redirect to='/articles/' />
  }
  return (
    <section className="add-article-page">
      <h2>Create Article</h2>
      <AddArticleForm newArticle={newArticle} onSubmit={handlePublish} form={form} setForm={setForm} />
    </section>
  );
};
