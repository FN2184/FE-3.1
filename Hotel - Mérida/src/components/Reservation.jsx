import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Reservation.css';


function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: '',
    checkIn: '',
    checkOut: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validación de email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validar que la fecha de check-in sea antes que check-out
  const validateDates = () => {
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    return checkInDate < checkOutDate;
  };

  // Validación de campos vacíos
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.roomType || !formData.checkIn || !formData.checkOut) {
      setError('Todos los campos son obligatorios.');
      return false;
    }

    if (!validateEmail(formData.email)) {
      setError('El correo electrónico no tiene un formato válido.');
      return false;
    }

    if (!validateDates()) {
      setError('La fecha de check-in debe ser anterior a la de check-out.');
      return false;
    }

    return true;
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que la página se recargue
    setMessage('');
    setError(null);

    // Validar el formulario antes de enviarlo
    if (!validateForm()) {
      return;
    }

    setLoading(true); // Mostrar el estado de carga

    try {
    const response = await axios.post('http://localhost:5000/api/send-email', formData);

    if (response.status === 200 && response.data.success) {
        setMessage('¡Reserva realizada con éxito! Te hemos enviado un correo de confirmación.');
    } else {
        setMessage('Error al realizar la reserva. Por favor, intenta nuevamente.');
    }
} catch (error) {
    setError(error.response?.data?.message || 'Error desconocido');
    setMessage('Error al realizar la reserva. Por favor, intenta nuevamente.');
} finally {
    setLoading(false);
}

  };

  return (
    <div className="reservation-container">
      <h2 className="text-3xl font-bold mb-6">Reserva tu Habitación</h2>

      {/* Mostrar el mensaje de éxito o error */}
      {message && (
        <div className={`alert ${message.includes('éxito') ? 'alert-success' : 'alert-error'}`}>
          {message}
        </div>
      )}

      {error && <div className="alert alert-error">{error}</div>}

      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Correo electrónico"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Tipo de Habitación</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Selecciona una habitación</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Estándar">Estándar</option>
            <option value="Suite Ejecutiva">Suite Ejecutiva</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Fecha de Check-In</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Fecha de Check-Out</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Botón de reservar */}
        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading ? 'Procesando...' : 'Reservar'}
        </button>
      </form>
    </div>
  );
}

export default Reservation;
