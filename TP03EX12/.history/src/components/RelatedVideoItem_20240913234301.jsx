import React from "react";

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
