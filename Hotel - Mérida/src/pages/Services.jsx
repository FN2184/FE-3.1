import React from 'react';

function Services() {
  return (
    <div className="services-container">
      <h1>Nuestros Servicios</h1>

      <div className="service-item">
        <h2>Restaurante</h2>
        <p>Disfruta de una experiencia gastronómica inolvidable con platos de chefs internacionales y opciones locales.</p>
        <img src="ruta_a_imagen_restaurante.jpg" alt="Restaurante" />
      </div>

      <div className="service-item">
        <h2>Spa</h2>
        <p>Relájate en nuestro spa con tratamientos de lujo, masajes y saunas. Perfecto para desestresarte durante tu estancia.</p>
        <img src="ruta_a_imagen_spa.jpg" alt="Spa" />
      </div>

      <div className="service-item">
        <h2>Gimnasio</h2>
        <p>Acceso 24/7 a un gimnasio completamente equipado con equipos modernos para mantener tu rutina de ejercicios durante tus vacaciones.</p>
        <img src="ruta_a_imagen_gimnasio.jpg" alt="Gimnasio" />
      </div>
    </div>
  );
}

export default Services;
