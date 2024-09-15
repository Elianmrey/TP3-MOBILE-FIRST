import './Friend.css';

export default Friend = ({ photo, name, mutualFriends }) => (
    <div className="friend">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <span>{mutualFriends} amigos em comum</span>
    </div>
);

 Friend;
