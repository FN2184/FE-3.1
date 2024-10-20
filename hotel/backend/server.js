const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Cargar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON en las solicitudes

// Simular una base de datos en memoria
const reservations = [];

// Rutas de autenticación (si las estás usando)
const authRoutes = require('./routes/auth'); // Rutas de autenticación (opcional)
app.use('/api/auth', authRoutes); // Si tienes autenticación

// Ruta básica para probar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando sin MongoDB!');
});

// Endpoint para recibir las reservas
app.post('/api/reserve', async (req, res) => {
  const { name, email, roomType, checkIn, checkOut } = req.body;

  // Simular guardar la reserva en una "base de datos en memoria"
  const newReservation = { name, email, roomType, checkIn, checkOut };
  reservations.push(newReservation); // Añadir la reserva al arreglo

  try {
    // Configurar nodemailer para enviar correos
    const transporter = nodemailer.createTransport({
      service: 'gmail', // O el servicio de correo que utilices
      auth: {
        user: process.env.EMAIL_USER, // Definido en .env
        pass: process.env.EMAIL_PASS, // Definido en .env
      },
    });

    // Configuración del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmación de Reserva - Hotel Venezuela',
      text: `Hola ${name},\n\nGracias por tu reserva en el Hotel Venezuela.\n\nDetalles de la reserva:\n\n- Habitación: ${roomType}\n- Check-In: ${checkIn}\n- Check-Out: ${checkOut}\n\nTe esperamos pronto.`,
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    res.status(200).json('¡Reserva realizada con éxito y correo de confirmación enviado!');
  } catch (error) {
    console.error('Error al realizar la reserva:', error);
    res.status(500).json('Error al realizar la reserva');
  }
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
