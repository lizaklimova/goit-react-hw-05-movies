import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getReviews } from 'service/movies-api';
import notification from 'helpers/notification';

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
      }
    };

    fetchReviews();
  }, [movieId]);
  return (
    <>
      {loader && <Loader />}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
