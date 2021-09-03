import React from 'react';
import { SignUpForm } from '../forms';
import { Modal } from "carbon-components-react";
import './__styles__/signup.scss';

interface Props {
  open: boolean,
  closeModal: () => void
}

const SignUpModal: React.FC<Props> = ({ open, closeModal }) => {
  return (
    <Modal
      className="signup-modal"
      modalHeading="SignUp"
      open={open}
      onRequestClose={closeModal}
      primaryButtonText="Register"
      secondaryButtonText="Cancel">
     <SignUpForm />
    </Modal>
  );
};

export { SignUpModal };