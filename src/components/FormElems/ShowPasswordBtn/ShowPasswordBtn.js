import React, { useState } from 'react';
import { IconButton } from './ShowPasswordBtn.styled';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';

const ShowPasswordBtn = ({ onClick, mouseDown, showPassword }) => {
  return (
    <IconButton onClick={onClick} onMouseDown={mouseDown}>
      {showPassword ? (
        <MdVisibility size="18px" />
      ) : (
        <MdVisibilityOff size="18px" />
      )}
    </IconButton>
  );
};

export default ShowPasswordBtn;
