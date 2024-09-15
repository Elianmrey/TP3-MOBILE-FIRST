import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideos = () => {
    const videos = [
        { title: "Related Video 1", author: "Author 1" },
        { title: "Related Video 2", author: "Author 2" },
    ];

    return (
        <div className="related-videos">
            <h3>Related Videos</h3>
            {videos.map((video, index) => (
                <RelatedVideoItem key={index} title={video.title} author={video.author} />
            ))}
        </div>
    );
};


