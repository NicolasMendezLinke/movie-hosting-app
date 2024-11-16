import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de que está importando Link corretamente
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </button>
        <h1 className="header__title">Filmes Dahora!</h1>
        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <Link to="/">Home</Link> {/* Botão para a página inicial */}
          <Link to="/ranking">Ranking de Filmes</Link> {/* Botão para a página de ranking */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
