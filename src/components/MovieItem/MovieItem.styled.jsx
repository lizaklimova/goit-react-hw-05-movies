import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  position: relative;
  transition: ${({ theme }) => `transform ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: calc((100%) - 80px) / 3;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100%) - 200px) / 6;
  }
`;

export const Poster = styled.img`
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MovieTitle = styled.p`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  width: 300px;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 428px) {
    max-width: 398px;
  }

  @media screen and (min-width: 768px) {
    max-width: 200px;
    font-size: 21px;
  }
`;

export const VoteAvr = styled.span`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 25px;
  width: 50px;
  height: 25px;
  border-radius: 10px 0px 0px 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accentGreen};
  box-shadow: ${({ theme }) => theme.shadows.vote};

  @media screen and (min-width: 768px) {
    right: 0;
  }
`;

export const MovieRelease = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.white};
`;
