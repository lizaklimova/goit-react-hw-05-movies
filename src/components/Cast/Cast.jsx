import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getCast } from 'service/movies-api';
import actorImage from '../../images/default_cast.jpg';
import notification from 'helpers/notification';
import { Container } from 'components/App/App.styled';
import smoothScroll from 'helpers/smoothScroll';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    const fetchCast = async () => {
      try {
        const castData = await getCast(movieId);
        setCast(castData.cast);
        return castData;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);

        smoothScroll('castList');
      }
    };

    fetchCast();
  }, [movieId]);

  const showDefaultImage = (actorSrc, defaultImg) => {
    const actorUrl = `https://image.tmdb.org/t/p/w500${actorSrc}`;
    return actorSrc ? actorUrl : defaultImg;
  };

  return (
    <Container>
      {loader && <Loader />}
      <ul name={'castList'}>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={showDefaultImage(profile_path, actorImage)} alt={name} />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Cast;
