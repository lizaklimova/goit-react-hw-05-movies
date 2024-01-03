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
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const GoMainPageLink = styled(Link)`
  font-weight: 600;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  border-radius: 20px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) =>
    `color ${theme.transitions.linear}, border-color ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentGreen};
    border-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
