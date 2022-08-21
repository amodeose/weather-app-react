import Card from './UI/Card';
import Button from './UI/Button';
import key from './key';
import { useState } from 'react';

function App() {

  const [data, setData] = useState("");
  const [dataExists, setDataExists] = useState(false);

  const lat = 43.707310971342956;
  const lon = -79.51579538343675;

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

  const fetchWeatherHandler = () => {
    fetch(URL).then(response => {
      return response.json();
    }).then(data => {
      console.log(data.main);
      setData(data.main);
      setDataExists(true);
    })
  }

  return (
    <div>
      <Card>
        <Button onClick={fetchWeatherHandler}>Get Weather</Button>
        {dataExists && 
        <div>
          <p><strong>Current Temperature: </strong>{data.temp}</p>
          <p><strong>Maximum Temperature: </strong>{data.temp_max}</p>
          <p><strong>Minimum Temperature: </strong>{data.temp_min}</p>
          <p><strong>Current Humidity: </strong>{data.humidity}%</p>
        </div>
        }
      </Card>
    </div>
  );
}

export default App;
