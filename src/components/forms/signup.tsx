import React, { useState, ChangeEvent } from 'react';
import { Form, TextInput, Link } from 'carbon-components-react';
import { registerUser } from 'actions';
import { UserData } from 'types/user';

interface Props {
  registerUser: (
    ...args: Parameters<typeof registerUser>
  ) => void;
  user?: string;
};

export const SignUpForm: React.FC<Props> = ({ user, registerUser }) => {
  const initialValues: UserData = {
    email: "",
    username: "",
    password: ""
    
  };
  const [form, setForm] = useState<UserData>(initialValues);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Form onSubmit={(e) => { e.preventDefault(); registerUser(form); }}>
    <div style={{marginBottom: '2rem'}}>
      <TextInput
        id="email"
        name="email"
        labelText="Email"
        placeholder="Enter Email"
        helperText="e.g example@gmail.com"
        value={form.email}
        onChange={handleInputChange}
      />
    </div>
    <div style={{marginBottom: '2rem'}}>
      <TextInput
        id="username"
        name="username"
        labelText="Username"
        placeholder="Enter Username"
        value={form.username}
        onChange={handleInputChange}
      />
    </div>
    <div style={{marginBottom: '2rem'}}>
      <TextInput
        helperText="Please choose a strong password with numbers, uppercase and special characters"
        id="password"
        name="password"
        invalidText="Invalid error message."
        labelText="Password"
        placeholder="Enter password"
        type="password"
        value={form.password}
        onChange={handleInputChange}
      />
  </div>
  <div className="action-buttons">
      <Link className="button cancel-login-btn">Cancel</Link>
      <button className="bx--btn bx--btn--primary submit-login" type="submit">Submit</button>
    </div>
</Form>
  );
};
