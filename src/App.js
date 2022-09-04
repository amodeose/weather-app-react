import Button from "./UI/Button";
import key from "./key";
import { useState, useRef } from "react";
import classes from "./App.module.css";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
 
  const cityRef = useRef();
  
  async function fetchCoords() {
    const city = cityRef.current.value;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    return [data[0].lat, data[0].lon];
  };

  async function fetchCurrentWeather() {
    setHttpError(null);
    setIsLoading(true);
    const [lat, lon] = await fetchCoords().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
    const data = await response.json();
    setCurrentWeather(data);
    setForecast(null);
    setIsLoading(false);
  }

  async function fetchForecast() {
    setHttpError(null);
    setIsLoading(true);
    const [lat, lon] = await fetchCoords().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
    const data = await response.json();
    setForecast(data);
    setCurrentWeather(null);
    setIsLoading(false);
  }

  return (
    <div>
      <header className={classes.nav}>
        <input ref={cityRef} placeholder="Please enter a city"/>
        <Button onClick={fetchCurrentWeather}>Current Weather</Button>
        <Button onClick={fetchForecast}>Forecast</Button>
      </header>
      <WeatherDisplay isLoading={isLoading} httpError={httpError} currentWeather={currentWeather} forecast={forecast}/>
    </div>
  );
}

export default App;
