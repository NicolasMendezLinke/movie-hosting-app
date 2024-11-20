import React from 'react';
import { render, screen } from '@testing-library/react';
import RankingPage from './RankingPage';

jest.mock('../api/tmdb', () => ({
  fetchTopRatedMovies: jest.fn(() =>
    Promise.resolve([
      { id: 1, title: 'Filme A', vote_average: 8.5, poster_path: '/posterA.jpg' },
      { id: 2, title: 'Filme B', vote_average: 7.9, poster_path: '/posterB.jpg' },
    ])
  ),
}));

test('deve renderizar filmes com ranking e notas', async () => {
  render(<RankingPage />);

  expect(await screen.findByText(/1\. Filme A/i)).toBeInTheDocument();
  expect(await screen.findByText(/Nota: 8.5/i)).toBeInTheDocument();
  expect(await screen.findByText(/2\. Filme B/i)).toBeInTheDocument();
  expect(await screen.findByText(/Nota: 7.9/i)).toBeInTheDocument();
});
