import Button from "./UI/Button";
import key from "./key";
import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import classes from "./App.module.css";
import Card from "./UI/Card";

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
        <Button onClick={fetchWeatherHandler}>Get Weather</Button>
      </header>
      {isLoading && <Card className={classes.loading}><h3>Loading...</h3></Card>}
      {!isLoading && condition.length > 0 && <WeatherDisplay stats={stats} condition={condition} />}
    </div>
  );
}

export default App;
