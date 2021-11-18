import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal, CloseButton, TextModal, ButtonContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, text, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <StyledModal>
        <CloseButton type="button" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" >
            <path d="M1 1L13 13" stroke="#52555F" strokeWidth="2" />
            <path d="M1 13L13 0.999999" stroke="#52555F" strokeWidth="2" />
          </svg>
        </CloseButton>
        <TextModal>{text}</TextModal>
        <ButtonContainer>{children}</ButtonContainer>
      </StyledModal>
    </Overlay>,
    modalRoot,
  );
}

export default Modal;