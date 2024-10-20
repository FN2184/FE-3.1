const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Ubicación del archivo blog.json
const blogFilePath = path.join(__dirname, '../data/blog.json');

// Ruta para obtener todos los artículos del blog
router.get('/', (req, res) => {
  fs.readFile(blogFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo del blog' });
    }
    const blogs = JSON.parse(data);
    res.json(blogs);
  });
});

// Ruta para agregar un nuevo artículo al blog
router.post('/add', (req, res) => {
  const { titulo, contenido, autor } = req.body;
  const nuevoArticulo = {
    id: Date.now(),
    titulo,
    contenido,
    autor,
    fecha: new Date().toISOString().split('T')[0] // Fecha actual
  };

  fs.readFile(blogFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo del blog' });
    }
    const blogs = JSON.parse(data);
    blogs.push(nuevoArticulo);

    fs.writeFile(blogFilePath, JSON.stringify(blogs, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error al escribir en el archivo del blog' });
      }
      res.json({ message: 'Artículo agregado exitosamente', articulo: nuevoArticulo });
    });
  });
});

// Ruta para eliminar un artículo por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(blogFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo del blog' });
    }
    let blogs = JSON.parse(data);
    blogs = blogs.filter((blog) => blog.id !== parseInt(id));

    fs.writeFile(blogFilePath, JSON.stringify(blogs, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error al escribir en el archivo del blog' });
      }
      res.json({ message: 'Artículo eliminado exitosamente' });
    });
  });
});

module.exports = router;
