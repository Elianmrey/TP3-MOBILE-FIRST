import PropTypes from 'prop-types'

export default function RelatedVideoItem({ title, author, img })
{
    return (
        <div className="related-video-item">
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>{author}</p>
        </div>
    );
};

RelatedVideoItem.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}