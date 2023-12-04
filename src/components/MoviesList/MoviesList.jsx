import defaultPoster from '../../images/default_poster.jpeg';
import { CiCalendar } from 'react-icons/ci';
import { Container } from 'components/App/App.styled';
import {
  List,
  Item,
  Poster,
  MovieLink,
  MovieTitle,
  VoteAvr,
  MovieRelease,
} from '../MoviesList/MoviesList.styled';
import makePercentage from 'helpers/makePercentage';
import determineReviewColor from 'helpers/determineReviewColor';

const MoviesList = ({ movies, location }) => {
  return (
    <div name={'movieList'}>
      <Container>
        <List>
          {movies.map(
            ({
              id,
              original_title,
              poster_path,
              vote_average,
              release_date,
            }) => (
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
                  <VoteAvr
                    style={{
                      backgroundColor: determineReviewColor(
                        makePercentage(vote_average)
                      ),
                    }}
                  >
                    {makePercentage(vote_average)}%
                  </VoteAvr>
                  <MovieTitle>{original_title}</MovieTitle>
                  {release_date && (
                    <MovieRelease>
                      <CiCalendar />
                      {release_date}
                    </MovieRelease>
                  )}
                </MovieLink>
              </Item>
            )
          )}
        </List>
      </Container>
    </div>
  );
};

export default MoviesList;
