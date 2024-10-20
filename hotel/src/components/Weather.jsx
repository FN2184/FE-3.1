import { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/weather');
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4 bg-blue-200 rounded-lg">
      {weather ? (
        <>
          <h3>Clima en {weather.city}</h3>
          <p>Temperatura: {weather.temperature}°C</p>
          <p>Descripción: {weather.description}</p>
        </>
      ) : (
        <p>Cargando clima...</p>
      )}
    </div>
  );
}

export default Weather;
