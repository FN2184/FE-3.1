import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white">
      <nav className="flex justify-between items-center">
        <h1>Hotel Venezuela</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/rooms">Habitaciones</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/reservation">Reservación</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
