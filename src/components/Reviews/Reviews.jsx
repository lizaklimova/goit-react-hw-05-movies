import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import { getReviews } from 'service/movies-api';

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
        Notify.info(message);
      } finally {
        setLoader(false);
      }
    };

    fetchReviews();
  }, [movieId]);
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
