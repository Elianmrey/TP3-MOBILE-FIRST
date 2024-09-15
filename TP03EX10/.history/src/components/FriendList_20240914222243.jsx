import Friend from './Friend';
import './FriendList.css'; 

export default FriendList = ({ friends }) => (
    <section className="friend-list">
        {friends.map((friend, index) => (
            <Friend key={index} {...friend} />
        ))}
    </section>
);


