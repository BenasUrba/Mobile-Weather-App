import React from 'react';
import '../styles/styles.css';

const ForecastCard = ({ day, low, high, icon }) => (
    <div className="forecast-row">
        <div className="forecast-day">
            <span className="forecast-text">{day}</span>
        </div>
        <div className="forecast-icon-container">
            <img src={icon} alt="weather icon" className="weekly-icon" />
        </div>
        <div className="forecast-temps">
            <span className="forecast-text">Low: {low}° / High: {high}°</span>
        </div>
    </div>
);

const WeekForecast = ({ weeklyData }) => {
    return (
        <div className="weekly-forecast">
        {weeklyData.map((day, index) => (
            <ForecastCard
            key={index}
            day={day.day}
            low={day.low}
            high={day.high}
            icon={day.icon}
            />
        ))}
        </div>
    );
};

export default WeekForecast;
