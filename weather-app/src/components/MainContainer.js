import React, { useContext } from 'react';
import '../styles/styles.css';
import cloudy from '../assets/cloudy.png';
import windLight from '../assets/windLight.png';
import windDark from '../assets/windDark.png';
import { ThemeContext } from '../context/ThemeContext';
import rainLight from '../assets/rainLight.png';
import rainDark from '../assets/rainDark.png';
import humidityLight from '../assets/humidityLight.png';
import humidityDark from '../assets/humidityDark.png';
import HourlyForecast from './HourlyForecast';
import WeekForecast from './WeekForecast';

function MainContainer() {
    const { isDarkMode } = useContext(ThemeContext);
    const windIcon = isDarkMode ? windLight : windDark;
    const rainIcon = isDarkMode ? rainLight : rainDark;
    const humidityIcon = isDarkMode ? humidityLight : humidityDark;

    const hourlyData = [
        { time: "Now", temperature: 25, weatherIcon: cloudy },
        { time: "1 PM", temperature: 26, weatherIcon: cloudy },
        { time: "2 PM", temperature: 26, weatherIcon: cloudy },
        { time: "3 PM", temperature: 25, weatherIcon: cloudy },
        { time: "4 PM", temperature: 24, weatherIcon: cloudy },
        { time: "5 PM", temperature: 23, weatherIcon: cloudy },
        { time: "6 PM", temperature: 22, weatherIcon: cloudy },
        { time: "7 PM", temperature: 21, weatherIcon: cloudy },
        { time: "8 PM", temperature: 20, weatherIcon: cloudy },
        { time: "9 PM", temperature: 19, weatherIcon: cloudy },
    ];

    const weeklyData = [
        { day: "Mon", low: 22, high: 28, icon: cloudy },
        { day: "Tue", low: 21, high: 27, icon: cloudy },
        { day: "Wed", low: 23, high: 29, icon: cloudy },
        { day: "Thu", low: 20, high: 26, icon: cloudy },
        { day: "Fri", low: 19, high: 25, icon: cloudy },
        { day: "Sat", low: 20, high: 26, icon: cloudy },
        { day: "Sun", low: 21, high: 27, icon: cloudy },
    ];


    return (
        <div>
            <div className="main-container">
                <div className="location-name">London, England</div>
                <img src={cloudy} className="weather-icon" alt="weather icon" />
                <div className="temp-text">25°C</div>
                <div className="weather-description">Cloudy</div>
                <div className="extra-info">
                    <div className="extra-info-tags">
                        <img src={windIcon} className="extra-info-icon" alt="wind icon" />
                        <div className="info-text">4km/hr</div>
                    </div>
                    <div className="extra-info-tags">
                        <img src={rainIcon} className="extra-info-icon" alt="rain icon" />
                        <div className="info-text">10mm</div>
                    </div>
                    <div className="extra-info-tags">
                        <img src={humidityIcon} className="extra-info-icon" alt="humidity icon" />
                        <div className="info-text">69%</div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <HourlyForecast hourlyData={hourlyData} />
                <WeekForecast weeklyData={weeklyData} />
            </div>
        </div>
    );
}

export default MainContainer;
