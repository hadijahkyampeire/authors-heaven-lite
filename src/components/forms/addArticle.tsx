import React, { useState, ChangeEvent } from 'react';
import { Form, TextInput, Link, Button, TextArea } from 'carbon-components-react';
import { createArticle } from 'actions/articles';
import { ArticleData, ApiArticle } from 'types/articles';

interface Props {
  onSubmit: (
    ...args: Parameters<typeof createArticle>
  ) => void;
  newArticle?: ApiArticle;
};
export const AddArticleForm: React.FC<Props> = ({ newArticle, onSubmit }) => {
  const initialValues: ArticleData = {
    title: "",
    description: "",
    body: "",
    favourited: false,
    published: false
    
  };

  const [form, setForm] = useState<ArticleData>(initialValues);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const formToSubmit = {...form, published: true }
  return (
    <Form onSubmit={(e) => { e.preventDefault(); onSubmit(formToSubmit); }}>
      <div style={{marginBottom: '2rem'}}>
      <TextInput
        id="title"
        name="title"
        invalidText="Invalid error message."
        labelText="Title"
        required
        placeholder="Enter article title"
        value={form.title}
        onChange={handleInputChange}
      />
    </div>
    <div style={{marginBottom: '2rem'}}>
      <TextInput
        id="description"
        name="description"
        invalidText="Invalid error message."
        labelText="Description"
        placeholder="Enter description"
        required
        value={form.description}
        onChange={handleInputChange}
      />
    </div>
    <div style={{marginBottom: '2rem'}}>
      <TextArea
        id="body"
        name="body"
        labelText="Body"
        placeholder="Enter article body"
        defaultValue={form.body}
        onChange={handleTextAreaChange}
      />
    </div>
    <div className="action-buttons">
      <Link className="button cancel-create-btn" href='/articles'>Cancel</Link>
      <Button className="bx--btn bx--btn--primary submit-article" type="submit">Submit And Publish</Button>
    </div>
  </Form>
  );
};
