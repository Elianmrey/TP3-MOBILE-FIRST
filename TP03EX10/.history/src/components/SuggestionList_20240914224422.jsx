import Suggestion from './Suggestion';


 SuggestionList = ({ suggestions }) => (
    <section className="suggestion-list">
        {suggestions.map((suggestion, index) => (
            <Suggestion key={index} {...suggestion} />
        ))}
    </section>
);

export default SuggestionList;
