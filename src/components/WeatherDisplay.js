import classes from "./WeatherDisplay.module.css";
import Card from "../UI/Card";
import WeatherCard from "./WeatherCard";
import { useEffect } from "react";

const WeatherDisplay = (props) => {
  let forecastCards = "";

  if (props.forecast != null) {
    let hours = 0;
    forecastCards = props.forecast.list.map((item) => {
      hours = hours + 3;
      return <WeatherCard weatherInfo={item} hours={hours} />;
    });
  }

  return (
    <main className={classes.main}>
      {props.isLoading && (
        <Card className={classes.loading}>
          <h3>Loading...</h3>
        </Card>
      )}
      {!props.isLoading && props.currentWeather != null && (
        <WeatherCard weatherInfo={props.currentWeather} hours={null}/>
      )}
      {!props.isLoading && props.forecast != null && forecastCards}
    </main>
  );
};

export default WeatherDisplay;

//
