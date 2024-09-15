import PropTypes from 'prop-types'

export default function RelatedVideoItem({ title, author, img })
{
    return (
        <div className="related-video-item">
            <img src={img} alt={title} />
            <div className="title-container">
            <p>{title}</p>
            <p>{author}</p>
            </div>
        </div>
    );
};

RelatedVideoItem.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}