import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulario enviado');
        // Lógica para enviar el formulario al servidor
    };

    return (
        <div className="center-container">
            <h1>Contacto</h1>
            <p>¿Tienes alguna pregunta? ¡Envíanos un mensaje!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    name="message"
                    placeholder="Escribe tu mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
