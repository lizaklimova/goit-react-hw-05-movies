import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'service/movies-api';
import smoothScroll from 'helpers/smoothScroll';
import notification from 'helpers/notification';
import Loader from 'components/Loader';
import SearchMovies from 'components/SearchMovies';
import PaginationList from 'components/PaginationList';
import ScrollUpBtn from 'components/ScrollUpBtn';
import Skeleton from 'components/Skeleton/MoviesListSkeleton';
import MovieItem from 'components/MovieItem';
import { Container } from 'components/App/App.styled';
import { List } from 'components/App/App.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pg, setPg] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const handleSearch = value => {
    setPg(1);
    setSearchParams({ query: value, page: pg });
  };

  useEffect(() => {
    const queryForSearch = searchParams.get('query') || '';
    if (!queryForSearch) return;
    setLoader(true);

    const fetchMoviesBySearch = async () => {
      try {
        const { page, results, total_pages } = await getMoviesBySearch(
          queryForSearch,
          pg
        );

        setMovies(results);
        setPg(page);
        setPageQty(total_pages);
        setSearchParams({ query: queryForSearch, page: pg });

        if (!results.length) {
          setSearchParams({});
          return notification(
            `Sorry, no movies found on query ${queryForSearch}`
          );
        }

        return results;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
        smoothScroll('moviesList');
      }
    };
    fetchMoviesBySearch();
  }, [searchParams, pg, setSearchParams]);

  return (
    <>
      {loader && <Loader />}
      <SearchMovies search={handleSearch} />

      {pageQty > 1 && (
        <PaginationList pageQty={pageQty} pg={pg} onChange={setPg} />
      )}

      <Container>
        <div name="moviesList">
          <List>
            {loader
              ? [...new Array(20)].map((_, i) => <Skeleton key={i} />)
              : movies.map(movie => (
                  <MovieItem key={movie.id} movie={movie} location={location} />
                ))}
          </List>
        </div>
      </Container>
      <ScrollUpBtn />
    </>
  );
};

export default Movies;
