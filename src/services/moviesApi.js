import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const key = '1dcd63bf4efaa90945eac0f73ad840fe';
const trendingURL = '/trending/movie/day';

export const fetchTrendingMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3${trendingURL}?api_key=${key}`)
    .then(response => response.data);
};

export const fetchMovies = searchQuery => {
  return axios
    .get(
      `${baseUrl}search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1`,
    )
    .then(response => response.data.results);
};

export const fetchMoviesWithId = movieId => {
  return axios
    .get(`${baseUrl}movie/${movieId}?api_key=${key}&language=en-US`)
    .then(response => response.data);
};

export const fetchCast = movieId => {
  return axios
    .get(`${baseUrl}movie/${movieId}/credits?api_key=${key}`)
    .then(response => response.data.cast);
};

export const fetchReviews = movieId => {
  return axios
    .get(`${baseUrl}movie/${movieId}/reviews?api_key=${key}`)
    .then(response => response.data.results);
};
