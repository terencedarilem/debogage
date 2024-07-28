import React from 'react';
import './Header.css'; // Importer les styles pour le Header

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
