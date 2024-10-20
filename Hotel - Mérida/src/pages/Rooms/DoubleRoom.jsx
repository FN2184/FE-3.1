import React from 'react';
import doubleRoomImage from '../../assets/double-room.jpg';
import '../../styles/Room.css'; // Ruta correcta al archivo CSS

function DoubleRoom() {
    return (
        <div className="container">
            <h1>Habitación Doble</h1>
            <p>Perfecta para dos personas con todas las comodidades que necesitas.</p>
            <p>Incluye: Cama Doble, WiFi, Aire acondicionado, TV por cable.</p>
            <p>Precio: $150 por noche.</p>
            <img src={doubleRoomImage} alt="Double Room" className="room-image" />
        </div>
    );
}

export default DoubleRoom;
