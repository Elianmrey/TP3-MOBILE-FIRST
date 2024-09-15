import { useState } from 'react';
import PropTypes from 'prop-types'
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ThemeToggle from './components/ThemeToggle';
import './App.css';


export default function App() {
  const [theme, setTheme] = useState('light');
  const [categories, setCategories] = useState(['Mercado', 'Farmácia', 'Estudos']);
  const [tasks, setTasks] = useState({
    Mercado: ['Comprar frutas', 'Comprar pão'],
    Farmácia: ['Comprar remédio'],
    Estudos: ['Estudar React', 'Ler livro']
  });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addTask = (category, task) => {
    setTasks({
      ...tasks,
      [category]: [...tasks[category], task]
    });
  };

  const removeTask = (category, taskIndex) => {
    const newTasks = [...tasks[category]];
    newTasks.splice(taskIndex, 1);
    setTasks({
      ...tasks,
      [category]: newTasks
    });
  };

  const addCategory = (category) => {
    if (category && !categories.includes(category)) {
      setCategories([...categories, category]);
      setTasks({
        ...tasks,
        [category]: []
      });
    }
  };

  const removeCategory = (category) => {
    if (categories.includes(category)) {
      const newCategories = categories.filter(cat => cat !== category);
      const { [category]: _, ...newTasks } = tasks;
      setCategories(newCategories);
      setTasks(newTasks);
      if (selectedCategory === category) {
        setSelectedCategory(null);
      }
    }
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <CategoryList 
        categories={categories} 
        selectCategory={setSelectedCategory} 
        addCategory={addCategory} 
        removeCategory={removeCategory} 
      />
      {selectedCategory && (
        <>
          <TaskList 
            category={selectedCategory} 
            tasks={tasks[selectedCategory]} 
            removeTask={removeTask} 
          />
          <TaskForm category={selectedCategory} addTask={addTask} />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
};