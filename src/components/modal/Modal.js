import React, { Component } from 'react';
import { Overlay, ModalWrapper } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
}

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.handleClose();
    }
  };

  render() {
    const { src, alt, handleClose } = this.props;

    return (
      <Overlay onClick={handleClose}>
        <ModalWrapper>
          <img src={src} alt={alt} />
        </ModalWrapper>
      </Overlay>
    );
  }
}

export default Modal;