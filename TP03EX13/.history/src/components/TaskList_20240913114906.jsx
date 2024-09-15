import 

const TaskList = ({ category, tasks, removeTask }) => (
    <div className="task-list">
        <h3>Tarefas de {category}</h3>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task} <button onClick={() => removeTask(category, index)}>Remover</button>
                </li>
            ))}
        </ul>
    </div>
);

export default TaskList;
