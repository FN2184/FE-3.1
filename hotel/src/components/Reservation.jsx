import axios from 'axios';
import React, { useState } from 'react';

const Reservation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar que la página se recargue
        setMessage('');
        setError(null);

        // Validar si los campos están llenos antes de enviar la solicitud
        if (!name || !email || !date) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setLoading(true); // Mostrar el estado de carga

        try {
            // Realizar la solicitud POST al servidor con axios
            const response = await axios.post('http://localhost:5000/api/reservations', {
                name,   // Nombre del cliente
                email,  // Correo electrónico
                date    // Fecha de la reserva
            });

            if (response.status === 200 && response.data.success) {
                setMessage('¡Reserva realizada con éxito! Te hemos enviado un correo de confirmación.');
            } else {
                setMessage('Error al realizar la reserva. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            // Capturar el mensaje de error más detallado
            setError(error.response ? error.response.data.message : 'Error desconocido');
            setMessage('Error al realizar la reserva. Por favor, intenta nuevamente.');
        } finally {
            setLoading(false); // Finalizar el estado de carga después de la solicitud
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nombre" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Correo electrónico" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
            />
            <button type="submit" disabled={loading}>Reservar</button>
            {message && <p>{message}</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    );
};

export default Reservation;