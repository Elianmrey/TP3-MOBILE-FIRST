
import Post from './Post';
import './PostFeed.css'; 

const PostFeed = ({ posts }) => (
    <section className="post-feed">
        {posts.map((post, index) => (
            <Post key={index} {...post} />
        ))}
    </section>
);

export default PostFeed;
