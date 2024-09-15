import Suggestion from './Suggestion';
import '.'

export default function SuggestionList({ suggestions }) {
    (
        <section className="suggestion-list">
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} {...suggestion} />
            ))}
        </section>
    );
}
