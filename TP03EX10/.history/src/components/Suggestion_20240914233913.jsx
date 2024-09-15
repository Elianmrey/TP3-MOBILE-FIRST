import './Suggestion.css'; 
import PropTypes from 'prop-types'

export default function Suggestion({ photo, name, mutualFriend }) {
    return (
        <div className="suggestion">
            <img src={photo} alt={name} />
            <div className="title-container">
            <h3>{name}</h3>
            <span>Amigo em comum: {mutualFriend}</span></div>
        </div>
    );
}

Suggestion.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mutualFriend: PropTypes.string.isRequired
}