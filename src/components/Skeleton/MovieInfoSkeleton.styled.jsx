import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const InfoContentLoader = styled(ContentLoader)`
  width: 100%;
  height: 600px;
  margin-top: 60px;

  rect {
    width: 100%;
    height: 600px;
  }

  @media screen and (min-width: 768px) {
    height: 500px;

    rect {
      height: 500px;
    }
  }
`;
