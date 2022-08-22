import classes from './MainStats.module.css';

const MainStats = (props) => {
  return (
    <div className={classes['main-stats']}>
      <p>
        <strong>Temp: </strong>
        {props.data.temp}°C
      </p>
      <p>
        <strong>Max Temp: </strong>
        {props.data.temp_max}°C
      </p>
      <p>
        <strong>Min Temp: </strong>
        {props.data.temp_min}°C
      </p>
      <p>
        <strong>Humidity: </strong>
        {props.data.humidity}%
      </p>
    </div>
  );
};

export default MainStats;
