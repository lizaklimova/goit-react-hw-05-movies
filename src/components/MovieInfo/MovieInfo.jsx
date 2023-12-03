import defaultPoster from '../../images/default_poster.jpeg';
import {
  MovieInfoContainer,
  InfoSectionWrapper,
  Info,
  MovieInfoPoster,
  MovieDescription,
  MovieInfoTitle,
  Line,
  ScoreText,
  MovieInfoScore,
  SubTitle,
  OverviewText,
  GenresList,
  Genre,
} from './MovieInfo.styled';
import makePercentage from 'helpers/makePercentage';
import determineReviewColor from 'helpers/determineReviewColor';

const MovieInfo = ({
  movie: {
    backdrop_path,
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
  },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const posterSrc = poster_path ? posterUrl : defaultPoster;

  const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const backdropSrc = backdrop_path ? backdropUrl : defaultPoster;

  return (
    <MovieInfoContainer>
      <InfoSectionWrapper img={backdropSrc}>
        <Info>
          <MovieInfoPoster src={posterSrc} alt="original_title" />
          <MovieDescription>
            <MovieInfoTitle>{original_title}</MovieInfoTitle>
            <Line />
            <ScoreText>
              User score:
              <MovieInfoScore
                color={determineReviewColor(makePercentage(vote_average))}
              >
                {makePercentage(vote_average)}%
              </MovieInfoScore>
            </ScoreText>

            <SubTitle>Overview</SubTitle>
            <OverviewText>{overview}</OverviewText>

            {genres.length > 0 && (
              <>
                <SubTitle>Genres</SubTitle>
                <GenresList>
                  {genres.map(genre => (
                    <Genre key={genre.id}>{genre.name}</Genre>
                  ))}
                </GenresList>
              </>
            )}
          </MovieDescription>
        </Info>
      </InfoSectionWrapper>
    </MovieInfoContainer>
  );
};

export default MovieInfo;
