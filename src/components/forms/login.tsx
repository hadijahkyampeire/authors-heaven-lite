import React from 'react';
import { Form, TextInput } from 'carbon-components-react';

export const LoginForm = () => {
  return (
    <Form>
      <div style={{marginBottom: '2rem'}}>
      <TextInput
        helperText="e.g example@gmail.com"
        id="email"
        invalidText="Invalid error message."
        labelText="Email"
        placeholder="Enter email"
      />
    </div>
    <div style={{marginBottom: '2rem'}}>
      <TextInput
        helperText="Please choose a strong password with numbers, uppercase and special characters"
        id="password"
        invalidText="Invalid error message."
        labelText="First Name"
        placeholder="Enter password"
        type="password"
      />
    </div>
  </Form>
  );
};
