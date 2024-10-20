const axios = require('axios');

const getWeather = async (req, res) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const city = 'Caracas';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const weather = response.data;
    res.json({
      city: weather.name,
      temperature: weather.main.temp,
      description: weather.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo el clima' });
  }
};

module.exports = { getWeather };
