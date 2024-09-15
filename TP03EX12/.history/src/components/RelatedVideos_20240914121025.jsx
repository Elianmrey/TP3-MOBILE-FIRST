import RelatedVideoItem from "./RelatedVideoItem";

export default function RelatedVideos()
{
    const videos = [
        { title: "Inception", author: "Christopher Nolan", img:'https://cdn.pixabay.com/photo/2024/08/18/14/34/folkstone-8978132_1280.jpg' },
        { title: "The Godfather", author: "Francis Ford Coppola", img:'https://cdn.pixabay.com/photo/2024/09/03/09/03/deer-9018759_640.jpg' },
        { title: "Pulp Fiction", author: "Quentin Tarantino", img: },
        { title: "Parasite", author: "Bong Joon Ho", img: },
        { title: "The Dark Knight", author: "Christopher Nolan", img: },
        { title: "Schindler's List", author: "Steven Spielberg", img:  },
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


