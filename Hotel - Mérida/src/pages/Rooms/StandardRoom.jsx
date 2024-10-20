import React from 'react';
import standardRoomImage from '../../assets/standard-room.jpg';
import '../../styles/Room.css'; // Ruta correcta al archivo CSS

function StandardRoom() {
    return (
        <div className="container">
            <h1>Habitación Estándar</h1>
            <p>Una opción cómoda y accesible para tu estancia.</p>
            <p>Incluye: Cama Individual, WiFi, TV por cable.</p>
            <p>Precio: $100 por noche.</p>
            <img src={standardRoomImage} alt="Standard Room" className="room-image" />
        </div>
    );
}

export default StandardRoom;
