import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import actorImage from 'assets/images/default_cast.png';
import { getCast } from 'service/movies-api';
import notification from 'helpers/notification';
import smoothScroll from 'helpers/smoothScroll';
import Loader from 'components/Loader';
import { Container } from 'components/App/App.styled';
import {
  CastWrapper,
  CastList,
  CastItem,
  CastImgWrap,
  CastName,
  CastCharacter,
  NoCastMsg,
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
    <CastWrapper name="castList">
      <Container>
        {loader && <Loader />}
        {cast.length > 0 ? (
          <CastList>
            {cast.slice(0, 9).map(({ id, name, character, profile_path }) => (
              <CastItem key={id}>
                <CastImgWrap
                  $actor={showDefaultImage(profile_path, actorImage)}
                ></CastImgWrap>
                <CastName>{name}</CastName>
                <CastCharacter>{character}</CastCharacter>
              </CastItem>
            ))}
          </CastList>
        ) : (
          <NoCastMsg>No information regarding this movie's cast</NoCastMsg>
        )}
      </Container>
    </CastWrapper>
  );
};

export default Cast;
