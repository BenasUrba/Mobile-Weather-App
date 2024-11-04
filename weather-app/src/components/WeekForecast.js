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
            {pop >= 0.1 && (
                <span className="forecast-pop">
                    {Math.round((pop * 100) / 5) * 5}%
                </span>
            )}
        </div>
        <div className="forecast-temps">
            <span className="forecast-text">
                Low: {low}° / High: {high}°
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
                popSum: item.pop > 0 ? item.pop : 0,
                rainReadings: item.pop > 0 ? 1 : 0,
                readings: 1
            });
        } else {
            const existing = dailyForecasts.get(date);
            dailyForecasts.set(date, {
                ...existing,
                low: Math.min(existing.low, temp),
                high: Math.max(existing.high, temp),
                popSum: item.pop > 0 ? existing.popSum + item.pop : existing.popSum,
                rainReadings: item.pop > 0 ? existing.rainReadings + 1 : existing.rainReadings,
                readings: existing.readings + 1
            });
        }
    });

    const forecasts = Array.from(dailyForecasts.values())
        .slice(0, 5)
        .map((forecast, index) => ({
            ...forecast,
            day: index === 0 ? 'Today' : forecast.date.toLocaleDateString('en-US', { weekday: 'short' }),
            pop: forecast.rainReadings > 0 ? forecast.popSum / forecast.rainReadings : 0
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
