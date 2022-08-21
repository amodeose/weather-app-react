import cloud from "../icons/cloud.png";
import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <div className={classes.icon}>
      <h2>{props.condition}</h2>
      <img src={cloud} />
    </div>
  );
};

export default Icon;
