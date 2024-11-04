import React from 'react';
import '../styles/styles.css';

const ForecastCard = ({ time, temp, icon, pop }) => (
    <div className="forecast-card">
      <span className="forecast-time">{time}</span>
      <div className="icon-container">
        <img src={icon} alt="weather icon" className="forecast-icon" />
        {pop >= 10 && (
          <span className="forecast-pop">{Math.round(pop / 5) * 5}%</span>
        )}
      </div>
      <span className="forecast-temp">{temp}°</span>
    </div>
  );


  
  const HourlyForecast = ({ hourlyData }) => {

    console.log(hourlyData);
    
    return (<>
      <div className="forecast-title">3-Hour Forecast</div>
      <div className="hourly-forecast">
        {hourlyData.map((hour, index) => (
          <ForecastCard
            key={index}
            time={hour.time}
            temp={hour.temperature}
            icon={hour.weatherIcon}
            pop={hour.pop * 100}
          />
        ))}
      </div>
      </>
    );
  };
  
  export default HourlyForecast;
