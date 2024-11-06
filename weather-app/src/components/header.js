import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/styles.css';
import backButtonDark from '../assets/backDark.png';
import backButtonLight from '../assets/backLight.png';
import { ThemeContext } from '../context/ThemeContext';
import starLight from '../assets/starLight.png';
import starDark from '../assets/starDark.png';
import starSaved from '../assets/starSaved.png';
import { FavouritesContext } from '../context/FavouritesContext';

export default function Header({ currentLocation }) {
    const { isDarkMode } = useContext(ThemeContext);
    const { isFavourite, addFavourite, removeFavourite } = useContext(FavouritesContext);
    const location = useLocation();

    const handleStarClick = () => {
        if (!currentLocation || !currentLocation.name) {
            console.warn('No location data available');
            return;
        }
        
        try {
            if (isFavourite(currentLocation.name)) {
                removeFavourite(currentLocation.name);
            } else {
                addFavourite({
                    name: currentLocation.name,
                    coordinates: currentLocation.coordinates
                });
            }
        } catch (error) {
            console.error('Error handling favorite:', error);
        }
    };

    const getStarIcon = () => {
        if (!currentLocation) return isDarkMode ? starLight : starDark;
        return isFavourite(currentLocation.name) ? starSaved : (isDarkMode ? starLight : starDark);
    };

    return (
        <header className="header">
            <Link to="/">
                <img 
                    src={isDarkMode ? backButtonLight : backButtonDark} 
                    alt="back button" 
                    className="back-button" 
                />
            </Link>
            {location.pathname !== '/search' && (
                <img 
                    src={getStarIcon()} 
                    alt="star" 
                    className="toggle-icon" 
                    onClick={handleStarClick}
                    style={{ cursor: 'pointer' }}
                />
            )}
        </header>
    );
}