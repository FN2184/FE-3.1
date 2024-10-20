import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [articulo, setArticulo] = useState(null);

  useEffect(() => {
    // Obtener el artículo por su ID
    axios.get(`http://localhost:5000/api/blog`)
      .then((response) => {
        const foundArticle = response.data.find((art) => art.id === parseInt(id));
        setArticulo(foundArticle);
      })
      .catch((error) => {
        console.error('Error al obtener el artículo:', error);
      });
  }, [id]);

  if (!articulo) {
    return <p>Cargando artículo...</p>;
  }

  return (
    <div className="articulo-completo">
      <h1>{articulo.titulo}</h1>
      <p>{articulo.contenido}</p>
      <p><strong>Autor:</strong> {articulo.autor}</p>
      <p><strong>Fecha:</strong> {articulo.fecha}</p>
    </div>
  );
};

export default SingleBlogPost;
