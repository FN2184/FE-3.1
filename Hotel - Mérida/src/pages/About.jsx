import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/About.css';

function About() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    // Llamada al servidor para obtener los testimonios
    axios.get('http://localhost:5000/api/testimonios')
      .then(response => {
        setTestimonios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los testimonios:', error);
      });
  }, []);

  return (
    <div className="center-container">
      <h1>Sobre Nosotros</h1>
      <p>Somos un hotel comprometido con la excelencia y el confort de nuestros clientes.</p>

      <h2 className="testimonios-header">Testimonios de Clientes</h2>

      <div className="testimonios-list">
        {testimonios.map((testimonio, index) => (
          <div key={index} className="testimonio-card">
            <h3>{testimonio.nombre}</h3>
            <p>{testimonio.testimonio}</p> {/* Mostramos el testimonio */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
