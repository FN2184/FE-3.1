import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Hotel Venezuela
        </motion.h1>
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/rooms">Habitaciones</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/reservation">Reservaciones</Link></li>
        </ul>
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        {isMenuOpen && (
          <motion.ul
            className="absolute top-16 left-0 w-full bg-purple-700 text-white flex flex-col items-center space-y-4 py-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/rooms">Habitaciones</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/reservation">Reservaciones</Link></li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
