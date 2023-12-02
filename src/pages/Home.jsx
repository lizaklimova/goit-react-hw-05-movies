import { useState, useEffect } from 'react';
import { getTrending } from 'service/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        const response = await getTrending();
        setTrendings(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrendings();
  }, []);

  return <>{trendings.length > 0 && <MoviesList movies={trendings} />}</>;
};

export default Home;
