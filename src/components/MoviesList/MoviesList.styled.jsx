import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Item = styled.li`
  background-color: #fff;
  width: calc((100%) - 120px) / 5;
`;
export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
