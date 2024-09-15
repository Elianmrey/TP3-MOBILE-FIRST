import React from 'react';
import Friend from './Friend';
import './FriendList.css'; // Estilos específicos para FriendList, se necessário

const FriendList = ({ friends }) => (
    <section className="friend-list">
        {friends.map((friend, index) => (
            <Friend key={index} {...friend} />
        ))}
    </section>
);

export default FriendList;
