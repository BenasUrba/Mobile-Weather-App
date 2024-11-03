import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// Import both light and dark theme icons
import humidityDark from '../assets/humidityDark.png';
import humidityLight from '../assets/humidityLight.png';
import windDark from '../assets/windDark.png';
import windLight from '../assets/windLight.png';
import rainDark from '../assets/rainDark.png';
import rainLight from '../assets/rainLight.png';

export default function ExtraInfo({ humidity, windSpeed, rain }) {
    const { isDarkMode } = useContext(ThemeContext);

    // Select icons based on theme
    const humidityIcon = isDarkMode ? humidityLight : humidityDark;
    const windIcon = isDarkMode ? windLight : windDark;
    const rainIcon = isDarkMode ? rainLight : rainDark;

    // Get rain amount for the last 1h or default to 0
    const rainAmount = rain?.['1h'] || 0;

    return (
        <div className="extra-info">
            <div className="extra-info-tags">
                <img src={humidityIcon} alt="humidity" className="extra-info-icon" />
                <span className="info-text">{humidity}%</span>
            </div>
            <div className="extra-info-tags">
                <img src={windIcon} alt="wind speed" className="extra-info-icon" />
                <span className="info-text">{windSpeed} m/s</span>
            </div>
            <div className="extra-info-tags">
                <img src={rainIcon} alt="rain" className="extra-info-icon" />
                <span className="info-text">{rainAmount} mm</span>
            </div>
        </div>
    );
} 