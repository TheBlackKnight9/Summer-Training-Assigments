import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState(""); // for input field
  const [city, setCity] = useState(""); // for triggering search
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    

    async function fetchWeather() {
      setLoading(true);
      setError(null);
      setWeather(null);

      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(res.data);
      } catch (err) {
        setError("City not found or API error.");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setCity(query.trim()); 
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="city-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>🌥 Condition: {weather.weather[0].main}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
