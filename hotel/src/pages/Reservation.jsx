import { useState } from 'react';
import axios from 'axios';

function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', roomType: '', checkIn: '', checkOut: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reserve', form);
      alert(response.data);
    } catch (error) {
      console.error(error);
      alert('Error al realizar la reserva');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <input name="name" placeholder="Nombre" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="roomType" placeholder="Tipo de Habitación" onChange={handleChange} />
      <input name="checkIn" placeholder="Fecha de Check-In" type="date" onChange={handleChange} />
      <input name="checkOut" placeholder="Fecha de Check-Out" type="date" onChange={handleChange} />
      <button type="submit">Reservar</button>
    </form>
  );
}

export default Reservation;
