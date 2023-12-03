import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 730px;
  }

  @media screen and (min-width: 1440px) {
    width: 1430px;
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
  color: #fff;
  font-size: 20px;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 10px;
  transition: color 350ms linear, border-color 350ms linear;
  &:active {
    color: #1cb114;
    border-color: #1cb114;
  }
  &:hover,
  &:focus {
    color: #1cb114;
    border-color: #1cb114;
  }
`;
