import PropTypes from 'prop-types'

export default function TaskList({ category, tasks, removeTask }) {
    return (
        <div className="task-list">
            <h3>Tarefas de {category}</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button class=' ' onClick={() => removeTask(category, index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

TaskList.propTypes = {
    category: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    removeTask: PropTypes.func.isRequired
};
