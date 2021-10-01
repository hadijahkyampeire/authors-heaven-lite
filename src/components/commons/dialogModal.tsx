import React from 'react';

import { Modal, Button, ModalFooter } from 'carbon-components-react';
import classNames from 'classnames';

import './__styles__/dialogModal.scss';

interface Props {
  text: string;
  closeModal:() => void;
  title: string;
  open: boolean;
  className?: string;
  onSubmit: () => void;
}


export const DialogModal: React.FC<Props> = ({ text, closeModal, title, open, className, onSubmit }) => {
  return (
    <Modal
      className={classNames('dialog-modal', className)}
      open={open}
      modalHeading={title}
      passiveModal={true}
      onRequestClose={closeModal}>
      {text}
      <ModalFooter>
        <Button className="bx--btn bx--btn--secondary" onClick={closeModal}>No</Button>
        <Button className="bx--btn bx--btn--primary" onClick={() => { onSubmit(); closeModal(); }}>Yes</Button>
      </ModalFooter>
    </Modal>
  );
};
