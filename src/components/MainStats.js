import classes from './MainStats.module.css';

const MainStats = (props) => {
  return (
    <div className={classes['main-stats']}>
      <p>
        <strong>Temp: </strong>
        {props.stats.temp}°C
      </p>
      <p>
        <strong>Max Temp: </strong>
        {props.stats.temp_max}°C
      </p>
      <p>
        <strong>Min Temp: </strong>
        {props.stats.temp_min}°C
      </p>
      <p>
        <strong>Humidity: </strong>
        {props.stats.humidity}%
      </p>
    </div>
  );
};

export default MainStats;
