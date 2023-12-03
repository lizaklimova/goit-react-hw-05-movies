import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const NotFoundWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;
export const NotFoundMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const GoMainPageLink = styled(Link)`
  color: #fff;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-weight: 600;
  transition: color 350ms linear, border-color 350ms linear;
  &:hover,
  &:focus {
    color: #1cb114;
    border-color: #1cb114;
  }
`;
