import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import { ThemeProvider } from '../context/ThemeContext';
import MainContainer from '../components/MainContainer';

export default function WeatherPage() {
    return (
    <ThemeProvider>
        <Header/>
        <MainContainer/>
    </ThemeProvider>
    );
}



