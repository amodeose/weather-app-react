import classes from './MainStats.module.css';

const MainStats = (props) => {
  return (
    <div className={classes['main-stats']}>
      <p>
        <strong>Temp: </strong>
        {props.stats.temp}°C
      </p>
      <p>
        <strong>Feels Like: </strong>
        {props.stats.feels_like}°C
      </p>
      <p>
        <strong>Humidity: </strong>
        {props.stats.humidity}%
      </p>
    </div>
  );
};

export default MainStats;
