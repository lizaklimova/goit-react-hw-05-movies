import defaultPoster from 'assets/images/default_poster.jpeg';
import makePercentage from 'helpers/makePercentage';
import determineReviewColor from 'helpers/determineReviewColor';
import { Container } from 'components/App/App.styled';
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
  GenresList,
  TrailerWrap,
} from './MovieInfo.styled';

const MovieInfo = ({
  movie: {
    backdrop_path,
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
  },
  trailer,
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const posterSrc = poster_path ? posterUrl : defaultPoster;

  const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const backdropSrc = backdrop_path ? backdropUrl : defaultPoster;

  return (
    <Container>
      <MovieInfoContainer>
        <InfoSectionWrapper $backdropSrc={backdropSrc}>
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
              <p>{overview}</p>

              {genres.length > 0 && (
                <>
                  <SubTitle>Genres</SubTitle>
                  <GenresList>
                    {genres.map((genre, i) => {
                      const genresList =
                        genres.length - 1 === i
                          ? genre.name
                          : genre.name + ' ● ';
                      return <p key={genre.id}>{genresList}</p>;
                    })}
                  </GenresList>
                </>
              )}
            </MovieDescription>
          </Info>
        </InfoSectionWrapper>
      </MovieInfoContainer>
      {trailer && (
        <TrailerWrap>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailer}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
            allowFullScreen
          ></iframe>
        </TrailerWrap>
      )}
    </Container>
  );
};

export default MovieInfo;
