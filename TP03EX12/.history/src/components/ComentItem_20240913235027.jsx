import PropTypes from 'prop'

const CommentItem = ({ name, date, comment }) => {
    return (
        <div className="comment-item">
            <p>{name} - {date}</p>
            <p>{comment}</p>
        </div>
    );
};

export default CommentItem;
