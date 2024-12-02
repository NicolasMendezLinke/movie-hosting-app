import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProtectedNavigation = (path) => {
    if (user) {
      navigate(path);
    } else {
      alert('Você precisa fazer login para acessar essa página!');
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    alert('Você saiu da sua conta.');
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Filmes Dahora!</h1>
        <button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        <nav className={isMobileMenuOpen ? 'nav-mobile' : 'nav'}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <button onClick={() => handleProtectedNavigation('/ranking')}>
            Ranking
          </button>
          <button onClick={() => handleProtectedNavigation('/profile')}>
            Perfil
          </button>
          {!user ? (
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </Link>
          ) : (
            <button onClick={handleLogout}>Sair</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
