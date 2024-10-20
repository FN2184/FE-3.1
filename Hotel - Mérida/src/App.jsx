import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Rooms from './pages/Rooms/Rooms';
import DeluxeRoom from './pages/Rooms/DeluxeRoom';
import DoubleRoom from './pages/Rooms/DoubleRoom';
import StandardRoom from './pages/Rooms/StandardRoom';
import Services from './pages/Services/Services';
import RestaurantService from './pages/Services/RestaurantService';
import SpaService from './pages/Services/SpaService';
import GymService from './pages/Services/GymService';
import NavBar from './components/NavBar';
import About from './pages/About';
import Reservation from './components/Reservation';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/deluxe" element={<DeluxeRoom />} />
        <Route path="/rooms/double" element={<DoubleRoom />} />
        <Route path="/rooms/standard" element={<StandardRoom />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/restaurant" element={<RestaurantService />} />
        <Route path="/services/spa" element={<SpaService />} />
        <Route path="/services/gym" element={<GymService />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
