import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'service/movies-api';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import notification from 'helpers/notification';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);

    const fetchMovieById = async () => {
      try {
        const movie = await getMovieById(movieId);

        setMovieInfo(movie);
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  const goBackPath = location?.state?.from ?? '/';

  return (
    <>
      {loader && <Loader />}
      <GoBackBtn path={goBackPath} />
      {movieInfo && <MovieInfo movie={movieInfo} />}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
