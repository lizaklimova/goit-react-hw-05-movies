import defaultPoster from '../../images/default_poster.jpeg';
import { Container } from 'components/App/App.styled';
import {
  List,
  Item,
  Poster,
  MovieLink,
  MovieTitle,
  VoteAvr,
} from '../MoviesList/MoviesList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <Container>
      <List>
        {movies.map(({ id, original_title, poster_path, vote_average }) => (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <Poster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200${poster_path}`
                    : defaultPoster
                }
                alt={original_title}
              />
              <VoteAvr> {Math.ceil(Number(vote_average) * 10)}%</VoteAvr>
              <MovieTitle>{original_title}</MovieTitle>
            </MovieLink>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default MoviesList;
