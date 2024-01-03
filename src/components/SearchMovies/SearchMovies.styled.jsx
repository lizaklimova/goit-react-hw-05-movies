import { styled } from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 60px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;

  & :is(input:focus, input:valid) ~ label {
    color: ${({ theme }) => theme.colors.accentGreen};
    transform: translateY(-20px);
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `2px solid ${theme.colors.white}`};
  background-color: transparent;

  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px black inset;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 428px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const SearchInputLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 5%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.grey};
  width: 105px;
  text-align: center;
  transition: ${({ theme }) => `all ${theme.transitions.linear}`};
  cursor: text;
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  cursor: pointer;
  transition: ${({ theme }) => `opacity ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 428px) {
    width: 50px;
    height: 50px;
  }
`;
