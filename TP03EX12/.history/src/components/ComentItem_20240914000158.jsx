import PropTypes from 'prop-types'

export default function CommentItem({ name, date, comment })
{
    return (
        <div className="comment-item">
            <p>{name} - {date}</p>
            <p>{comment}</p>
        </div>
    );
};


CommentItem.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
}