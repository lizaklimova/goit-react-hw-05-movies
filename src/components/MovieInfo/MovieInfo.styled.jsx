import { styled } from 'styled-components';

export const MovieInfoContainer = styled.div`
  padding: 60px 0;
`;
export const InfoSectionWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(4, 4, 4, 0.4), rgba(4, 4, 4, 0.4))
        no-repeat center/cover,
      url(${props => props.$backdropSrc}) no-repeat center/cover;
    filter: blur(15px);
    z-index: -1;
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 458px) {
    flex-direction: column;
  }
  @media screen and (min-width: 428px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;
export const MovieInfoPoster = styled.img`
  border-radius: 20px;
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
export const MovieDescription = styled.div`
  padding: 10px;
  background-color: #d2d5d378;
  backdrop-filter: blur(15px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  min-height: 315px;
  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 500px;
  }
`;
export const MovieInfoTitle = styled.h3`
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
export const ScoreText = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const MovieInfoScore = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
`;

export const SubTitle = styled.h4`
  font-size: 20px;
  font-style: italic;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Line = styled.hr`
  width: 100%;

  border-color: #000;
`;
