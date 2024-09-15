import Suggestion from './Suggestion';
import './sugestionList.css'

export default function SuggestionList({ suggestions }) {
    (
        <section className="suggestion-list">
            {suggestions.map((suggestion, index) => (
                <Suggestion key={index} {...suggestion} />
            ))}
        </section>
    );
}
