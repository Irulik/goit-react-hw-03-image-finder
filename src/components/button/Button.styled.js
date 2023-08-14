import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: block;
  margin: 20px auto;
  padding: 15px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background-color: rgb(37, 37, 173);
  color: white;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
 &:hover,
 &:focus {
  background-color: #303f9f;
}
`;

export default ButtonStyled; 
