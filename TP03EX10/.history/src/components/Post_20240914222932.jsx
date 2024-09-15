
import './Post.css';

.friends - section {
    margin - top: 20px;
}

.friend {
    display: flex;
    align - items: center;
    background - color: var(--secondary - color);
    padding: 10px;
    border - radius: 5px;
    margin - bottom: 10px;
    border: 1px solid #ccc;
}

.friend img {
    width: 50px;
    height: 50px;
    border - radius: 50 %;
    margin - right: 10px;
}

.friend h3 {
    font - size: 1.1em;
}

.friend span {
    font - size: 0.9em;
    color: #666;
}

@media(prefers - color - scheme: dark) {
  .friend {
        background - color: #444;
        border - color: #555;
    }

  .friend h3, .friend span {
        color: var(--text - color - dark);
    }
}

@media(min - width: 768px) {
  .friend {
        padding: 15px;
    }

  .friend h3 {
        font - size: 1.3em;
    }

  .friend img {
        width: 60px;
        height: 60px;
    }
}
Post = ({ image, title, text, date, author, likes, shares, comments }) => (
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

export default Post;
