import classes from "./WeatherCard.module.css";
import MainStats from "./MainStats";
import Icon from "./Icon";
import Card from "../UI/Card";

const WeatherCard = (props) => {
  return (
    <Card>
      <div className={classes.head}>
        {props.hours != null && <h3>{props.hours} Hours: </h3>}
        <h3>{props.weatherInfo.weather[0].main}</h3>
      </div>
      <div className={classes.main}>
        <Icon condition={props.weatherInfo.weather[0].main} />
        <MainStats stats={props.weatherInfo.main} />
      </div>
    </Card>
  );
};

export default WeatherCard;
