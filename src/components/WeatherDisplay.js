import classes from "./WeatherDisplay.module.css";
import MainStats from "./MainStats";
import Icon from "./Icon";

const WeatherDisplay = props => {
    return (
        <div>
            <Icon />
            <MainStats data={props.data}/>
        </div>
    )
};

export default WeatherDisplay;