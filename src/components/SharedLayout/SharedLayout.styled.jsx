import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100vw;
  height: 70px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.white}`};
  background-color: ${({ theme }) => theme.colors.black};
  backdrop-filter: blur(10px);
  opacity: 0.8;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  height: 70px;

  @media screen and (min-width: 768px) {
    gap: 100px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 21px;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => `color ${theme.transitions.linear}`};

  &.active {
    border-radius: 20px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
