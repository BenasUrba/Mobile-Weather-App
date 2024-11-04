import React, { useContext } from 'react';
import '../styles/styles.css';
import SearchBox from '../components/SearchBox';
import ThemeToggle from '../components/ThemeToggle';
import { FavouritesContext } from '../context/FavouritesContext';
import FavoriteItem from '../components/FavoriteItem';

function SearchPage() {
    const { favourites } = useContext(FavouritesContext);

    return (
        <>
            <ThemeToggle className="home-toggle"/>
            <div className="search-page-container">
                <h1 className="search-page-header">Weather App</h1>
                <SearchBox />
            </div>
            <div className="favourites-container">
                <h2 className="favourites-header">Your Saved Locations</h2>
                <div className="favourites-box">
                    {favourites.length === 0 ? (
                        <p className="no-favourites">No saved locations yet</p>
                    ) : (
                        favourites.map((location) => (
                            <FavoriteItem 
                                key={location.name} 
                                location={location} 
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchPage;

