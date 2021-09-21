import React from 'react';
import { Link } from 'react-router-dom';

import { ApiArticle } from 'types/articles';
import { OverFlowMenu } from 'components/commons';

interface Props {
  article: ApiArticle;
}

export const DataTile: React.FC<Props> = ({ article }) => {
  const overFlowOptions = [
    {text: 'Delete Article', onClick: () => alert('delete') },
    {text: 'Edit Article', onClick: () => alert('edit')}
  ]
  const { title, description, body, slug, author } = article;
  const limit = 200;
  const truncate = body && body.trim().length > limit;
  return (
    <div className="article-tile">
      <div className="tile-title">{title}</div>
      <div className="tile-content">
        <Link to={`/articles/${slug}`} className="des-and-body">
        <div className="description">{description}.</div>
        <div className="body">{truncate ? body.slice(0, limit - ' ...more'.length) : body}{truncate && <span> ...</span>}</div>
        
        </Link>
      </div>
      <div className="tile-footer">
        <div className="publisher">
          <span>By: </span>
          <span className="author">{author}</span>
        </div>
        <OverFlowMenu options={overFlowOptions} />
        </div>
    </div>
  );
};
