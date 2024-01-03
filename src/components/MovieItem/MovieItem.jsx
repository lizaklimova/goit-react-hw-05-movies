import defaultPoster from 'assets/images/default_poster.jpeg';
import { CiCalendar } from 'react-icons/ci';
import makePercentage from 'helpers/makePercentage';
import determineReviewColor from 'helpers/determineReviewColor';
import {
  Item,
  Poster,
  MovieLink,
  MovieTitle,
  VoteAvr,
  MovieRelease,
} from './MovieItem.styled';

const MovieItem = ({
  movie: { id, original_title, poster_path, vote_average, release_date },
  location,
}) => {
  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w1280${poster_path}`
              : defaultPoster
          }
          alt={original_title}
        />
        <VoteAvr
          style={{
            backgroundColor: determineReviewColor(makePercentage(vote_average)),
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
  );
};

export default MovieItem;
