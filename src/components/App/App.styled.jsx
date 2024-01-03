import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 428px) {
    max-width: 394px;
  }

  @media screen and (min-width: 768px) {
    max-width: 734px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1406px;
  }
`;

export const AdLinksWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 60px;
`;

export const AdLink = styled(NavLink)`
  font-size: 20px;
  border: ${({ theme }) => `2px solid ${theme.colors.white}`};
  border-radius: 20px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) =>
    `color ${theme.transitions.linear}, border-color ${theme.transitions.linear}`};

  &.active {
    color: ${({ theme }) => theme.colors.accentGreen};
    border-color: ${({ theme }) => theme.colors.accentGreen};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentGreen};
    border-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
