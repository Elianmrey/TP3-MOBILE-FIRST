
import './UserComments.css';

const comments = [
    { name: 'João', date: '2023-09-10', comment: 'Ótimo produto!' },
    { name: '', date: '2023-09-11', comment: 'Satisfatório.' },
    { name: 'Usuário 3', date: '2023-09-12', comment: 'Muito bom, recomendo!' },
];

function UserComments() {
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

export default UserComments;
