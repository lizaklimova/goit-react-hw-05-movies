import defaultPoster from '../../images/default_poster.jpg';
import { Link } from 'react-router-dom';
import { List, Item, MovieLink } from '../MoviesList/MoviesList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path }) => (
        <Item key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200${poster_path}`
                  : defaultPoster
              }
              alt={original_title}
            />
            {original_title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default MoviesList;
