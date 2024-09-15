import Post from './Post';
import './PostFeed.css'; 

export default  PostFeed = ({ posts }) => (
    <section className="post-feed">
        {posts.map((post, index) => (
            <Post key={index} {...post} />
        ))}
    </section>
);


