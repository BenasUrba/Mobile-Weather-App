import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchWeatherData, fetchForecastData } from '../utils/api';

function FavoriteItem({ location }) {
    const navigate = useNavigate();
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                console.log('Fetching data for:', location.name);
                const [weather, forecast] = await Promise.all([
                    fetchWeatherData(location.coordinates, true),
                    fetchForecastData(location.coordinates, true)
                ]);
                
                console.log('Received weather data:', weather);
                console.log('Received forecast data:', forecast);

                if (isMounted) {
                    setWeatherData(weather);
                    setForecastData(forecast);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching weather data for', location.name, ':', error);
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [location.coordinates.lat, location.coordinates.lon]);

    const handleClick = () => {
        navigate(`/weather/${encodeURIComponent(location.name)}`);
    };

    if (loading || !weatherData || !forecastData) {
        return (
            <div className="favourite-item">
                <div className="favourite-main-info">
                    <span className="favourite-name">{location.name}</span>
                    <span className="loading-text">Loading...</span>
                </div>
            </div>
        );
    }

    const roundedPop = Math.round(forecastData.list[0].pop * 100 / 5) * 5;

    return (
        <div 
            className="favourite-item"
            onClick={handleClick}
        >
            <div className="favourite-main-info">
                <span className="favourite-name">{location.name}</span>
                <span className="favourite-temp">{Math.round(weatherData.main.temp)}°C</span>
            </div>
            <div className="favourite-weather-info">
                <img 
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                    alt="Weather Icon" 
                    className="favourite-icon" 
                />
                {roundedPop >= 10 && (
                    <span className="favourite-pop">{roundedPop}%</span>
                )}
            </div>
        </div>
    );
}

export default FavoriteItem; 