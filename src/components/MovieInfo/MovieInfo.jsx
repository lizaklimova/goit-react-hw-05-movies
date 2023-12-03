import defaultPoster from '../../images/default_poster.jpeg';

const MovieInfo = ({
  movie: { original_title, poster_path, vote_average, overview, genres },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const posterSrc = poster_path ? posterUrl : defaultPoster;

  return (
    <>
      <img src={posterSrc} alt="original_title" />

      <h3>{original_title}</h3>
      <p>User score: {Math.ceil(Number(vote_average) * 10)}%</p>
      <h4>Overview</h4>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieInfo;
