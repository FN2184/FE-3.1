const { sendMail } = require('../utils/mail');

const createReservation = async (req, res) => {
  const { name, email, roomType, checkIn, checkOut } = req.body;

  // Validar los campos obligatorios
  if (!name || !email || !roomType || !checkIn || !checkOut) {
    return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
  }

  try {
    console.log('Procesando reserva...');

    // Aquí podrías realizar cualquier otra lógica necesaria, como loguear la reserva.

    // Crear el contenido del correo de confirmación
    const emailContent = `
      Gracias por su reserva en Hotel Venezuela.
      Detalles de la reserva:
      Nombre: ${name}
      Tipo de Habitación: ${roomType}
      Check-In: ${checkIn}
      Check-Out: ${checkOut}
    `;

    // Enviar el correo de confirmación
    await sendMail(email, 'Confirmación de Reserva', emailContent);

    res.status(200).json({ success: true, message: 'Reserva creada y correo enviado' });
  } catch (error) {
    console.error('Error al procesar la reserva o enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al procesar la reserva o enviar el correo' });
  }
};

module.exports = { createReservation };
