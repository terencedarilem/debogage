import React from 'react';
import './Footer.css'; // Importer les styles pour le Footer

function Footer({ year }) {
  return (
    <footer>
      <p>&copy; {year}</p>
    </footer>
  );
}

export default Footer;
