const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const authenticateToken = (req, res, next) => {
  // Obtener el token desde el encabezado Authorization
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado, no se proporcionó un token' });
  }

  try {
    // Verificar el token usando la clave secreta
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Guardar la información del usuario en la solicitud
    next(); // Continuar al siguiente middleware o controlador
  } catch (err) {
    res.status(400).json({ message: 'Token inválido' });
  }
};

module.exports = authenticateToken;
