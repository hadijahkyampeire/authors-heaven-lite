import React from 'react';
import { LoginForm } from '../forms';
import { Modal } from "carbon-components-react";
import './__styles__/login.scss';

interface Props {
  open: boolean,
  closeModal: () => void
}

const LoginModal: React.FC<Props> = ({ open, closeModal }) => {
  return (
    <Modal
      className="login-modal"
      modalHeading="Login"
      open={open}
      onRequestClose={closeModal}
      primaryButtonText="Submit"
      secondaryButtonText="Cancel">
     <LoginForm />
    </Modal>
  );
};

export { LoginModal };