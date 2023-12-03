import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { getMoviesBySearch } from 'service/movies-api';
import notification from 'helpers/notification';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleSearch = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const queryForSearch = searchParams.get('query') || '';
    if (!queryForSearch) return;
    setLoader(true);
    const fetchMoviesBySearch = async () => {
      try {
        const { results } = await getMoviesBySearch(queryForSearch);

        setMovies(results);

        if (!results.length)
          notification(`Sorry, no movies found on query ${queryForSearch}`);

        return results;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
      }
    };
    fetchMoviesBySearch();
  }, [searchParams]);

  return (
    <>
      {loader && <Loader />}
      <SearchMovies search={handleSearch} />
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
