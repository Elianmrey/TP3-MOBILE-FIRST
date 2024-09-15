import React from 'react';
import './Suggestion.css'; // Estilos específicos do Suggestion, se necessário

const Suggestion = ({ photo, name, mutualFriend }) => (
    <div className="suggestion">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <span>Amigo em comum: {mutualFriend}</span>
    </div>
);

export default Suggestion;
