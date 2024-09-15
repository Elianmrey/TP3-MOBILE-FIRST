
import './UserComments.css';

const comments = [
    { name: 'João', date: '2023-09-10', comment: 'Ótimo produto!' },
    { name: 'Raquel', date: '2023-09-11', comment: 'Satisfatório.' },
    { name: 'Kaike', date: '2023-09-12', comment: 'Muito bom, recomendo!' },
];

export default  function UserComments() {
    return (
        <section className="user-comments">
            <h2>Comentários</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <strong>{comment.name}</strong> ({comment.date})
                        <p>{comment.comment}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}


