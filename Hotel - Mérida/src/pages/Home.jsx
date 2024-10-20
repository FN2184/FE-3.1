import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css'; // Asegúrate de tener un archivo CSS dedicado
import hotelImage from '../assets/hotel-image.jpg'; // 

function Home() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = 'f7ee3d4ea7a3825e4f132d65b3e5bc3a'; // Tu clave API de OpenWeather
        const city = 'Merida';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(url)
            .then(response => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home-container center">
            <div className="home-content">
                <h1>Bienvenidos al Hotel Andino Venezuela</h1>
                <p className="hotel-text">
                    Disfruta de una experiencia única en el corazón de los Andes venezolanos. 
                    Nuestro hotel ofrece vistas panorámicas de las montañas, un servicio excepcional 
                    y todas las comodidades que necesitas para relajarte.
                </p>
                <img src={hotelImage} alt="Hotel Venezuela" className="hotel-image" />
                
                

                {/* Sección de clima */}
                <div className="weather-section">
                    {loading ? (
                        <p>Cargando información del clima...</p>
                    ) : (
                        weather && (
                            <div>
                                <h2>Clima en {weather.name}</h2>
                                <p>Temperatura: {weather.main.temp} °C</p>
                                <p>Clima: {weather.weather[0].description}</p>
                                <p>Humedad: {weather.main.humidity}%</p>
                                <p>Viento: {weather.wind.speed} km/h</p>
                            </div>
                        )
                    )}
                </div>
                <p className="hotel-text">
                Dirección: Calle Principal, Urbanización Los Andes, Mérida, Venezuela
                </p>
            </div>
        </div>
    );
}

export default Home;
