import React from 'react';
import { LoginForm } from '../forms';
import { Modal } from "carbon-components-react";
import {auth , provider}  from '../../firebase'; 
import { GoogleIcon } from 'components/icons';
import './__styles__/login.scss';

interface Props {
  open: boolean,
  closeModal: () => void
}

const LoginModal: React.FC<Props> = ({ open, closeModal }) => {
  const signin = () => {
    auth.signInWithRedirect(provider).catch(alert);
}
  return (
    <Modal
      className="login-modal"
      modalHeading="Login"
      open={open}
      onRequestClose={closeModal}
      primaryButtonText="Submit"
      secondaryButtonText="Cancel">
      <button onClick={signin} className="google-login-btn"><GoogleIcon /> Sign In with Google</button>
      <div className="horizontal-divider" />
      <LoginForm />
    </Modal>
  );
};

export { LoginModal };