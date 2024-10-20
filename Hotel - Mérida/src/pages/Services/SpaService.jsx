import React from 'react';
import spaImage from '../../assets/spa.jpg';
import '../../styles/Room.css'; // Ruta correcta al archivo CSS

function SpaService() {
    return (
        <div className="container">
            <h1>Spa</h1>
            <p>Relájate y rejuvenece con nuestros tratamientos de spa de clase mundial.</p>
            <p>Horario: 9:00 AM - 8:00 PM</p>
            <img src={spaImage} alt="Spa" className="room-image" />
        </div>
    );
}

export default SpaService;
