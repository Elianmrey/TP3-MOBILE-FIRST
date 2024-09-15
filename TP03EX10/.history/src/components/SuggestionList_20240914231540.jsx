import Suggestion from './Suggestion'; 
import PropTypes from 'prop-types'

export default function SuggestionList({ suggestions }) {
    return (
        <section className="suggestion-list">
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} {...suggestion} />
            ))}
        </section>
    );
}

SuggestionList.PropTypes = {
    suggestions: PropTypes.arrayOf(PropTypes.shape({}
}