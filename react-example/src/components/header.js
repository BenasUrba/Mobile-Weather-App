import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import backButtonDark from '../assets/backDark.png'; // Dark mode back button
import backButtonLight from '../assets/backLight.png'; // Light mode back button
import moon from '../assets/darkMode.png'
import sun from '../assets/lightMode.png'
import { ThemeContext } from '../context/ThemeContext';


export default function Header() {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <header className="header">
            <Link to="/">
                <img 
                    src={isDarkMode ? backButtonLight : backButtonDark} 
                    alt="back button" 
                    className="back-button" 
                />
            </Link>
            <img
            src={isDarkMode ? sun : moon}
            alt={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
            className="toggle-icon"
        />
        </header>
    );
}