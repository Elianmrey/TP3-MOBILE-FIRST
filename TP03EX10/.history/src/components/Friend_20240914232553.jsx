import './Friend.css';

export default function Friend({ photo, name, mutualFriends }) {
   return (
        <div className="friend">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <span>{mutualFriends} amigos em comum</span>
        </div>
    );
}

Friend.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mutualFriends: PropTypes.number.isRequired
    
}
