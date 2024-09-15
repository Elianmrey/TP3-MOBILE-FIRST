import PropTypes from 'prop-types'
import Post from './Post';
import './PostFeed.css'; 

export default function PostFeed({ posts }) {
    return(
        <section className="post-feed">
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </section>
    );
}

PostFeed