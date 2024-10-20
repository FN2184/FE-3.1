import React from 'react';
import { Link } from 'react-router-dom';

function Rooms() {
    return (
        <div className="container">
            <h1>Nuestras Habitaciones</h1>
            <p>Elige el tipo de habitación que más te guste:</p>
            <ul>
                <li><Link to="/rooms/deluxe">Habitación Deluxe</Link></li>
                <li><Link to="/rooms/double">Habitación Doble</Link></li>
                <li><Link to="/rooms/standard">Habitación Estándar</Link></li>
            </ul>
        </div>
    );
}

export default Rooms;
