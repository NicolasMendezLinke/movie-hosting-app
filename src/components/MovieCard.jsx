import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, description, imageUrl }) => (
  <div className="movie-card">
    <img src={imageUrl} alt={title} className="movie-card__image" />
    <div className="movie-card__content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default MovieCard;
