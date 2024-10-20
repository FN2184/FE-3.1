import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Blog.css';

function Blog() {
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/blog')
            .then(response => {
                setArticulos(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los artículos:', error);
            });
    }, []);

    return (
        <div className="center-container">
            <h1>Blog</h1>
            {articulos.length > 0 ? (
                articulos.map((articulo, index) => (
                    <div key={index}>
                        <h2>{articulo.titulo}</h2>
                        <p>{articulo.contenido}</p>
                    </div>
                ))
            ) : (
                <p>No hay artículos disponibles en este momento.</p>
            )}
        </div>
    );
}

export default Blog;
