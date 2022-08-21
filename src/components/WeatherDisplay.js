import classes from "./WeatherDisplay.module.css";
import MainStats from "./MainStats";
import Icon from "./Icon";

const WeatherDisplay = props => {
    return (
        <div className={classes.display}>
            <Icon condition={props.condition}/>
            <MainStats data={props.data}/>
        </div>
    )
};

export default WeatherDisplay;