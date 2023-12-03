import { styled } from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 60px;
`;
export const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 20px;
  color: #fff;
  border: 2px solid #fff;
  background-color: transparent;

  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    font-size: 10px;
    transition: font-size 350ms linear;
  }
  @media screen and (min-width: 428px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
export const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #1cb114;
  transition: opacity 350ms linear;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  @media screen and (min-width: 428px) {
    width: 50px;
    height: 50px;
  }
`;
