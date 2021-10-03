import React from 'react';
import { toast } from 'react-toastify';
import firebase from 'firebase/app';

import { LoginForm } from 'components/forms';
import { provider }  from '../../firebase'; 
import { GoogleIcon } from 'components/icons';
import { Link } from 'carbon-components-react';
import { loginUser, googleLogin } from 'actions';


import './__styles__/login.scss';

interface Props {
  loginUser: (
    ...args: Parameters<typeof loginUser>
  ) => void;
  googleLogin: (
    ...args: Parameters<typeof googleLogin>
  ) => void;
  username?: string;
  isLoggedIn?: boolean;
};

export const LoginPage: React.FC<Props> = ({ username, loginUser, googleLogin, isLoggedIn  }) => {

  const signInWithGoogle = () => {
     firebase.auth().signInWithPopup(provider).then((result) => {
      const token = result?.credential;

      const user = result.user;
      localStorage.setItem('fireBaseToken', JSON.stringify(token));
      googleLogin(user)

     })
      .catch((e) => toast.error('Error with google auth'));
    
  };

  return (
    <div className="login-page">
      <h2>LOGIN</h2>
      <button onClick={(e) => {e.preventDefault(); signInWithGoogle(); }} className="google-login-btn" data-testid="google-login-btn"><GoogleIcon /> Sign In with Google</button>
      <div className="horizontal-divider" />
      <LoginForm user={username} loginUser={loginUser} />
      <span className="login-message">Don't have an account yet? <Link href="/">SignUp</Link></span>
    </div>
  );
};
