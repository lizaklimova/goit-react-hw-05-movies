import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'service/movies-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [movies, setMovies] = useState([]);

  const handleSearch = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const queryForSearch = searchParams.get('query') || '';
    if (!queryForSearch) return;

    const fetchMoviesBySearch = async () => {
      try {
        const moviesData = await getMoviesBySearch(queryForSearch);

        setMovies(moviesData.results);
        return moviesData;
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesBySearch();
  }, [searchParams]);

  return (
    <div>
      Movies
      <SearchMovies search={handleSearch} />
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </div>
  );
};

export default Movies;
