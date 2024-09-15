import RelatedVideoItem from "./RelatedVideoItem";

export default function RelatedVideos()
{
    const videos = [
        { title: "Inception", author: "Christopher Nolan", img: },
        { title: "The Godfather", author: "Francis Ford Coppola" },
        { title: "Pulp Fiction", author: "Quentin Tarantino" },
        { title: "Parasite", author: "Bong Joon Ho" },
        { title: "The Dark Knight", author: "Christopher Nolan" },
        { title: "Schindler's List", author: "Steven Spielberg" },
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


