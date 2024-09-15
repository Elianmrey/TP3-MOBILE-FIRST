import Friend from './Friend';
import './FriendList.css'; 
import PropTypes from 

export default function FriendList({ friends }) {
    return (
        <section className="friend-list">
            {friends.map((friend, index) => (
                <Friend key={index} {...friend} />
            ))}
        </section>
    );
}


