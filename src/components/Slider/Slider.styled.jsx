import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { FaStar } from 'react-icons/fa';

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 500px;
  min-height: 400px;

  @media screen and (min-width: 768px) {
    height: 600px;
  }

  @media screen and (min-width: 1440px) {
    height: 750px;
  }
`;

export const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SliderList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  transition: ${({ theme }) => `transform ${theme.transitions.eased}`};
`;

export const SliderItem = styled.li`
  max-width: 100%;
  min-width: 100%;
  height: 100%;
`;

export const SliderItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: ${({ $bg }) => `url(${$bg}) no-repeat center/cover`};
`;

const arrowIconStyles = css`
  position: absolute;
  z-index: 3;
  fill: ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;

export const LeftArrowIcon = styled(SlArrowLeft)`
  ${arrowIconStyles}
  left:0;
`;

export const RightArrowIcon = styled(SlArrowRight)`
  ${arrowIconStyles}
  right: 0;
`;

export const SliderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  width: 70%;
  border-top-right-radius: 30px;
  border: ${({ theme }) => `1px solid ${theme.colors.whiteOpacity}`};
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.blackOpacity};
  backdrop-filter: blur(5px);

  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`;

export const CategorySpan = styled.span`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 40px;
    font-size: 20px;
  }
`;

export const ReleaseWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const SliderTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 35px;
  }
`;

export const SliderVoteWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SliderIcon = styled(FaStar)`
  fill: ${({ theme }) => theme.colors.orange};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SliderVote = styled.p`
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SliderWatchBtn = styled(Link)`
  align-self: start;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  border-radius: 30px;
  padding: 10px 20px;
  margin-top: 15px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: ${({ theme }) =>
    `color ${theme.transitions.linear}, border-color ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentGreen};
    border-color: ${({ theme }) => theme.colors.accentGreen};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 15px 20px;
  }
`;
