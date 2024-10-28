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


function MainContainer() {
    const { isDarkMode } = useContext(ThemeContext);
    const windIcon = isDarkMode ? windLight : windDark;
    const rainIcon = isDarkMode ? rainLight : rainDark;
    const humidityIcon = isDarkMode ? humidityLight : humidityDark;


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
        </div>
    );
}

export default MainContainer;
