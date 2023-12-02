const { Link } = require('react-router-dom');

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
