// src/api/tmdb.js
import axios from 'axios';

const API_KEY = '9d46f4d76f1ed93b4023525e4d72999d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchRecentMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: { api_key: API_KEY, language: 'pt-BR' },
  });
  return response.data.results;
};

export const fetchTopRatedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
    params: { api_key: API_KEY, language: 'pt-BR' },
  });
  return response.data.results;
};
