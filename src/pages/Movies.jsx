import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { getMoviesBySearch } from 'service/movies-api';

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
          Notify.info(`Sorry, no movies found on query ${queryForSearch}`);

        return results;
      } catch ({ message }) {
        Notify.info(message);
      } finally {
        setLoader(false);
      }
    };
    fetchMoviesBySearch();
  }, [searchParams]);

  return (
    <div>
      {loader && <Loader />}
      <SearchMovies search={handleSearch} />
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </div>
  );
};

export default Movies;
