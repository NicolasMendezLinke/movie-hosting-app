// src/pages/RankingPage.jsx
import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchTopRatedMovies } from '../api/tmdb';

const RankingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies().then((data) => {
      // Ordenar os filmes por nota, caso não estejam ordenados
      const sortedMovies = data.sort((a, b) => b.vote_average - a.vote_average);
      setMovies(sortedMovies);
    });
  }, []);

  return (
    <div className="ranking-page">
      <h1>Ranking de Filmes</h1>
      <MovieList movies={movies} showRank={true} infoType="vote_average" />
    </div>
  );
};

export default RankingPage;
