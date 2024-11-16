// src/components/MovieList.jsx
import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, showRank = false, infoType = 'release_date' }) => (
  <div className="movie-list">
    {movies.map((movie, index) => (
      <div key={movie.id} className="movie-item">
        {showRank && (
          <div className="movie-rank">
            <span className="rank-number">{index + 1}.</span>
          </div>
        )}
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        {infoType === 'release_date' && <p>Lançamento: {movie.release_date}</p>}
        {infoType === 'vote_average' && <p className="movie-score">Nota: {movie.vote_average.toFixed(1)}</p>}
      </div>
    ))}
  </div>
);

export default MovieList;
