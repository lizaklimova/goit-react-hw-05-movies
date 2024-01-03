import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100px;
  border: ${({ theme }) => `2px solid ${theme.colors.white}`};
  border-radius: 20px;
  padding: 5px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) =>
    `color ${theme.transitions.linear}, border-color ${theme.transitions.linear} `};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentGreen};
    border-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
