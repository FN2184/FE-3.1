const nodemailer = require('nodemailer');
const Reservation = require('../models/Reservation');

const createReservation = async (req, res) => {
  const { name, email, roomType, checkIn, checkOut } = req.body;

  try {
    const reservation = new Reservation({ name, email, roomType, checkIn, checkOut });
    await reservation.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmación de Reserva',
      text: `Gracias por su reserva en Hotel Venezuela. Detalles de la reserva:...`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Reserva creada y correo enviado');
  } catch (error) {
    res.status(500).send('Error al crear la reserva');
  }
};

module.exports = { createReservation };
