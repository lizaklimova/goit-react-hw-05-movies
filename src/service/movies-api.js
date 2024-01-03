import axios from 'axios';

const KEY = 'f476b9bc935263fa6ef7277f68b8ae03';
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: KEY,
};

export const getTrending = async () => {
  const { data } = await axios.get('/3/trending/movie/week');

  return data.results;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/3/movie/${id}`);

  return data;
};

export const getMoviesBySearch = async (query, page) => {
  const { data } = await axios.get(
    `/3/search/movie?query=${query}&page=${page}`
  );

  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(`/3/movie/${id}/credits`);

  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);

  return data;
};

export const getTrailer = async id => {
  const { data } = await axios.get(`3/movie/${id}/videos`);

  return data.results.filter(v => v.name === 'Official Trailer')[0];
};
