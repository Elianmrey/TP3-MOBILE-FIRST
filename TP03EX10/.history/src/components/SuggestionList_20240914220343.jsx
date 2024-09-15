import React from 'react';
import Suggestion from './Suggestion';
import './SuggestionList.css'; 

const SuggestionList = ({ suggestions }) => (
    <section className="suggestion-list">
        {suggestions.map((suggestion, index) => (
            <Suggestion key={index} {...suggestion} />
        ))}
    </section>
);

export default SuggestionList;
