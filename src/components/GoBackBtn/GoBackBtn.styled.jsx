import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  width: 100px;
  padding: 5px;
  margin-top: 30px;
  transition: color 350ms linear, border-color 350ms linear;
  &:hover,
  &:focus {
    color: #1cb114;
    border-color: #1cb114;
  }
`;
