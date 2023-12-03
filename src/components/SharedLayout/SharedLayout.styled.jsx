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
  gap: 50px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 100px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 21px;
  color: white;
  transition: color 300ms linear;
  &.active {
    background-color: #1cb114;
    border-radius: 20px;
    padding: 10px;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: #1cb114;
  }
`;
