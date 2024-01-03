import { useState, useEffect } from 'react';
import { getTrending } from 'service/movies-api';
import Loader from 'components/Loader';
import Slider from 'components/Slider';
import MoviesList from 'components/MoviesList';
import notification from 'helpers/notification';
import ScrollUpBtn from 'components/ScrollUpBtn';
import { Container } from 'components/App/App.styled';
import { MainTitleWrap, TitleIcon, MainTitle } from 'components/App/App.styled';

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
      {trendings.length > 0 && <Slider trendings={trendings} />}
      <Container>
        <MainTitleWrap>
          <TitleIcon />
          <MainTitle>Top-20 trending movies</MainTitle>
        </MainTitleWrap>
      </Container>
      {trendings.length > 0 && <MoviesList movies={trendings} />}
      <ScrollUpBtn />
    </>
  );
};

export default Home;
