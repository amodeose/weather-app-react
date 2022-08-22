import Button from "./UI/Button";
import key from "./key";
import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import classes from "./App.module.css";

function App() {
  const [data, setData] = useState("");
  const [condition, setCondition] = useState("");
  const [dataExists, setDataExists] = useState(false);

  const lat = 43.707310971342956;
  const lon = -79.51579538343675;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

  async function fetchWeatherHandler() {
    const response = await fetch(URL);
    const data = await response.json();
    setData(data.main);
    setCondition(data.weather[0].main);
    setDataExists(true);
  }

  return (
    <div>
      <header className={classes.nav}>
        <Button onClick={fetchWeatherHandler}>Get Weather</Button>
      </header>

      {dataExists && <WeatherDisplay data={data} condition={condition} />}
    </div>
  );
}

export default App;
