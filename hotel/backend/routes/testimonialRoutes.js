const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Ubicación del archivo testimonios.json
const testimonialsFilePath = path.join(__dirname, '../data/testimonios.json');

// Ruta para obtener todos los testimonios
router.get('/', (req, res) => {
  fs.readFile(testimonialsFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de testimonios' });
    }
    const testimonios = JSON.parse(data);
    res.json(testimonios);
  });
});

// Ruta para agregar un nuevo testimonio
router.post('/add', (req, res) => {
  const { nombre, testimonio } = req.body;
  const nuevoTestimonio = {
    id: Date.now(),
    nombre,
    testimonio
  };

  fs.readFile(testimonialsFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de testimonios' });
    }
    const testimonios = JSON.parse(data);
    testimonios.push(nuevoTestimonio);

    fs.writeFile(testimonialsFilePath, JSON.stringify(testimonios, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error al escribir en el archivo de testimonios' });
      }
      res.json({ message: 'Testimonio agregado exitosamente', testimonio: nuevoTestimonio });
    });
  });
});

// Ruta para eliminar un testimonio por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(testimonialsFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de testimonios' });
    }
    let testimonios = JSON.parse(data);
    testimonios = testimonios.filter((testimonio) => testimonio.id !== parseInt(id));

    fs.writeFile(testimonialsFilePath, JSON.stringify(testimonios, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error al escribir en el archivo de testimonios' });
      }
      res.json({ message: 'Testimonio eliminado exitosamente' });
    });
  });
});

module.exports = router;
