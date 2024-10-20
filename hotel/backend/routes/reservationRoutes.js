const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Función para enviar correo de confirmación
const sendReservationEmail = async (reservationDetails) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: reservationDetails.email,
        subject: 'Confirmación de Reserva',
        text: `Estimado/a ${reservationDetails.name}, tu reserva para el día ${reservationDetails.date} ha sido confirmada.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return false;
    }
};

// Ruta para recibir la reserva
router.post('/', async (req, res) => {
    const { name, email, date } = req.body;

    if (!name || !email || !date) {
        return res.status(400).json({ success: false, message: 'Datos incompletos.' });
    }

    try {
        const emailSent = await sendReservationEmail({ name, email, date });

        if (emailSent) {
            return res.status(200).json({ success: true, message: 'Reserva confirmada y correo enviado.' });
        } else {
            return res.status(500).json({ success: false, message: 'Error al enviar el correo de confirmación.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error al procesar la reserva.', error });
    }
});

module.exports = router;
