import { styled } from 'styled-components';

export const ScrollUpButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 37px;
  background-color: #0dcb2d70;
  border: 3px solid #fff;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  cursor: pointer;
  transition: transform 300ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
