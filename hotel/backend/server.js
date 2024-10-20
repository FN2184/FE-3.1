const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express(); // Inicializar la app de Express

// Middleware
app.use(cors());
app.use(express.json()); // Middleware para manejar JSON en las solicitudes

// Ruta para manejar las reservas
app.post('/api/reservations', (req, res) => {
  // Mostrar los datos recibidos en la consola del servidor
  console.log('Datos recibidos en el backend:', req.body);

  const { name, email, roomType, checkIn, checkOut } = req.body;

  // Validar que los campos estén presentes
  if (!name || !email || !roomType || !checkIn || !checkOut) {
    return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
  }

  // Aquí puedes agregar lógica adicional para procesar la reserva
  // Como guardar en una base de datos o enviar correos

  // Enviar respuesta de éxito
  return res.status(200).json({ success: true, message: 'Reserva realizada correctamente' });
});

// Configuración de nodemailer para enviar correos generales
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Ruta para enviar correos generales
app.post('/api/send-email', async (req, res) => {
  const { email, subject, text } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el correo', error });
  }
});

// Escuchar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
