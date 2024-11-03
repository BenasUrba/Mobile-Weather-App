const API_KEY = 'd329e9dec65864b6887bca924d52f42b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
    try {
        const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
            }
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch weather data');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Weather API Error:', error);
        throw error;
    }
};

// This is the 5-day/3-hour forecast endpoint (free tier)
export const fetchForecastData = async (city) => {
    try {
        const url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
            }
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch forecast data');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Forecast API Error:', error);
        throw error;
    }
}; 