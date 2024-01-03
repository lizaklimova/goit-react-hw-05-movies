import { useState, useEffect } from 'react';
import { getTrending } from 'service/movies-api';
import Loader from 'components/Loader';
import Slider from 'components/Slider';
import notification from 'helpers/notification';
import ScrollUpBtn from 'components/ScrollUpBtn';
import { Container } from 'components/App/App.styled';
import { MainTitleWrap, TitleIcon, MainTitle } from 'components/App/App.styled';
import { List } from 'components/App/App.styled';
import Skeleton from 'components/Skeleton/MoviesListSkeleton';
import MovieItem from 'components/MovieItem/MovieItem';
import SliderSkeleton from 'components/Skeleton/SliderSkeleton';

const Home = () => {
  const [trendings, setTrendings] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    const fetchTrendings = async () => {
      try {
        const response = await getTrending();

        setTrendings(response);
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
      }
    };
    fetchTrendings();
  }, []);

  return (
    <>
      {loader && <Loader />}

      {loader ? <SliderSkeleton /> : <Slider trendings={trendings} />}

      <Container>
        <MainTitleWrap>
          <TitleIcon />
          <MainTitle>Top-20 trending movies</MainTitle>
        </MainTitleWrap>

        <div name="moviesList">
          <Container>
            <List>
              {loader
                ? [...new Array(20)].map((_, i) => <Skeleton key={i} />)
                : trendings.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                  ))}
            </List>
          </Container>
        </div>
      </Container>

      <ScrollUpBtn />
    </>
  );
};

export default Home;
