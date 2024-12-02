import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

jest.mock('../api/tmdb', () => ({
  fetchRecentMovies: jest.fn(() =>
    Promise.resolve([
      { id: 1, title: 'Filme A', release_date: '2024-01-01', poster_path: '/posterA.jpg' },
      { id: 2, title: 'Filme B', release_date: '2024-02-01', poster_path: '/posterB.jpg' },
    ])
  ),
}));

test('deve renderizar filmes recentes com data de lançamento', async () => {
  render(<HomePage />);

  expect(await screen.findByText(/Filme A/i)).toBeInTheDocument();
  expect(await screen.findByText(/Lançamento: 2024-01-01/i)).toBeInTheDocument();
  expect(await screen.findByText(/Filme B/i)).toBeInTheDocument();
});
