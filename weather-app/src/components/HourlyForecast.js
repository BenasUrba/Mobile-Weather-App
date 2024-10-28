import React from 'react';
import '../styles/styles.css';

const ForecastCard = ({ time, temp, icon }) => (
    <div className="forecast-card">
      <span className="forecast-time">{time}</span>
      <img src={icon} alt="weather icon" className="forecast-icon" />
      <span className="forecast-temp">{temp}°</span>
    </div>
  );
  
  const HourlyForecast = ({ hourlyData }) => {
    return (
      <div className="hourly-forecast">
        {hourlyData.map((hour, index) => (
          <ForecastCard
            key={index}
            time={hour.time}
            temp={hour.temperature}
            icon={hour.weatherIcon}
          />
        ))}
      </div>
    );
  };
  
  export default HourlyForecast;