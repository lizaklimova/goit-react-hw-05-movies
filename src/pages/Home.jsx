import { useState, useEffect } from 'react';
import { getTrending } from 'service/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import notification from 'helpers/notification';

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
      {trendings.length > 0 && <MoviesList movies={trendings} />}
    </>
  );
};

export default Home;
