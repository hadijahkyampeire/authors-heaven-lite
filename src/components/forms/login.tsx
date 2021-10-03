import React, { useState, ChangeEvent } from 'react';
import { Form, TextInput, Link, Button } from 'carbon-components-react';
import { loginUser } from 'actions';
import { UserData } from 'types/user';

interface Props {
  loginUser: (
    ...args: Parameters<typeof loginUser>
  ) => void;
  user?: string;
};
export const LoginForm: React.FC<Props> = ({ user, loginUser }) => {
  const initialValues: UserData = {
    email: "",
    password: ""
    
  };

  const [form, setForm] = useState<UserData>(initialValues);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Form onSubmit={(e) => { e.preventDefault(); loginUser(form); }} data-testid="login-form">
      <div style={{marginBottom: '2rem'}}>
      <TextInput
        helperText="e.g example@gmail.com"
        id="login-email"
        name="email"
        invalidText="Invalid error message."
        labelText="Email"
        required
        placeholder="Enter email"
        value={form.email}
        onChange={handleInputChange}
      />
    </div>
    <div style={{marginBottom: '2rem'}}>
      <TextInput
        helperText="Please choose a strong password with numbers, uppercase and special characters"
        id="login-password"
        name="password"
        invalidText="Invalid error message."
        labelText="Password"
        placeholder="Enter password"
        required
        type="password"
        value={form.password}
        onChange={handleInputChange}
      />
    </div>
    <div className="action-buttons">
      <Link className="button cancel-login-btn">Cancel</Link>
      <Button className="bx--btn bx--btn--primary submit-login" type="submit">Submit</Button>
    </div>
  </Form>
  );
};
