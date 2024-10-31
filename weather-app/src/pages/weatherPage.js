import React from 'react';
import '../styles/styles.css';
import Header from '../components/Header';
import { ThemeProvider } from '../context/ThemeContext';
import MainContainer from '../components/MainContainer';

const currentLocation = {
    name: 'London, England',
    coordinates: { lat: 51.5074, lon: -0.1278 },
};

export default function WeatherPage() {
    return (
    <ThemeProvider>
        <Header currentLocation={currentLocation}/>
        <MainContainer/>
    </ThemeProvider>
    );
}



