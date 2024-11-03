import React, { createContext, useState, useEffect } from 'react';

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState(() => {
        // Initialize from localStorage
        try {
            const saved = localStorage.getItem('favouriteLocations');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading favourites:', error);
            return [];
        }
    });

    // Save to localStorage whenever favourites changes
    useEffect(() => {
        localStorage.setItem('favouriteLocations', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (location) => {
        if (!location || !location.name) return;
        
        // Only add if not already in favorites
        if (!favourites.some(fav => fav.name === location.name)) {
            setFavourites(prev => [...prev, {
                name: location.name,
                coordinates: location.coordinates,
                // Add any other location data you want to save
            }]);
        }
    };

    const removeFavourite = (locationName) => {
        setFavourites(prev => prev.filter(fav => fav.name !== locationName));
    };

    const isFavourite = (locationName) => {
        return favourites.some(fav => fav.name === locationName);
    };

    return (
        <FavouritesContext.Provider value={{
            favourites,
            addFavourite,
            removeFavourite,
            isFavourite
        }}>
            {children}
        </FavouritesContext.Provider>
    );
}


