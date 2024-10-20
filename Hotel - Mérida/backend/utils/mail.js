const nodemailer = require('nodemailer');

console.log('MAILTRAP_USER:', process.env.MAILTRAP_USER);
console.log('MAILTRAP_PASS:', process.env.MAILTRAP_PASS);

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,  // Variable de entorno
    pass: process.env.MAILTRAP_PASS,  // Variable de entorno
  },
  debug: true,   // Muestra logs detallados en la consola
  logger: true   // Activa logs completos para depuración
});

// Función para enviar correos
const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: 'no-reply@hotelvenezuela.com',  // Cambia esto según tus necesidades
    to,
    subject,
    text
  };

  try {
    console.log('Preparando para enviar correo...');
    await transporter.verify();  // Verificar conexión con Mailtrap
    console.log('Conexión con el servidor SMTP verificada');

    console.log('Enviando correo...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito:', info.messageId);  // Mostrar el ID del mensaje enviado
    return info.messageId;  // Retornar el ID del mensaje enviado
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
  }
};

module.exports = { sendMail };
