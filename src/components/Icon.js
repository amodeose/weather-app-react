import cloud from "../icons/cloud.png";
import partlyCloudy from "../icons/partly-cloudy.png";
import sun from "../icons/sun.png";
import rain from "../icons/rain.png";
import thunder from "../icons/thunder.png";
import classes from "./Icon.module.css";

const Icon = (props) => {

  let image;
  switch(props.condition) {
    case "Thunderstorm":
      image = thunder;
      break;
    case "Rain":
      image = rain;
      break;
    case 'Clouds':
      image = cloud;
      break;
    case 'Clear':
      image = sun;
      break;
    default:
      break;
  };

  return <img src={image} className={classes.icon}/>;
};

export default Icon;
