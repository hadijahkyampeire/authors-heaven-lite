import React from 'react';
import { Redirect } from 'react-router';
import { SignUpForm } from 'components/forms';
import { Link } from 'carbon-components-react';
import { loginUser } from 'actions';
import './__styles__/signup.scss';

interface Props {
  registerUser: (
    ...args: Parameters<typeof loginUser>
  ) => void;
  username?: string;
};

export const SignUpPage: React.FC<Props> = ({ username, registerUser }) => {
  if (username) {
    <Redirect to='/login' />
  }

  return (
    <div className="register-page">
      <h2>REGISTER</h2>
      <SignUpForm user={username} registerUser={registerUser} />
      <span className="signup-message">Already have an account? <Link href="/login">Login</Link></span>
    </div>
  );
};
