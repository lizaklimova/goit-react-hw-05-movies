import { styled } from 'styled-components';

export const MovieInfoContainer = styled.div`
  padding: 60px 0;
  min-height: 500px;
`;

export const InfoSectionWrapper = styled.div`
  position: relative;
  min-height: 500px;

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
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const MovieInfoPoster = styled.img`
  width: 100%;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 315px;
  border-radius: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey};
  backdrop-filter: blur(15px);
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
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 30px;
  border-radius: 30px;
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
  border-color: ${({ theme }) => theme.colors.black};
`;

export const TrailerWrap = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 50px;

  iframe {
    border: none;
    border-radius: 30px;
  }

  @media screen and (min-width: 768px) {
    height: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;
