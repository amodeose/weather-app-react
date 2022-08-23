import Button from "./UI/Button";
import key from "./key";
import { useState } from "react";
import classes from "./App.module.css";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const lat = 43.70;
  const lon = -79.51;
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

  async function fetchCurrentWeather() {
    setIsLoading(true);
    const response = await fetch(currentWeatherURL);
    const data = await response.json();
    setCurrentWeather(data);
    setForecast(null);
    setIsLoading(false);
  }

  async function fetchForecast() {
    setIsLoading(true);
    const response = await fetch(forecastURL);
    const data = await response.json();
    setForecast(data);
    setCurrentWeather(null);
    setIsLoading(false);
  }

  return (
    <div>
      <header className={classes.nav}>
        <Button onClick={fetchCurrentWeather}>Current Weather</Button>
        <Button onClick={fetchForecast}>Forecast</Button>
      </header>
      <WeatherDisplay isLoading={isLoading} currentWeather={currentWeather} forecast={forecast}/>
    </div>
  );
}

export default App;
