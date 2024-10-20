import React from 'react';
import gymImage from '../../assets/gym.jpg';
import '../../styles/Room.css'; // Ruta correcta al archivo CSS

function GymService() {
    return (
        <div className="container">
            <h1>Gimnasio</h1>
            <p>Mantente en forma durante tu estancia en nuestro gimnasio totalmente equipado.</p>
            <p>Horario: 6:00 AM - 9:00 PM</p>
            <img src={gymImage} alt="Gimnasio" className="room-image" />
        </div>
    );
}

export default GymService;
