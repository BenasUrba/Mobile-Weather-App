const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (query, isCoordinates = false) => {
    try {
        let url;
        if (isCoordinates) {
            // If coordinates are provided
            const { lat, lon } = query;
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        } else {
            // If city name is provided
            url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;
        }

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Weather API Error:', error);
        throw error;
    }
};

// This is the 5-day/3-hour forecast endpoint (free tier)
export const fetchForecastData = async (query, isCoordinates = false) => {
    try {
        let url;
        if (isCoordinates) {
            // If coordinates are provided
            const { lat, lon } = query;
            url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        } else {
            // If city name is provided
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${API_KEY}`;
        }

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Forecast API Error:', error);
        throw error;
    }
}; 