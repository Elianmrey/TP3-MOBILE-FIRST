import { useState } from 'react';
import PropTypes from 'prop-types'


export default function TaskForm ({ category, addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(category, newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Nova Tarefa" 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

TaskForm.propTypes = {
  category: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired

}
 
