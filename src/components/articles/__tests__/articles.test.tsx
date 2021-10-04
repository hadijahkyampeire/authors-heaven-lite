import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "testUtils";

import { Articles } from '../articles';

type ArticlesProps = React.ComponentProps<typeof Articles>;

const baseProps: ArticlesProps = {
  fetchArticles: jest.fn(),
  deleteArticle: jest.fn(),
  articles: { 
    results: [{title: '1 one', description: 'desc', body: 'body', slug: '1-one'}, {title: '2 two', description: 'desc', body: 'body', slug: '2-two'}], 
    count: 2 
  }
};

function renderUI(props: Partial<ArticlesProps> = {}) {
  return render(
    <Router>
      <Articles {...baseProps} {...props} />
    </Router>
  );
};

describe('<Articles />', () => {
  it("snapshot test", () => {
    const { container } = renderUI({});
    expect(container).toMatchSnapshot();
  });

  it('renders properly', async () => {
    const { findByTestId, findAllByTestId } = renderUI({});

    const tabContainer = await findByTestId('tabs');
    expect(tabContainer).toBeInTheDocument();

    const dataTile = await findAllByTestId('data-tile');
    expect(dataTile).toHaveLength(2)
  });
  
  it('Shows no article text if there is no article', () => {
    const fewProps: ArticlesProps = {
      fetchArticles: jest.fn(),
      deleteArticle: jest.fn(),
      articles: { 
        results: [], 
        count: 0 
      }
    };
    function renderUI(props: Partial<ArticlesProps> = {}) {
      return render(
        <Router>
          <Articles {...fewProps} {...props} />
        </Router>
      );
    };

    const { getByText } = renderUI({});
    expect(getByText('No Articles Found, Please add some')).toBeInTheDocument();
  });

});
