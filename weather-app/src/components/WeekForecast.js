import React from 'react';
import '../styles/styles.css';

const ForecastCard = ({ day, low, high, icon, pop }) => (
    <div className="forecast-row">
        <div className="forecast-day">
            <span className="forecast-text">{day}</span>
        </div>
        <div className="forecast-icon-container">
            <img 
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt="weather icon" 
                className="weekly-icon" 
            />
        </div>
        <div className="forecast-temps">
            <span className="forecast-text">
                Low: {low}° / High: {high}°
                {pop > 0 && <span> • {Math.round(pop * 100)}% ☔</span>}
            </span>
        </div>
    </div>
);

const WeekForecast = ({ forecastData }) => {
    if (!forecastData || !forecastData.list) return null;

    const dailyForecasts = new Map();
    
    forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000).toDateString();
        const temp = Math.round(item.main.temp);
        
        if (!dailyForecasts.has(date)) {
            dailyForecasts.set(date, {
                date: new Date(item.dt * 1000),
                low: temp,
                high: temp,
                icon: item.weather[0].icon,
                pop: item.pop,
                readings: 1
            });
        } else {
            const existing = dailyForecasts.get(date);
            dailyForecasts.set(date, {
                ...existing,
                low: Math.min(existing.low, temp),
                high: Math.max(existing.high, temp),
                pop: Math.max(existing.pop, item.pop),
                readings: existing.readings + 1
            });
        }
    });

    const forecasts = Array.from(dailyForecasts.values())
        .slice(0, 5)
        .map((forecast, index) => ({
            ...forecast,
            day: index === 0 ? 'Today' : forecast.date.toLocaleDateString('en-US', { weekday: 'short' })
        }));

    return (
        <>
            <div className="forecast-title" style={{paddingTop: '0.4rem'}}>5-Day Forecast</div>
            <div className="weekly-forecast">
                {forecasts.map((item, index) => (
                    <ForecastCard
                        key={index}
                        day={item.day}
                        low={item.low}
                        high={item.high}
                        icon={item.icon}
                        pop={item.pop}
                    />
                ))}
            </div>
        </>
    );
};

export default WeekForecast;
