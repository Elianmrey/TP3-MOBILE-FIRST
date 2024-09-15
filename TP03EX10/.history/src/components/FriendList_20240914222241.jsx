import Friend from './Friend';
import './FriendList.css'; 

FriendList = ({ friends }) => (
    <section className="friend-list">
        {friends.map((friend, index) => (
            <Friend key={index} {...friend} />
        ))}
    </section>
);


