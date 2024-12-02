import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchRecentMovies } from '../api/tmdb';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchRecentMovies().then(setMovies);
  }, []);

  return (
    <div className="home-page">
      <h1>Filmes Recentes</h1>
      <MovieList movies={movies} infoType="release_date" />
    </div>
  );
};

export default HomePage;
