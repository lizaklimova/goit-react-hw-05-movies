import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'service/movies-api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieById = async () => {
      try {
        const movie = await getMovieById(movieId);

        setMovieInfo(movie);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieById();
  }, [movieId]);

  const goBackPath = location?.state?.from ?? '/';

  return (
    <>
      <div>Details</div>
      <GoBackBtn path={goBackPath} />
      {movieInfo && <MovieInfo movie={movieInfo} />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
