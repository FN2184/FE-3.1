const express = require('express');
const { loginUser } = require('../controllers/authController'); // Ajustar ruta
const authenticateToken = require('../middleware/authenticateToken'); // Importar middleware

const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta protegida por JWT
router.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Acceso autorizado', user: req.user });
});

module.exports = router;
