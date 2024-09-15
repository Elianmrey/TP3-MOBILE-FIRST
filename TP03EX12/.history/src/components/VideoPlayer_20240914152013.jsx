export default function VideoPlayer() {
    return (
        <div className="video-player">
            <video controls autoPlay  className="video-player">
                <source src="https://videos.pexels.com/video-files/2818546/2818546-sd_640_360_24fps.mp4" type="video/mp4" />
                O video não pode ser mostrado porque seu browser não suporta esta tag,
                atualize o navegador a ultima versão ou utilize um navegador diferente.
            </video>
        </div>
    );
};


