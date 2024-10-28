import React from 'react';
import '../styles/styles.css';
import Header from '../components/Header';
import { ThemeProvider } from '../context/ThemeContext';

export default function WeatherPage() {
    return (
    <ThemeProvider>
        <Header/>
    </ThemeProvider>
    );
}

