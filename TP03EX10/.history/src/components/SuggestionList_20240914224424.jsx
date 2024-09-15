import Suggestion from './Suggestion';


export default function SuggestionList = ({ suggestions }) => (
    <section className="suggestion-list">
        {suggestions.map((suggestion, index) => (
            <Suggestion key={index} {...suggestion} />
        ))}
    </section>
);

export default SuggestionList;
