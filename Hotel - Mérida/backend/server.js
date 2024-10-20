require('dotenv').config();
const express = require('express');
const cors = require('cors');
const testimonialRoutes = require('./routes/testimonialRoutes'); 
const blogRoutes = require('./routes/blogRoutes'); 
const authRoutes = require('./routes/authRoutes'); 
const reservationRoutes = require('./routes/reservationRoutes'); 
const { sendMail } = require('./utils/mail');  // Importamos la función de mail.js para correos generales
const app = express(); // Inicializar la app de Express

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/reservations', reservationRoutes);
app.use('/api/testimonios', testimonialRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/auth', authRoutes);

// Ruta para enviar correos generales
app.post('/api/send-email', async (req, res) => {
  const { email, subject, text } = req.body;

  try {
    console.log('Enviando correo general...');
    const messageId = await sendMail(email, subject, text);
    res.status(200).json({ message: 'Correo enviado correctamente', messageId });
  } catch (error) {
    console.error('Error al enviar el correo general:', error);
    res.status(500).json({ message: 'Error al enviar el correo', error });
  }
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
