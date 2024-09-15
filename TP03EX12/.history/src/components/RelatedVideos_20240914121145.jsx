import RelatedVideoItem from "./RelatedVideoItem";

export default function RelatedVideos()
{
    const videos = [
        { title: "Inception", author: "Christopher Nolan", img:'https://cdn.pixabay.com/photo/2024/08/18/14/34/folkstone-8978132_1280.jpg' },
        { title: "The Godfather", author: "Francis Ford Coppola", img:'https://cdn.pixabay.com/photo/2024/09/03/09/03/deer-9018759_640.jpg' },
        { title: "Pulp Fiction", author: "Quentin Tarantino", img: 'https://cdn.pixabay.com/photo/2024/09/05/12/55/white-cheeked-turaco-9024880_640.jpg' },
        { title: "Parasite", author: "Bong Joon Ho", img: 'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg' },
        { title: "The Dark Knight", author: "Christopher Nolan", img: 'https://cdn.pixabay.com/photo/2022/04/03/09/04/bridge-7108432_640.jpg' },
        { title: "Schindler's List", author: "Steven Spielberg", img: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_640.jpg'  },
    ];


    return (
        <div className="related-videos">
            <h3>Related Videos</h3>
            {videos.map((video, index) => (
                <RelatedVideoItem key={index} title={video.title} author={video.author}  img=""/>
            ))}
        </div>
    );
};


