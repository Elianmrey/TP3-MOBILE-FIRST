
import './Post.css';

export default  Post = ({ image, title, text, date, author, likes, shares, comments }) => (
    <div className="post">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{text}</p>
        <span>{date}</span>
        <span>Postado por: {author}</span>
        <div className="post-stats">
            <span>{likes} curtidas</span>
            <span>{shares} compartilhamentos</span>
        </div>
        <div className="comments">
            {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
            ))}
        </div>
    </div>
);

Post;
