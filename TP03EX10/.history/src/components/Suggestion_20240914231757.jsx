import './Suggestion.css'; 
import PropTypes from 'prop-types'

export default function Suggestion({ photo, name, mutualFriend }) {
    return (
        <div className="suggestion">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <span>Amigo em comum: {mutualFriend}</span>
        </div>
    );
}

Suggestion.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    
}