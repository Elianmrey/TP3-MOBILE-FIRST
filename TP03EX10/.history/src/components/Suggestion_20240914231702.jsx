import './Suggestion.css'; 

export default function Suggestion({ photo, name, mutualFriend }) {
    return (
        <div className="suggestion">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <span>Amigo em comum: {mutualFriend}</span>
        </div>
    );
}

