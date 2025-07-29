import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-logo">
          <Link to="/">QazaqTour</Link>
        </li>
        <li><Link to="/tours">Туры</Link></li>
        <li><Link to="/attractions">Достопримечательности</Link></li>
        <li><Link to="/blogpage">Блог</Link></li>
        <li><Link to="/booking">Бронирование</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

