import Card from './UI/Card';
import Button from './UI/Button';
import key from './key';

function App() {

  const lat = 43.707310971342956;
  const lon = -79.51579538343675;

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

  const fetchWeatherHandler = () => {
    fetch(URL).then(response => {
      return response.json();
    }).then(data => {
      console.log(data)
    })
  }

  return (
    <div>
      <Card>
        <Button onClick={fetchWeatherHandler}>Get Weather</Button>
        <h1>Hello</h1>
      </Card>
    </div>
  );
}

export default App;
