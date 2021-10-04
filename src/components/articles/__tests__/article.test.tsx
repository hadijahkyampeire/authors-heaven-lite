import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import { render } from "testUtils";

import { Article } from '../article';

type ArticleProps = React.ComponentProps<typeof Article>;

const baseProps: ArticleProps = {
  fetchArticle: jest.fn(),
  deleteArticle: jest.fn(),
  article: { title: '1 one', description: 'desc', body: 'body', slug: '1-one', author: { username: 'test user', email: 'test@gmail.com' }}
};

function renderUI(props: Partial<ArticleProps> = {}) {
  return render(
    <Router>
      <Article {...baseProps} {...props} />
    </Router>
  );
};

describe('<Article />', () => {
  it("snapshot test", () => {
    const { container } = renderUI({ email: 'test@gmail.com'});
    expect(container).toMatchSnapshot();
  });

  it('renders properly', async () => {
    const { findByTestId, getByText } = renderUI({  email: 'test@gmail.com' });

    const articlePage = await findByTestId('article-page');
    expect(articlePage).toBeInTheDocument();
    expect(getByText('Viewing 1 one')).toBeInTheDocument();
  });
  
  it('renders footer buttons if you are the right user/handles click on yes', async () => {
    const { findByTestId, getByText, queryByTestId } = renderUI({  email: 'test@gmail.com' });
    const articleFooter = await findByTestId('article-footer');
    expect(articleFooter).toBeInTheDocument();

    expect(queryByTestId('dialog-modal')).toBeNull();

    const deleteButton = getByText('Delete Article');
    fireEvent.click(deleteButton);
 
    const deleteModal = await findByTestId('dialog-modal');
    expect(deleteModal).toBeInTheDocument();

    const yesButton = getByText('Yes');
    fireEvent.click(yesButton);
    expect(queryByTestId('dialog-modal')).toBeNull();
  });

  it('handles close button', async () => {
    const { findByTestId, getByText, queryByTestId } = renderUI({  email: 'test@gmail.com' });
    const articleFooter = await findByTestId('article-footer');
    expect(articleFooter).toBeInTheDocument();

    const deleteButton = getByText('Delete Article');
    fireEvent.click(deleteButton);
 
    const deleteModal = await findByTestId('dialog-modal');
    expect(deleteModal).toBeInTheDocument();

    const cancelButton = getByText('No');
    fireEvent.click(cancelButton);
    expect(queryByTestId('dialog-modal')).toBeNull();
  });

  it('Does not render footer buttons if you are not the right user', async () => {
    const { queryByTestId } = renderUI({  email: 'notuser@gmail.com' });
   
    expect(queryByTestId('article-footer')).toBeNull();
  });
});
