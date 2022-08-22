import classes from "./WeatherDisplay.module.css";
import Card from "../UI/Card";
import WeatherCard from "./WeatherCard"

const WeatherDisplay = (props) => {
  return (
    <div>
      {props.isLoading && (
        <Card className={classes.loading}>
          <h3>Loading...</h3>
        </Card>
      )}
      {!props.isLoading && props.currentWeather != null && (
        <WeatherCard weatherInfo={props.currentWeather} />
      )}
    </div>
  );
};

export default WeatherDisplay;
