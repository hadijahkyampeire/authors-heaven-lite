import React, { ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import { Form, TextInput, Button, TextArea } from 'carbon-components-react';
import { ArticleData, ApiArticle } from 'types/articles';

interface Props {
  onPublish: Function;
  onSave: Function;
  newArticle?: ApiArticle;
  form: ArticleData;
  setForm: Function;
  context?: string;
};
export const AddArticleForm: React.FC<Props> = ({ onSave, onPublish, form, setForm, context }) => {
  const history = useHistory();
 
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Form data-testid="article-form">
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
      <button className="button cancel-create-btn" onClick={(e) => {e.preventDefault(); history.goBack()}}>Cancel</button>
      {context === 'Edit' ?
      form.published ? 
      <Button className="bx--btn bx--btn--primary submit-article" onClick={e => onPublish(e)}>Update Article</Button>
      : (
        <>
        <Button className="bx--btn bx--btn--secondary submit-article" onClick={e => onSave(e)} id="update-as-draft">Update as Draft</Button>
        <Button className="bx--btn bx--btn--primary submit-article" onClick={e => onPublish(e)} id="update-and-publish">Update And Publish</Button>
        </>
      )
      :
      (
        <>
          <Button className="bx--btn bx--btn--secondary submit-article" onClick={e => onSave(e)} id="create-as-draft">Save as Draft</Button>
          <Button className="bx--btn bx--btn--primary submit-article" onClick={e => onPublish(e)} id="create-and-publish">Submit And Publish</Button>
        </>
      )
      }
    </div>
  </Form>
  );
};
