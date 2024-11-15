import React, { useState } from 'react';
import '../styles/Header.css';

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
          <a href="#ranking">Ranking de Filmes</a>
          <a href="#catalog">Catálogo</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
