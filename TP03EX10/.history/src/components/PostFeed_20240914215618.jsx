import React from 'react';
import Post from './Post';
import './PostFeed.css'; // Estilos específicos do PostFeed, se necessário

const PostFeed = ({ posts }) => (
    <section className="post-feed">
        {posts.map((post, index) => (
            <Post key={index} {...post} />
        ))}
    </section>
);

export default PostFeed;
