import classes from "./WeatherCard.module.css";
import MainStats from "./MainStats";
import Icon from "./Icon";
import Card from "../UI/Card";

const WeatherCard = (props) => {
  return (
    <Card>
      <h3 className={classes.condition}>{props.weatherInfo.weather[0].main}</h3>
      <div className={classes.display}>
        <Icon condition={props.weatherInfo.weather[0].main} />
        <MainStats stats={props.weatherInfo.main} />
      </div>
    </Card>
  );
};

export default WeatherCard;
