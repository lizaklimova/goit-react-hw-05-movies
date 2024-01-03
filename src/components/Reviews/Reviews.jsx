import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { IoMdPerson } from 'react-icons/io';
import { getReviews } from 'service/movies-api';
import notification from 'helpers/notification';
import { Container } from 'components/App/App.styled';
import {
  ReviewsWrapper,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  NoReviewsMsg,
} from 'components/Reviews/Reviews.styled';
import smoothScroll from 'helpers/smoothScroll';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    const fetchReviews = async () => {
      try {
        const { results } = await getReviews(movieId);

        setReviews(results);

        return results;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);

        smoothScroll('reviewsWrapper');
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper name="reviewsWrapper">
      <Container>
        {loader && <Loader />}
        {reviews.length > 0 ? (
          <ReviewList>
            {reviews.map(({ id, author, content }) => (
              <ReviewItem key={id}>
                <ReviewAuthor>
                  <IoMdPerson />
                  {author}
                </ReviewAuthor>
                <p>{content}</p>
              </ReviewItem>
            ))}
          </ReviewList>
        ) : (
          <NoReviewsMsg>Sorry, no reviews</NoReviewsMsg>
        )}
      </Container>
    </ReviewsWrapper>
  );
};

export default Reviews;
