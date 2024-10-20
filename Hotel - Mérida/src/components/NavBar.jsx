import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li><a href="/">Inicio</a></li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Habitaciones</a>
          <ul className="dropdown-content">
            <li><a href="/rooms/deluxe">Deluxe</a></li>
            <li><a href="/rooms/double">Doble</a></li>
            <li><a href="/rooms/standard">Estándar</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Servicios</a>
          <ul className="dropdown-content">
            <li><a href="/services/restaurant">Restaurante</a></li>
            <li><a href="/services/spa">Spa</a></li>
            <li><a href="/services/gym">Gimnasio</a></li>
          </ul>
        </li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/reservation">Reservaciones</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
