import PropTypes from 'prop-types'

const RelatedVideoItem = ({ title, author }) => {
    return (
        <div className="related-video-item">
            <img src="thumbnail.jpg" alt={title} />
            <p>{title}</p>
            <p>{author}</p>
        </div>
    );
};

export default RelatedVideoItem;

RelatedVideoItem.propType = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired

}