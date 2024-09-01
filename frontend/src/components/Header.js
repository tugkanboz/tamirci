import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/technicians">Teknisyenler</Link></li>
          <li><Link to="/services">Hizmetler</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;