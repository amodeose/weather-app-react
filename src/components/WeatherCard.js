import classes from "./WeatherCard.module.css";
import MainStats from "./MainStats";
import Icon from "./Icon";
import Card from "../UI/Card";

const WeatherDisplay = (props) => {
  return (
    <Card>
      <h3 className={classes.condition}>{props.condition}</h3>
      <div className={classes.display}>
        <Icon condition={props.condition} />
        <MainStats stats={props.stats} condition={props.condition} />
      </div>
    </Card>
  );
};

export default WeatherDisplay;
