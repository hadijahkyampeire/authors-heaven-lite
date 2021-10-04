import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "testUtils";

import { AddArticle } from '../addArticles';

type addArticleProps = React.ComponentProps<typeof AddArticle>;

const baseProps: addArticleProps = {
  onSubmit: jest.fn()
};

function renderUI(props: Partial<addArticleProps> = {}) {
  return render(
    <Router>
      <AddArticle {...baseProps} {...props} />
    </Router>
  );
};

describe('<AddArticle />', () => {
  it("snapshot test", () => {
    const { container } = renderUI({});
    expect(container).toMatchSnapshot();
  });

  it('renders properly', async () => {
    const { getByText, findByTestId } = renderUI({});

    const articleForm = await findByTestId('article-form');
    expect(getByText('Create Article')).toBeInTheDocument();
    expect(articleForm).toBeInTheDocument();
  });

  it("should have a form with input field", async () => {
    const { findByTestId } = renderUI({});

    const articleForm = await findByTestId('article-form');
    expect(articleForm).toHaveFormValues({
      title: "",
      description: "",
      body: ""
    });
  });
});
