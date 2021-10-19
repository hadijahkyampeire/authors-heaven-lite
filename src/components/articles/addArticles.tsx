import React, { useState } from 'react';
import { ApiArticle } from 'types/articles';
import { createArticle } from 'actions/articles';
import { AddArticleForm } from 'components/forms';
import { Redirect } from 'react-router';
import { ArticleData } from 'types/articles';
import { Header } from "components/commons";

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
  const handlePublish = (e: any) => { e.preventDefault(); onSubmit(publishedForm); };
  const handleSave = (e: any) => { e.preventDefault(); onSubmit(form); };
 
  if (newArticle) {
    return <Redirect to={newArticle.published === true ? '/articles/published/' : '/articles/'} />
  }
  return (
    <section className="add-article-page">
      <Header title='Create Article'/>
      <AddArticleForm newArticle={newArticle} onPublish={handlePublish} onSave={handleSave} form={form} setForm={setForm} />
    </section>
  );
};
