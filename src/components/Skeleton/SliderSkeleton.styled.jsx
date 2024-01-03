import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const FullWidthContentLoader = styled(ContentLoader)`
  width: 100vw;
  height: 500px;
  min-height: 400px;

  rect {
    width: 100vw;
    height: 500px;
    min-height: 400px;
  }

  @media screen and (min-width: 768px) {
    height: 600px;

    rect {
      height: 600px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 750px;

    rect {
      height: 750px;
    }
  }
`;
