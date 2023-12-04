import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getCast } from 'service/movies-api';
import actorImage from '../../images/default_cast.png';
import notification from 'helpers/notification';
import { Container } from 'components/App/App.styled';
import smoothScroll from 'helpers/smoothScroll';
import {
  CastList,
  CastItem,
  CastImgWrap,
  CastName,
  CastCharacter,
} from './Cast.styled';

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
      <CastList name={'castList'}>
        {cast.map(({ id, name, character, profile_path }) => (
          <CastItem key={id}>
            <CastImgWrap
              actor={showDefaultImage(profile_path, actorImage)}
            ></CastImgWrap>
            <CastName>{name}</CastName>
            <CastCharacter>{character}</CastCharacter>
          </CastItem>
        ))}
      </CastList>
    </Container>
  );
};

export default Cast;
