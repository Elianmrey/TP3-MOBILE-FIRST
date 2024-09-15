import Suggestion from './Suggestion'; 
import PropTypes from 'prop-types'

export default function SuggestionList({ suggestions }) {
    return (
        <section className="suggestion-list">
            <div >
            <h2 className='title-suggestion-section'>Sugestões</h2>
            </div>
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} {...suggestion} />
            ))}
        </section>
    );
}

SuggestionList.propTypes = {
   suggestions: PropTypes.arrayOf(PropTypes.shape({})),
}