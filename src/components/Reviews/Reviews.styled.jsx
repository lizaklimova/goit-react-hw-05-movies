import { styled } from 'styled-components';

export const ReviewsWrapper = styled.div`
  padding: 50px 0;
`;
export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  color: #fff;
`;
export const ReviewItem = styled.li`
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
`;
export const ReviewAuthor = styled.p`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const NoReviewsMsg = styled.div`
  color: #fff;
  font-size: 20px;
`;
