import React from 'react';
import '../styles/styles.css';
import SearchBox from '../components/SearchBox';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

function SearchPage() {

    const handleSearch = (location) => {
        console.log('Searching for:', location);
    };

    return (
        <ThemeProvider>
            <ThemeToggle className="home-toggle"/>
            <div className="search-page-container">
                <h1 className="search-page-header">Weather App</h1>
                <SearchBox onSearch={handleSearch} />
            </div>
            <div className="favourites-container">
                <h2 className="favourites-header">Your Saved Locations</h2>
                <div className="favourites-box">

                </div>
            </div>
        </ThemeProvider>
    );
}

export default SearchPage;

