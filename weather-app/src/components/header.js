import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import backButtonDark from '../assets/backDark.png';
import backButtonLight from '../assets/backLight.png';
import { ThemeContext } from '../context/ThemeContext';
import starLight from '../assets/starLight.png';
import starDark from '../assets/starDark.png';
import starSaved from '../assets/starSaved.png';


export default function Header() {
    const { isDarkMode } = useContext(ThemeContext);
    const star = isDarkMode ? starLight : starDark;

    return (
        <header className="header">
            <Link to="/">
                <img 
                    src={isDarkMode ? backButtonLight : backButtonDark} 
                    alt="back button" 
                    className="back-button" 
                />
            </Link>
            <img src={star} alt="star" className="toggle-icon" />
        </header>
    );
}