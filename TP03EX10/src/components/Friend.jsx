import './Friend.css';
import PropTypes from 'prop-types'

export default function Friend({ photo, name, mutualFriends }) {
   return (
        <div className="friend">
           <img src={photo} alt={name} />
           <div className="friends-title-container">
            <h3>{name}</h3>
            <span>{mutualFriends} amigos em comum</span>
           </div>
       </div>
    );
}

Friend.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mutualFriends: PropTypes.number.isRequired
}
