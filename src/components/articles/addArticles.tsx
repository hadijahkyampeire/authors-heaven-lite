import React from 'react';
import { ApiArticle } from 'types/articles';
import { createArticle } from 'actions/articles';
import { AddArticleForm } from 'components/forms';
import { Redirect } from 'react-router';

import './__styles__/addArticle.scss';

interface Props {
  onSubmit: (
    ...args: Parameters<typeof createArticle>
  ) => void;
  newArticle?: ApiArticle;
}
export const AddArticle: React.FC<Props> = ({ newArticle, onSubmit }) => {
  if (newArticle) {
    return <Redirect to='/articles' />
  }
  return (
    <section className="add-article-page">
      <h2>Create Article</h2>
      <AddArticleForm newArticle={newArticle} onSubmit={onSubmit} />
    </section>
  );
};
