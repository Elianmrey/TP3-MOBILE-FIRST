import Suggestion from './Suggestion'; 
import Prop

export default function SuggestionList({ suggestions }) {
    return (
        <section className="suggestion-list">
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} {...suggestion} />
            ))}
        </section>
    );
}
