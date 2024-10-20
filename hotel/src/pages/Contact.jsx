import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario al backend
    console.log('Datos enviados:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Contact;
