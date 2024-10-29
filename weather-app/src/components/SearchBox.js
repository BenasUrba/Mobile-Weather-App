import React from "react";
import '../styles/styles.css';
import { useState } from "react";

function SearchBox({ onSearch }) {

    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(location);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input 
                type="search"
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Enter location" 
                className="search-input"
                enterKeyHint="search"
            />
        </form>
    );
}

export default SearchBox;