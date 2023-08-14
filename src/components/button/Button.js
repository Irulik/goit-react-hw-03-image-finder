import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ onClick }) => (
  <ButtonStyled onClick={onClick} type="button">
    Load more
  </ButtonStyled>
);

export default Button;
