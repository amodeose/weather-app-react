import Button from "./UI/Button";
import key from "./key";
import { useState } from "react";
import classes from "./App.module.css";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [stats, setStats] = useState("");
  const [condition, setCondition] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const lat = 43.707310971342956;
  const lon = -79.51579538343675;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

  async function fetchWeatherHandler() {
    setIsLoading(true);
    const response = await fetch(URL);
    const data = await response.json();
    setStats(data.main);
    setCondition(data.weather[0].main);
    setIsLoading(false);
  }

  return (
    <div>
      <header className={classes.nav}>
        <Button onClick={fetchWeatherHandler}>Get Current Weather</Button>
      </header>
      <WeatherDisplay isLoading={isLoading} stats={stats} condition={condition}/>
    </div>
  );
}

export default App;
