import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        {/* Conteúdo principal da aplicação */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
