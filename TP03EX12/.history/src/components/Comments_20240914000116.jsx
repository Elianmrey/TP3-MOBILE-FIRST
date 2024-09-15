
import CommentItem from "./CommentItem";

export default function Comments() => {
    const comments = [
        { name: "User 1", date: "2024-09-13", comment: "Great video!" },
        { name: "User 2", date: "2024-09-12", comment: "Very informative." },
    ];

    return (
        <div className="comments">
            <h3>Comments</h3>
            {comments.map((comment, index) => (
                <CommentItem key={index} {...comment} />
            ))}
        </div>
    );
};

