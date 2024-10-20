// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();

// Aquí iría la lógica de base de datos y reserva
router.post('/', (req, res) => {
  const { name, email, roomType, checkIn, checkOut } = req.body;

  // Validar los campos requeridos
  if (!name || !email || !roomType || !checkIn || !checkOut) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }

  // Aquí se puede agregar la lógica para almacenar la reserva en la base de datos
  // Simulación de respuesta exitosa
  return res.status(200).json({ success: true, message: 'Reserva realizada con éxito' });
});

module.exports = router;
