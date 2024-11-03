import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            const encodedLocation = encodeURIComponent(searchTerm.trim());
            navigate(`/weather/${encodedLocation}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a city..."
                className="search-input"
            />
        </form>
    );
}

export default SearchBox;