import React from 'react';
import './Friend.css'; // Estilos específicos para Friend, se necessário

const Friend = ({ photo, name, mutualFriends }) => (
    <div className="friend">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <span>{mutualFriends} amigos em comum</span>
    </div>
);

export default Friend;
