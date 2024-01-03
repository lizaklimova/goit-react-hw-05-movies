import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import notification from 'helpers/notification';
import { getMovieById, getTrailer } from 'service/movies-api';
import Loader from 'components/Loader';
import MovieInfo from 'components/MovieInfo';
import GoBackBtn from 'components/GoBackBtn';
import ScrollUpBtn from 'components/ScrollUpBtn';
import InfoSkeleton from 'components/Skeleton/MovieInfoSkeleton';
import { Container, AdLinksWrap, AdLink } from 'components/App/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);

    const fetchMovieById = async () => {
      try {
        const movie = await getMovieById(movieId);
        const trailer = await getTrailer(movieId);

        !trailer ? setTrailerUrl(null) : setTrailerUrl(trailer.key);
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
    <Container>
      {loader && <Loader />}
      <GoBackBtn path={goBackPath} />

      {loader ? (
        <InfoSkeleton />
      ) : (
        movieInfo && <MovieInfo movie={movieInfo} trailer={trailerUrl} />
      )}
      <AdLinksWrap>
        <AdLink to="cast">Cast</AdLink>
        <AdLink to="reviews">Reviews</AdLink>
      </AdLinksWrap>
      <ScrollUpBtn />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
