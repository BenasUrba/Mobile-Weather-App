import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/Header';
import { ThemeProvider } from '../context/ThemeContext';
import MainContainer from '../components/MainContainer';
import { fetchWeatherData, fetchForecastData } from '../utils/api';

export default function WeatherPage() {
    const { location } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const weather = await fetchWeatherData(location);
                const forecast = await fetchForecastData(location);
                setWeatherData(weather);
                setForecastData(forecast);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        if (location) {
            fetchData();
        }
    }, [location]);

    const currentLocation = weatherData ? {
        name: `${weatherData.name}, ${weatherData.sys.country}`,
        coordinates: { lat: weatherData.coord.lat, lon: weatherData.coord.lon },
    } : null;

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



