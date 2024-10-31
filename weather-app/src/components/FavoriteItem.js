import React from 'react';
import { useNavigate } from 'react-router-dom';

function FavoriteItem({ location }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/weather/${location.name}`);
    };

    return (
        <div 
            className="favourite-item"
            onClick={handleClick}
        >
            <span className="favourite-name">{location.name}</span>
        </div>
    );
}

export default FavoriteItem; 