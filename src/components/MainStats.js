const MainStats = (props) => {
  return (
    <div>
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
