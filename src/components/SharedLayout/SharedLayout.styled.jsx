import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100vw;
  height: 70px;
  background-color: #000000c5;
  backdrop-filter: blur(10px);
  opacity: 0.8;
  border-bottom: 1px solid white;
`;

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  transition: color 300ms linear;
  &.active {
    background-color: #1cb114;
    border-radius: 20px;
    padding: 10px;
  }

  &:hover,
  &:focus {
  }
`;
