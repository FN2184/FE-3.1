import React from 'react';
import restaurantImage from '../../assets/restaurant.jpg';
import '../../styles/Room.css'; // Ruta correcta al archivo CSS

function RestaurantService() {
    return (
        <div className="container">
            <h1>Restaurante</h1>
            <p>Disfruta de una experiencia gastronómica única con una selección de los mejores platos locales e internacionales.</p>
            <p>Horario: 7:00 AM - 10:00 PM</p>
            <img src={restaurantImage} alt="Restaurante" className="room-image" />
        </div>
    );
}

export default RestaurantService;
