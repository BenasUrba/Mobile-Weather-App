import React, { createContext, useState, useEffect } from 'react';

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState(() => {
        // Initialize from localStorage if available
        const saved = localStorage.getItem('favouriteLocations');
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever favourites changes
    useEffect(() => {
        localStorage.setItem('favouriteLocations', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (location) => {
        if (!favourites.some(fav => fav.name === location.name)) {
            setFavourites([...favourites, location]);
        }
    };

    const removeFavourite = (locationName) => {
        setFavourites(favourites.filter(fav => fav.name !== locationName));
    };

    const isFavourite = (locationName) => {
        return favourites.some(fav => fav.name === locationName);
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
}


