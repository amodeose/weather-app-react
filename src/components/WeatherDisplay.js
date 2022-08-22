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
      {!props.isLoading && props.condition.length > 0 && (
        <WeatherCard stats={props.stats} condition={props.condition} />
      )}
    </div>
  );
};

export default WeatherDisplay;
