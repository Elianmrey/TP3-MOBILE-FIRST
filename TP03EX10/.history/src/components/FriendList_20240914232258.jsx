import Friend from './Friend';
import './FriendList.css'; 
imp

export default function FriendList({ friends }) {
    return (
        <section className="friend-list">
            {friends.map((friend, index) => (
                <Friend key={index} {...friend} />
            ))}
        </section>
    );
}


