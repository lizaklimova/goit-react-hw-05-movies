import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;
export const Item = styled.li`
  position: relative;
  transition: transform 350ms linear;

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
  width: 300px;

  @media screen and (min-width: 428px) {
    width: 398px;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;
export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const MovieTitle = styled.p`
  max-width: 300px;
  color: #ffffff;
  font-weight: 700;
  font-size: 31px;

  @media screen and (min-width: 428px) {
    max-width: 398px;
  }
  @media screen and (min-width: 768px) {
    max-width: 200px;
    font-size: 21px;
  }
`;

export const VoteAvr = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  right: -5px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #1cb114;
  font-weight: 600;
  color: #fff;
  font-size: 25px;
  @media screen and (min-width: 428px) {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
`;

export const MovieRelease = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
`;
