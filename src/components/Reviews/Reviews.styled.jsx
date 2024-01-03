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
  color: ${({ theme }) => theme.colors.white};
`;

export const ReviewItem = styled.li`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  border-radius: 20px;
  padding: 15px;
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
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
