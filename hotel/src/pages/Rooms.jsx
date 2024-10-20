import React from 'react';

function Rooms() {
  const rooms = [
    {
      id: 1,
      name: 'Habitación Deluxe',
      description: 'Amplia habitación con vistas al mar, cama king size y jacuzzi privado.',
      price: '$120 / noche',
    },
    {
      id: 2,
      name: 'Habitación Estándar',
      description: 'Cómoda habitación con cama doble y vista a la ciudad.',
      price: '$80 / noche',
    },
    {
      id: 3,
      name: 'Suite Ejecutiva',
      description: 'Suite de lujo con sala de estar, minibar y servicios exclusivos.',
      price: '$150 / noche',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Nuestras Habitaciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
            <p className="text-gray-700 mb-2">{room.description}</p>
            <p className="text-blue-600 font-bold">{room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
