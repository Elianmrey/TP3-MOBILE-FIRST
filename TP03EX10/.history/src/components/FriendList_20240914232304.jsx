import Friend from './Friend';
import './FriendList.css'; 
import Prop

export default function FriendList({ friends }) {
    return (
        <section className="friend-list">
            {friends.map((friend, index) => (
                <Friend key={index} {...friend} />
            ))}
        </section>
    );
}


