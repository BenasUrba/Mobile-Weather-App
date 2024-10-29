import React, { useContext } from 'react';
import '../styles/styles.css';
import moon from '../assets/darkMode.png'
import sun from '../assets/lightMode.png'
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <img
            src={isDarkMode ? sun : moon}
            alt={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
            className="home-toggle"
        />
    );
}
