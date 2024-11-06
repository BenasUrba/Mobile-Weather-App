import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/Header';
import { ThemeProvider } from '../context/ThemeContext';
import MainContainer from '../components/MainContainer';
import { fetchWeatherData, fetchForecastData } from '../utils/api';

export default function WeatherPage() {
    const { location } = useParams();
    const navigate = useNavigate();
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const weather = await fetchWeatherData(location);
                const forecast = await fetchForecastData(location);
                setWeatherData(weather);
                setForecastData(forecast);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (location) {
            fetchData();
        }
    }, [location]);

    const currentLocation = weatherData ? {
        name: `${weatherData.name}, ${weatherData.sys.country}`,
        coordinates: { lat: weatherData.coord.lat, lon: weatherData.coord.lon },
        icon: weatherData.weather[0].icon,
        pop: forecastData?.list[0]?.pop * 100,
        temp: Math.round(weatherData.main.temp)
    } : null;

    if (loading) {
        return (
            <ThemeProvider>
                <Header currentLocation={currentLocation} />
                <div className="main-container loading-container">
                    <div className="loader"></div>
                    <p className="loading-text">Loading weather data...</p>
                </div>
            </ThemeProvider>
        );
    }

    if (error) {
        return (
            <ThemeProvider>
                <div className="error-container">
                    <div className="error-content">
                        <h2>Oops! Something went wrong</h2>
                        <p className="error-message">{error}</p>
                        <button 
                            className="return-button"
                            onClick={() => navigate('/')}
                        >
                            Return to Search
                        </button>
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider>
            <Header currentLocation={currentLocation}/>
            <MainContainer 
                weatherData={weatherData}
                forecastData={forecastData}
            />
        </ThemeProvider>
    );
}



