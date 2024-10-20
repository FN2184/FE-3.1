import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="container">
            <h1>Servicios del Hotel</h1>
            <p>Explora los servicios que ofrecemos para hacer tu estadía más placentera:</p>
            <ul>
                <li><Link to="/services/restaurant">Restaurante</Link></li>
                <li><Link to="/services/spa">Spa</Link></li>
                <li><Link to="/services/gym">Gimnasio</Link></li>
            </ul>
        </div>
    );
}

export default Services;
