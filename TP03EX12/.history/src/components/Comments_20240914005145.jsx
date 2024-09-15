import CommentItem from "./CommentItem";

export default function Comments()
{
    const comments = [
        { name: "João Silva", date: "2024-09-13", comment: "Vídeo incrível! Muito bem explicado." },
        { name: "Maria Oliveira", date: "2024-09-12", comment: "Achei o conteúdo muito interessante, parabéns!" },
        { name: "Carlos Pereira", date: "2024-09-11", comment: "Me ajudou bastante, obrigado por compartilhar!" },
        { name: "Ana Souza", date: "2024-09-10", comment: "Muito bom! A edição está impecável." },
        { name: "Paulo Lima", date: "2024-09-09", comment: "Gostei, mas acho que poderia ser mais detalhado." },
        { name: "Fernanda Costa", date: "2024-09-08", comment: "Adorei o vídeo, vou recomendar para os amigos!" },
        { name: "Bruno Rodrigues", date: "2024-09-07", comment: "Informações bem claras, direto ao ponto." },
        { name: "Carla Martins", date: "2024-09-06", comment: "Muito educativo, aprendi algo novo hoje!" },
        { name: "Lucas Santos", date: "2024-09-05", comment: "Que vídeo excelente, continue assim!" },
        { name: "Juliana Ferreira", date: "2024-09-04", comment: "Vídeo legal, mas senti falta de mais exemplos práticos." }
    ];


    return (
        <div className="comments">
            <h3>Comments</h3>
            {comments.map((comment, index) => (
                <CommentItem key={index} {...comment} />
            ))}
        </div>
    );
};

