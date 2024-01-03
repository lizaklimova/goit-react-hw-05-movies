import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export const MoviesContentLoader = styled(ContentLoader)`
  width: 250px;
  height: 491px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 476px;

    rect.poster {
      height: 300px;
    }
  }
`;
