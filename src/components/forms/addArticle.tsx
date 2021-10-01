import React, { ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import { Form, TextInput, Button, TextArea } from 'carbon-components-react';
import { ArticleData, ApiArticle } from 'types/articles';

interface Props {
  onSubmit: Function
  newArticle?: ApiArticle;
  form: ArticleData;
  setForm: Function;
  context?: string;
};
export const AddArticleForm: React.FC<Props> = ({ onSubmit, form, setForm, context }) => {
  const history = useHistory();
 
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = (e: any) => { e.preventDefault(); onSubmit(form);}
  return (
    <Form>
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
      <Button className="bx--btn bx--btn--primary submit-article" onClick={e => onSubmit(e)}>Update Article</Button>
      : (
        <>
        <Button className="bx--btn bx--btn--secondary submit-article" onClick={e => handleSave(e)}>Update as Draft</Button>
        <Button className="bx--btn bx--btn--primary submit-article" onClick={e => onSubmit(e)}>Update And Publish</Button>
        </>
      )
      :
      (
        <>
          <Button className="bx--btn bx--btn--secondary submit-article" onClick={e => handleSave(e)}>Save as Draft</Button>
          <Button className="bx--btn bx--btn--primary submit-article" onClick={e => onSubmit(e)}>Submit And Publish</Button>
        </>
      )
      }
    </div>
  </Form>
  );
};
