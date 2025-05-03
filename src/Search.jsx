import React, { useState } from "react";
import axios from "axios";

import './App.css'

export default function Search() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const key = "7a9df9a4f940btc116d43db796o3aa67";
      const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  
      axios.get(url).then((response) => {
        setWeather({
          temperature: response.data.temperature.current,
          condition: response.data.condition.description,
          humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
          icon: <img src={response.data.condition.icon_url} />,
        });
      });
    }
  
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        {weather && (
          <div>
            <h2>Weather in {city}</h2>
            <ul>
              <li>
                <strong>Condition:</strong>{" "}
              </li>
              <li>{weather.temperature} ˚C</li>
              <li>
                <strong>Humidity:</strong>
              </li>
              <li>{weather.humidity} %</li>
              <li>
                <strong>Wind:</strong>
              </li>
              <li>{weather.wind} km/h</li>
              <li>
                <strong>Condition:</strong>
              </li>
              <li>{weather.condition}</li>
              <li>{weather.icon} </li>
            </ul>
          </div>
        )}
      </div>
    );
  }