import React from 'react';
import { Overlay, ModalWrapper } from './Modal.styled';

const Modal = ({ src, alt, handleClose }) => (
  <Overlay onClick={handleClose}> 
    <ModalWrapper> 
      <img src={src} alt={alt} />
    </ModalWrapper>
  </Overlay>
);

export default Modal;

