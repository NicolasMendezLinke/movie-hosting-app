import React from 'react';
import MovieCard from '../components/MovieCard';

const movies = [
  { title: 'Inception', description: 'A mind-bending thriller', imageUrl: '/images/inception.jpg' },
  { title: 'The Matrix', description: 'A sci-fi classic', imageUrl: '/images/matrix.jpg' },
];

const HomePage = () => (
  <div className="home-page">
    <h1>Featured Movies</h1>
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  </div>
);

export default HomePage;
