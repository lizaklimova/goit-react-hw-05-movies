import { styled } from 'styled-components';

export const ScrollUpButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: ${({ theme }) => `3px solid ${theme.colors.white}`};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.greenBackdrop};
  cursor: pointer;
  transition: ${({ theme }) => `transform ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
