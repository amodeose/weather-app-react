import Button from "./UI/Button";
import key from "./key";
import { useState } from "react";
import classes from "./App.module.css";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const lat = 43.707310971342956;
  const lon = -79.51579538343675;
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  const hourlyForecastURL = `https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

  async function fetchCurrentWeather() {
    setIsLoading(true);
    const response = await fetch(currentWeatherURL);
    const data = await response.json();
    setCurrentWeather(data);
    setIsLoading(false);
  }

  async function fetchHourlyForecast() {
    setIsLoading(true);
    const response = await fetch(currentWeatherURL);
    const data = await response.json();
    setCurrentWeather(data);
    setIsLoading(false);
  }

  return (
    <div>
      <header className={classes.nav}>
        <Button onClick={fetchCurrentWeather}>Current Weather</Button>
        <Button onClick={fetchHourlyForecast}>Hourly Forecast</Button>
      </header>
      <WeatherDisplay isLoading={isLoading} currentWeather={currentWeather}/>
    </div>
  );
}

export default App;
