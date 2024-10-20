import React from 'react';
import deluxeImage from '../../assets/deluxe-room.jpg';
import '../../styles/Room.css'; // Ruta correcta al archivo CSS

function DeluxeRoom() {
    return (
        <div className="container">
            <h1>Habitación Deluxe</h1>
            <p>Disfruta de una estancia lujosa con las mejores vistas a las montañas.</p>
            <p>Incluye: Cama King Size, WiFi, Aire acondicionado, TV por cable.</p>
            <p>Precio: $200 por noche.</p>
            <img src={deluxeImage} alt="Deluxe Room" className="room-image" />
        </div>
    );
}

export default DeluxeRoom;
