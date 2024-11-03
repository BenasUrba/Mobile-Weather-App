import React, { useContext } from 'react';
import '../styles/styles.css';
import windLight from '../assets/windLight.png';
import windDark from '../assets/windDark.png';
import { ThemeContext } from '../context/ThemeContext';
import rainLight from '../assets/rainLight.png';
import rainDark from '../assets/rainDark.png';
import humidityLight from '../assets/humidityLight.png';
import humidityDark from '../assets/humidityDark.png';
import rainBlue from '../assets/rainBlue.png';
import HourlyForecast from './HourlyForecast';
import WeekForecast from './WeekForecast';

function MainContainer({ weatherData, forecastData }) {
    const { isDarkMode } = useContext(ThemeContext);
    const windIcon = isDarkMode ? windLight : windDark;
    const rainIcon = isDarkMode ? rainLight : rainDark;
    const humidityIcon = isDarkMode ? humidityLight : humidityDark;

    if (!weatherData || !forecastData) {
        return <div>Loading...</div>;
    }

    const hourlyData = forecastData.list.slice(0,10).map(item => ({
        time: new Date(item.dt * 1000).getHours() + ":00",
        temperature: Math.round(item.main.temp),
        weatherIcon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        pop: item.pop,
    }))
    

    const dailyPrecipitation = forecastData.list
    .slice(0, 8) // Get first 24 hours (8 x 3-hour intervals)
    .reduce((total, item) => {
        const rain = item.rain?.['3h'] || 0;  // 3-hour rain amount
        const snow = item.snow?.['3h'] || 0;  // 3-hour snow amount
        return total + rain + snow;
    }, 0);

    return (
        <div>
            <div className="main-container">
                <div className="location-name">{weatherData.name}, {weatherData.sys.country}</div>
                <img 
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                    className="weather-icon" 
                    alt="weather icon" 
                />
                <div className="temp-text">{Math.round(weatherData.main.temp)}°C</div>
                <div className="weather-description">{weatherData.weather[0].description}</div>
                <div className="extra-info">
                    <div className="extra-info-tags">
                        <img src={windIcon} className="extra-info-icon" alt="wind icon" />
                        <div className="info-text">{Math.round(weatherData.wind.speed)}m/s</div>
                    </div>
                    <div className="extra-info-tags">
                        <img src={rainIcon} className="extra-info-icon" alt="rain icon" />
                        <div className="info-text">{Math.round(forecastData.list[0].pop * 100)}%</div>
                    </div>
                    <div className="extra-info-tags">
                        <img src={humidityIcon} className="extra-info-icon" alt="humidity icon" />
                        <div className="info-text">{weatherData.main.humidity}%</div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <HourlyForecast hourlyData={hourlyData} />
                <WeekForecast forecastData={forecastData} />
            </div>
        </div>
    );
}

export default MainContainer;
