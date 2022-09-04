import classes from "./WeatherDisplay.module.css";
import Card from "../UI/Card";
import WeatherCard from "./WeatherCard";

const WeatherDisplay = (props) => {
  
  if (props.httpError) {
    return (
      <Card className={classes.error}>
        <h3>Cannot retrieve data for entered city. Please double check your spelling.</h3>
      </Card>
    )
  };

  if (props.isLoading) {
    return (
      <Card className={classes.loading}>
        <h3>Loading...</h3>
      </Card>
    )
  };

  let forecastCards;

  if (props.forecast !== null) {
    let hours = 0;
    forecastCards = props.forecast.list.map((item, index) => {
      hours = hours + 3;
      return <WeatherCard key={index} weatherInfo={item} hours={hours} />;
    });
  }

  return (
    <main className={classes.main}>
      {props.currentWeather !== null && (
        <WeatherCard weatherInfo={props.currentWeather} hours={null}/>
      )}
      {props.forecast !== null && forecastCards}
    </main>
  );
};

export default WeatherDisplay;

//
