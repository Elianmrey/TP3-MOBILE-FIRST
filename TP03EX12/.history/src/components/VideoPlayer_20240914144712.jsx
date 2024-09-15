export default function VideoPlayer() {
    return (
        <div className="video-player">
            <video controls className="video-player">
                <source src="video.mp4" type="video/mp4" />
                O video não pode ser mostrado porque seu browser não suporta esta tag,
                atualize o navegado
            </video>
        </div>
    );
};


