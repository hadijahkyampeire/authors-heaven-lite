import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import { render } from "testUtils";

import  { AddArticleForm } from "../addArticle";

type articleFormProps = React.ComponentProps<typeof AddArticleForm>;

const baseProps: articleFormProps = {
  onSubmit: jest.fn(),
  form: { title: '', description: '', body: ''},
  setForm: jest.fn()
};

function renderUI(props: Partial<articleFormProps> = {}) {
  return render(
    <Router>
      <AddArticleForm {...baseProps} {...props} />
    </Router>
  );
};

describe("<ArticleForm />", () => {

  it("should handle title input change", async () => {
    const { getByLabelText } = renderUI({});

    const title: HTMLInputElement = getByLabelText("Title") as HTMLInputElement;

    fireEvent.change(title, { target: { value: "test article" } });
    expect(baseProps.setForm).toBeCalledWith({"body": "", "description": "", "title": "test article"})
  });

  it("should handle description input change", async () => {
    const { getByLabelText } = renderUI({});

    const description: HTMLInputElement = getByLabelText("Description") as HTMLInputElement;

    fireEvent.change(description, { target: { value: "It is test article" } });
    expect(baseProps.setForm).toBeCalledWith({"body": "", "description": "It is test article", "title": ""});
  });

  it("should handle body input change", async () => {
    const { getByLabelText, getByText } = renderUI({});

    const body: HTMLInputElement = getByLabelText("Body") as HTMLInputElement;
    const submit = getByText("Submit And Publish");

    fireEvent.change(body, { target: { value: "blabla blabla" } });
    expect(baseProps.setForm).toBeCalledWith({"body": "blabla blabla", "description": "", "title": ""})

    fireEvent.click(submit);

    expect(body.value).toBe("blabla blabla");
  });

  it('populates fields when editing', async () => {
    const { getByLabelText, getByText } = renderUI({ 
      context: 'Edit', 
      form : { title: 'some title', description: 'test description', body: 'the body', published: true}
    });
    const title: HTMLInputElement = getByLabelText("Title") as HTMLInputElement;
    expect(title.value).toBe('some title');

    const description: HTMLInputElement = getByLabelText("Description") as HTMLInputElement;
    expect(description.value).toBe('test description');

    const body: HTMLInputElement = getByLabelText("Body") as HTMLInputElement;
    expect(body.value).toBe('the body');

    const submitButton = getByText('Update Article');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);
    expect(baseProps.onSubmit).toBeCalled();

  });

  it('renders different buttons if article is not published', () => {
    const { getByText } = renderUI({ 
      context: 'Edit', 
      form : { title: 'some title', description: 'test description', body: 'the body', published: false}
    });

    const submitDraft = getByText('Update as Draft');
    const submitAndPublish = getByText('Update And Publish');
    expect(submitDraft).toBeInTheDocument();
    fireEvent.click(submitDraft);
    expect(baseProps.onSubmit).toBeCalledWith({"body": "the body", "description": "test description", "published": false, "title": "some title"});

    expect(submitAndPublish).toBeInTheDocument();
    fireEvent.click(submitAndPublish);
    expect(baseProps.onSubmit).toBeCalledWith({"body": "the body", "description": "test description", "published": false, "title": "some title"});

  });
});
