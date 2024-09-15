import Suggestion from './Suggestion'; 
import PropTypes from 'prop-types'

export default function SuggestionList({ suggestions }) {
    return (
        <section className="suggestion-list">
            <h1 className='title-section'>Sugestões</h1>
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} {...suggestion} />
            ))}
        </section>
    );
}

SuggestionList.propTypes = {
   suggestions: PropTypes.arrayOf(PropTypes.shape({})),
}